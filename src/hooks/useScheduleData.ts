import { useState, useEffect } from 'react';
import { WeeklyScheduleItem } from '../types';
import { weeklySchedule as initialData } from '../data/scheduleData';
import { db } from '../lib/firebase';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';

export const useScheduleData = () => {
  const [schedule, setSchedule] = useState<WeeklyScheduleItem[]>(() => {
    const stored = localStorage.getItem('glee_schedule');
    if (stored) {
      return JSON.parse(stored);
    }
    return initialData;
  });

  useEffect(() => {
    const docRef = doc(db, 'schedules', 'weekly');
    
    // Setup a real-time listener from Firebase
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists() && docSnap.data().items) {
        const newSchedule = docSnap.data().items as WeeklyScheduleItem[];
        setSchedule(newSchedule);
        // Sync back to localStorage as a fallback
        localStorage.setItem('glee_schedule', JSON.stringify(newSchedule));
        window.dispatchEvent(new Event('schedule-updated'));
      } else {
        // If it doesn't exist yet, seed it with the current local schedule
        setDoc(docRef, { items: schedule }, { merge: true }).catch(console.error);
      }
    }, (error) => {
      console.error("Firebase realtime listener error:", error);
    });

    // Fallback for cross-tab sync if Firebase is delayed/offline
    const handleStorageChange = () => {
      const updated = localStorage.getItem('glee_schedule');
      if (updated) {
        setSchedule(JSON.parse(updated));
      }
    };
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('schedule-updated', handleStorageChange);
    
    return () => {
      unsubscribe();
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('schedule-updated', handleStorageChange);
    };
  }, []);

  const saveSchedule = async (newSchedule: WeeklyScheduleItem[]) => {
    // Optimistic local update
    setSchedule(newSchedule);
    localStorage.setItem('glee_schedule', JSON.stringify(newSchedule));
    window.dispatchEvent(new Event('schedule-updated'));
    
    // Persist to Firebase
    try {
      const docRef = doc(db, 'schedules', 'weekly');
      await setDoc(docRef, { items: newSchedule });
    } catch (error) {
      console.error("Error saving to Firebase:", error);
    }
  };

  return { schedule, saveSchedule };
};
