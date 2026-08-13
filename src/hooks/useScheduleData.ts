import { useState, useEffect } from 'react';
import { WeeklyScheduleItem } from '../types';
import { weeklySchedule as initialData } from '../data/scheduleData';

export const useScheduleData = () => {
  const [schedule, setSchedule] = useState<WeeklyScheduleItem[]>(() => {
    const stored = localStorage.getItem('glee_schedule');
    if (stored) {
      return JSON.parse(stored);
    }
    return initialData;
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const updated = localStorage.getItem('glee_schedule');
      if (updated) {
        setSchedule(JSON.parse(updated));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('schedule-updated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('schedule-updated', handleStorageChange);
    };
  }, []);

  const saveSchedule = (newSchedule: WeeklyScheduleItem[]) => {
    setSchedule(newSchedule);
    localStorage.setItem('glee_schedule', JSON.stringify(newSchedule));
    window.dispatchEvent(new Event('schedule-updated'));
  };

  return { schedule, saveSchedule };
};
