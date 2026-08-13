import { useState, useEffect } from 'react';
import { MenuItem } from '../types';
import { menuItems as initialData } from '../data/menuData';

export const useMenuData = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    const stored = localStorage.getItem('glee_menu_items');
    if (stored) {
      return JSON.parse(stored);
    }
    return initialData;
  });

  useEffect(() => {
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
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('menu-updated', handleStorageChange);
    };
  }, []);

  const saveMenu = (newMenu: MenuItem[]) => {
    setMenuItems(newMenu);
    localStorage.setItem('glee_menu_items', JSON.stringify(newMenu));
    window.dispatchEvent(new Event('menu-updated'));
  };

  return { menuItems, saveMenu };
};
