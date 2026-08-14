import React, { useState, useEffect } from 'react';
import { WeeklyScheduleItem } from '../types';
import { X, Save, Lock, ChevronLeft, Calendar, Check } from 'lucide-react';

interface ScheduleAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  scheduleItems: WeeklyScheduleItem[];
  onSave: (items: WeeklyScheduleItem[]) => void;
}

export const ScheduleAdminModal: React.FC<ScheduleAdminModalProps> = ({ isOpen, onClose, scheduleItems, onSave }) => {
  const [items, setItems] = useState<WeeklyScheduleItem[]>([]);
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  const [editingDay, setEditingDay] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setItems([...scheduleItems]);
      if (sessionStorage.getItem('glee_admin_auth') === 'true') {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setPassword('');
      setError(false);
      setEditingDay(null);
      setIsSaved(false);
    }
  }, [isOpen, scheduleItems]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const storedPassword = localStorage.getItem('glee_admin_password');
    const adminPassword = storedPassword || import.meta.env.VITE_ADMIN_PASSWORD || 'glee1234';
    if (password === adminPassword) {
      setIsAuth(true);
      sessionStorage.setItem('glee_admin_auth', 'true');
      setError(false);
    } else {
      setError(true);
      setPassword('');
    }
  };

  const handleUpdate = (dayId: string, field: keyof WeeklyScheduleItem, value: any) => {
    setItems(items.map(item => item.day === dayId ? { ...item, [field]: value } : item));
  };

  if (!isAuth) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="bg-[#12141c] border border-zinc-800 rounded-3xl w-full max-w-sm p-8 flex flex-col relative shadow-2xl">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col items-center justify-center space-y-4 mb-6">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center">
              <Lock className="w-5 h-5 text-zinc-400" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white font-mono">Admin Access</h3>
              <p className="text-xs text-zinc-400 mt-1">Enter password to manage schedule</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password" 
                className={`w-full bg-zinc-950 border ${error ? 'border-red-500/50' : 'border-zinc-800'} rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors`}
                autoFocus
              />
              {error && <p className="text-red-400 text-[10px] mt-1.5 px-1">Incorrect password</p>}
            </div>
            <button type="submit" className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm rounded-xl transition-colors">
              Unlock Schedule Manager
            </button>
          </form>
        </div>
      </div>
    );
  }

  const editingItem = editingDay ? items.find(i => i.day === editingDay) : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-4xl h-[80vh] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 shrink-0">
          <div className="flex items-center space-x-4">
            {editingItem && (
              <button 
                onClick={() => setEditingDay(null)}
                className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-bold">Back</span>
              </button>
            )}
            <div>
              <h2 className="text-2xl font-bold text-white font-mono flex items-center gap-2">
                <Calendar className="w-6 h-6 text-pink-500" />
                {editingItem ? `Edit ${editingItem.dayFullEn} Schedule` : 'Schedule Manager'}
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                {editingItem ? 'Update the band, solo artist, and dates below.' : 'Click on a day to edit the band lineup and dates. Changes save locally.'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => { onSave(items); setIsSaved(true); setTimeout(() => setIsSaved(false), 2000); }}
              className={`flex items-center space-x-2 px-6 py-2 rounded-xl transition-colors text-sm font-bold ${isSaved ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-pink-600 hover:bg-pink-500 text-white'}`}
            >
              {isSaved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
              <span className="hidden sm:inline">{isSaved ? 'Saved!' : 'Save'}</span>
            </button>
            <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white rounded-full hover:bg-zinc-800 transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-hidden flex flex-col relative">
          
          {/* --- LIST VIEW --- */}
          {!editingItem && (
            <div className="flex-1 overflow-y-auto p-4 space-y-2">
              {items.map(item => (
                <div 
                  key={item.day} 
                  onClick={() => setEditingDay(item.day)}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-pink-500/30 cursor-pointer transition-all gap-4"
                >
                  <div className="flex items-center space-x-4 w-48 shrink-0">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg border ${item.highlight ? 'bg-pink-500/10 border-pink-500/30 text-pink-400' : 'bg-zinc-900 border-zinc-800 text-zinc-300'}`}>
                      {item.day}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white uppercase">{item.dayFullEn}</h4>
                      <p className="text-xs text-zinc-400">{item.date || 'No specific date'}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 gap-4 border-l border-zinc-800/50 pl-4">
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Band</span>
                      <p className="text-sm font-bold text-cyan-400">{item.band}</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-zinc-500 uppercase font-bold block mb-1">Solo</span>
                      <p className="text-sm font-bold text-pink-400">{item.solo}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* --- EDIT VIEW --- */}
          {editingItem && (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-2xl mx-auto space-y-6 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Date & Highlighting */}
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Specific Date (Optional, e.g. "Oct 24")</label>
                    <input type="text" value={editingItem.date || ''} onChange={e => handleUpdate(editingItem.day, 'date', e.target.value)} placeholder="e.g. Oct 24, 2024" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-pink-500 focus:outline-none focus:bg-zinc-900 transition-colors" />
                  </div>
                  <div className="md:col-span-2 pb-4 border-b border-zinc-800/50">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${editingItem.highlight ? 'bg-pink-500 border-pink-500' : 'bg-zinc-900 border-zinc-700 group-hover:border-pink-500/50'}`}>
                        {editingItem.highlight && <div className="w-2 h-2 bg-black rounded-full" />}
                      </div>
                      <input type="checkbox" checked={editingItem.highlight || false} onChange={e => handleUpdate(editingItem.day, 'highlight', e.target.checked)} className="hidden" />
                      <span className="text-sm text-zinc-300 font-bold">Highlight this day (e.g. for Friday/Saturday)</span>
                    </label>
                  </div>

                  {/* Band Info */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Band Name</label>
                    <input type="text" value={editingItem.band} onChange={e => handleUpdate(editingItem.day, 'band', e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-cyan-400 font-bold focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Band Genre</label>
                    <input type="text" value={editingItem.bandGenre} onChange={e => handleUpdate(editingItem.day, 'bandGenre', e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors" />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Band Description (EN)</label>
                    <textarea value={editingItem.bandDescEn} onChange={e => handleUpdate(editingItem.day, 'bandDescEn', e.target.value)} rows={2} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors resize-none" />
                  </div>

                  {/* Solo Info */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Solo Vocal Name</label>
                    <input type="text" value={editingItem.solo} onChange={e => handleUpdate(editingItem.day, 'solo', e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-pink-400 font-bold focus:border-pink-500 focus:outline-none focus:bg-zinc-900 transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Solo Genre</label>
                    <input type="text" value={editingItem.soloGenre} onChange={e => handleUpdate(editingItem.day, 'soloGenre', e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-pink-500 focus:outline-none focus:bg-zinc-900 transition-colors" />
                  </div>
                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Solo Description (EN)</label>
                    <textarea value={editingItem.soloDescEn} onChange={e => handleUpdate(editingItem.day, 'soloDescEn', e.target.value)} rows={2} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-pink-500 focus:outline-none focus:bg-zinc-900 transition-colors resize-none" />
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
