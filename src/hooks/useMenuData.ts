import { useState, useEffect } from 'react';
import { MenuItem } from '../types';
import { menuItems as initialData } from '../data/menuData';
import { db } from '../lib/firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

export const useMenuData = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const stored = localStorage.getItem('glee_menu_items');
    if (stored) {
      return JSON.parse(stored);
    }
    return initialData;
  });

  useEffect(() => {
    const docRef = doc(db, 'menus', 'main');
    
    // Setup a real-time listener from Firebase
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().items) {
        const newMenu = docSnap.data().items as MenuItem[];
        setMenuItems(newMenu);
        // Sync back to localStorage as a fallback
        localStorage.setItem('glee_menu_items', JSON.stringify(newMenu));
        window.dispatchEvent(new Event('menu-updated'));
      } else {
        // If it doesn't exist yet, seed it with the current local menu
        setDoc(docRef, { items: menuItems }, { merge: true }).catch(console.error);
      }
    }, (error) => {
      console.error("Firebase realtime listener error:", error);
    });

    // Fallback for cross-tab sync if Firebase is delayed/offline
    const handleStorageChange = () => {
      const updated = localStorage.getItem('glee_menu_items');
      if (updated) {
        setMenuItems(JSON.parse(updated));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    // Custom event for same-window updates
    window.addEventListener('menu-updated', handleStorageChange);
    
    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('menu-updated', handleStorageChange);
    };
  }, []);

  const saveMenu = async (newMenu: MenuItem[]) => {
    // Optimistic local update
    setMenuItems(newMenu);
    localStorage.setItem('glee_menu_items', JSON.stringify(newMenu));
    window.dispatchEvent(new Event('menu-updated'));

    // Persist to Firebase
    try {
      const docRef = doc(db, 'menus', 'main');
      await setDoc(docRef, { items: newMenu });
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  };

  return { menuItems, saveMenu };
};
