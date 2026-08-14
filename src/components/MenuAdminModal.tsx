import React, { useState, useEffect, useMemo } from 'react';
import { MenuItem, MenuCategory } from '../types';
import { X, Plus, Trash2, Save, Image as ImageIcon, Lock, Search, ChevronLeft, ChevronRight, Upload, Key, Check } from 'lucide-react';

interface MenuAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  onSave: (items: MenuItem[]) => void;
}

export const MenuAdminModal: React.FC<MenuAdminModalProps> = ({ isOpen, onClose, menuItems, onSave }) => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  
  // List View State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'all'>('all');
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  // Password Change State
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChangeMessage, setPasswordChangeMessage] = useState<{type: 'error' | 'success', text: string} | null>(null);

  useEffect(() => {
    if (isOpen) {
      setItems([...menuItems]);
      if (sessionStorage.getItem('glee_admin_auth') === 'true') {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
      setPassword('');
      setError(false);
      setEditingItemId(null);
      setSearchQuery('');
      setSelectedCategory('all');
      setImageError(null);
      setIsChangingPassword(false);
      setNewPassword('');
      setConfirmPassword('');
      setPasswordChangeMessage(null);
      setIsSaved(false);
    }
  }, [isOpen, menuItems]);

  const categories: MenuCategory[] = ['sets', 'korean', 'filipino', 'snacks', 'western', 'cocktails', 'liquor', 'nonalcoholic'];

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.nameKo.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [items, selectedCategory, searchQuery]);

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

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setPasswordChangeMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }
    if (newPassword.length < 4) {
      setPasswordChangeMessage({ type: 'error', text: 'Password must be at least 4 characters' });
      return;
    }
    
    localStorage.setItem('glee_admin_password', newPassword);
    setPasswordChangeMessage({ type: 'success', text: 'Password changed successfully!' });
    
    setTimeout(() => {
      setIsChangingPassword(false);
      setNewPassword('');
      setConfirmPassword('');
      setPasswordChangeMessage(null);
    }, 1500);
  };

  const handleUpdate = (id: string, field: keyof MenuItem, value: any) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setImageError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (limit to 1MB to save localStorage space)
    if (file.size > 1024 * 1024) {
      setImageError("Image is too large. Please upload an image smaller than 1MB.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      handleUpdate(id, 'image', base64String);
    };
    reader.onerror = () => {
      setImageError("Failed to read the file.");
    };
    reader.readAsDataURL(file);
  };

  const handleDelete = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if(window.confirm('Are you sure you want to delete this item?')) {
      setItems(items.filter(item => item.id !== id));
      if (editingItemId === id) {
        setEditingItemId(null);
      }
    }
  };

  const handleAdd = () => {
    const newItem: MenuItem = {
      id: `item-${Date.now()}`,
      nameEn: 'New Item',
      nameKo: '새로운 메뉴',
      category: selectedCategory !== 'all' ? selectedCategory : 'korean',
      pricePhp: 0,
      priceKrw: 0,
      descriptionEn: '',
      descriptionKo: '',
    };
    setItems([newItem, ...items]);
    setEditingItemId(newItem.id);
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
              <p className="text-xs text-zinc-400 mt-1">Enter password to manage menu</p>
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
              Unlock Manager
            </button>
          </form>
        </div>
      </div>
    );
  }

  const editingItem = editingItemId ? items.find(i => i.id === editingItemId) : null;

  if (isChangingPassword) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <div className="bg-[#12141c] border border-zinc-800 rounded-3xl w-full max-w-sm p-8 flex flex-col relative shadow-2xl">
          <button onClick={() => {
            setIsChangingPassword(false);
            setNewPassword('');
            setConfirmPassword('');
            setPasswordChangeMessage(null);
          }} className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col items-center justify-center space-y-4 mb-6">
            <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center">
              <Key className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-white font-mono">Change Password</h3>
              <p className="text-xs text-zinc-400 mt-1">Set a new password for admin access</p>
            </div>
          </div>

          <form onSubmit={handleChangePassword} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors mb-4"
                autoFocus
              />
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password" 
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              {passwordChangeMessage && (
                <p className={`text-[10px] mt-2 px-1 font-bold ${passwordChangeMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                  {passwordChangeMessage.text}
                </p>
              )}
            </div>
            <button type="submit" className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm rounded-xl transition-colors">
              Save New Password
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-zinc-950 border border-zinc-800 rounded-3xl w-full max-w-5xl h-[85vh] flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50 shrink-0">
          <div className="flex items-center space-x-4">
            {editingItem && (
              <button 
                onClick={() => setEditingItemId(null)}
                className="p-2 hover:bg-zinc-800 rounded-xl text-zinc-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-bold">Back</span>
              </button>
            )}
            <div>
              <h2 className="text-2xl font-bold text-white font-mono">
                {editingItem ? 'Edit Menu Item' : 'Menu Manager'}
              </h2>
              <p className="text-sm text-zinc-400">
                {editingItem ? 'Update the details for this item below.' : 'Add, edit, or delete menu items. Changes will be saved locally.'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {!editingItem && (
              <>
                <button onClick={() => setIsChangingPassword(true)} className="flex items-center space-x-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors text-sm font-bold" title="Change Password">
                  <Key className="w-4 h-4" />
                </button>
                <button onClick={handleAdd} className="flex items-center space-x-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl transition-colors text-sm font-bold">
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Add Item</span>
                </button>
              </>
            )}
            <button 
              onClick={() => { onSave(items); setIsSaved(true); setTimeout(() => setIsSaved(false), 2000); }}
              className={`flex items-center space-x-2 px-6 py-2 rounded-xl transition-colors text-sm font-bold ${isSaved ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-cyan-600 hover:bg-cyan-500 text-white'}`}
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
            <div className="flex-1 flex flex-col h-full">
              {/* Toolbar */}
              <div className="p-4 border-b border-zinc-800 bg-zinc-950/50 flex flex-col sm:flex-row gap-4 shrink-0">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                  <input 
                    type="text" 
                    placeholder="Search menu items..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as MenuCategory | 'all')}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors sm:w-48 outline-none"
                >
                  <option value="all">All Categories</option>
                  {categories.map(c => <option key={c} value={c}>{c.toUpperCase()}</option>)}
                </select>
              </div>

              {/* List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2">
                {filteredItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4">
                    <Search className="w-12 h-12 opacity-20" />
                    <p>No items found.</p>
                  </div>
                ) : (
                  filteredItems.map(item => (
                    <div 
                      key={item.id} 
                      onClick={() => setEditingItemId(item.id)}
                      className="group flex items-center p-3 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-cyan-500/30 cursor-pointer transition-all"
                    >
                      {/* Thumb */}
                      <div className="w-14 h-14 shrink-0 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-center overflow-hidden mr-4">
                        {item.image ? (
                          <img src={item.image} alt={item.nameEn} className="w-full h-full object-cover" />
                        ) : (
                          <ImageIcon className="w-5 h-5 text-zinc-700" />
                        )}
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0 pr-4">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider bg-zinc-950 px-2 py-0.5 rounded-md border border-zinc-800">
                            {item.category}
                          </span>
                          {item.isPopular && <span className="text-[10px] text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 rounded">Popular</span>}
                          {item.isRecommended && <span className="text-[10px] text-pink-400 border border-pink-500/30 bg-pink-500/10 px-1.5 py-0.5 rounded">Rec</span>}
                        </div>
                        <h4 className="text-sm font-bold text-white truncate">{item.nameEn}</h4>
                        <p className="text-xs text-zinc-400 truncate">{item.nameKo}</p>
                      </div>

                      {/* Price & Actions */}
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="text-sm font-bold text-cyan-400 font-mono">₱{item.pricePhp.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center space-x-2 border-l border-zinc-800 pl-4">
                          <button 
                            onClick={(e) => handleDelete(item.id, e)}
                            className="p-2 text-zinc-500 hover:text-red-500 bg-zinc-950 rounded-lg border border-zinc-800 hover:border-red-500/50 transition-colors" 
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <div className="p-2 text-zinc-500 group-hover:text-cyan-400 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* --- EDIT VIEW --- */}
          {editingItem && (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-3xl mx-auto space-y-8 pb-12">
                
                {/* Image Preview Large */}
                <div className="w-full h-48 sm:h-64 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center overflow-hidden relative group">
                  {editingItem.image ? (
                    <img src={editingItem.image} alt={editingItem.nameEn} className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center text-zinc-600">
                      <ImageIcon className="w-12 h-12 mb-2" />
                      <span className="text-sm font-bold">No Image Provided</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <span className="text-sm text-white font-bold px-4 text-center">Preview based on Image URL</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Name (English)</label>
                    <input type="text" value={editingItem.nameEn} onChange={e => handleUpdate(editingItem.id, 'nameEn', e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Name (Korean)</label>
                    <input type="text" value={editingItem.nameKo} onChange={e => handleUpdate(editingItem.id, 'nameKo', e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Category</label>
                    <select value={editingItem.category} onChange={e => handleUpdate(editingItem.id, 'category', e.target.value)} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors outline-none">
                      {categories.map(c => <option key={c} value={c}>{c.toUpperCase()}</option>)}
                    </select>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Price (PHP)</label>
                    <input type="number" value={editingItem.pricePhp} onChange={e => handleUpdate(editingItem.id, 'pricePhp', Number(e.target.value))} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors" />
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Menu Image</label>
                    <div className="flex items-center space-x-4">
                      <label className="flex items-center justify-center px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl cursor-pointer transition-colors text-sm font-bold border border-zinc-700 shrink-0">
                        <Upload className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">Upload File</span>
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={(e) => handleImageUpload(editingItem.id, e)}
                        />
                      </label>
                      <span className="text-xs text-zinc-600 hidden sm:inline">or URL</span>
                      <input type="text" value={editingItem.image || ''} onChange={e => handleUpdate(editingItem.id, 'image', e.target.value)} placeholder="https://..." className="flex-1 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors min-w-0" />
                    </div>
                    {imageError && <p className="text-red-400 text-[10px] ml-1 mt-1">{imageError}</p>}
                    <p className="text-zinc-500 text-[10px] ml-1 mt-1">Note: Uploaded files are converted to Base64 and stored in local storage. Please use images smaller than 1MB.</p>
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Description (English)</label>
                    <textarea value={editingItem.descriptionEn} onChange={e => handleUpdate(editingItem.id, 'descriptionEn', e.target.value)} rows={2} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors resize-none" />
                  </div>

                  <div className="space-y-1.5 md:col-span-2">
                    <label className="text-[10px] uppercase font-bold text-zinc-500 ml-1">Description (Korean)</label>
                    <textarea value={editingItem.descriptionKo} onChange={e => handleUpdate(editingItem.id, 'descriptionKo', e.target.value)} rows={2} className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500 focus:outline-none focus:bg-zinc-900 transition-colors resize-none" />
                  </div>

                  <div className="md:col-span-2 flex items-center space-x-8 pt-2">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${editingItem.isPopular ? 'bg-cyan-500 border-cyan-500' : 'bg-zinc-900 border-zinc-700 group-hover:border-cyan-500/50'}`}>
                        {editingItem.isPopular && <ChevronRight className="w-3 h-3 text-black font-bold rotate-90" />}
                      </div>
                      <input type="checkbox" checked={editingItem.isPopular || false} onChange={e => handleUpdate(editingItem.id, 'isPopular', e.target.checked)} className="hidden" />
                      <span className="text-sm text-zinc-300 font-bold">Mark as Popular</span>
                    </label>

                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${editingItem.isRecommended ? 'bg-pink-500 border-pink-500' : 'bg-zinc-900 border-zinc-700 group-hover:border-pink-500/50'}`}>
                        {editingItem.isRecommended && <ChevronRight className="w-3 h-3 text-black font-bold rotate-90" />}
                      </div>
                      <input type="checkbox" checked={editingItem.isRecommended || false} onChange={e => handleUpdate(editingItem.id, 'isRecommended', e.target.checked)} className="hidden" />
                      <span className="text-sm text-zinc-300 font-bold">Mark as Recommended</span>
                    </label>
                  </div>
                  
                  <div className="md:col-span-2 pt-6 border-t border-zinc-800">
                    <button 
                      onClick={() => handleDelete(editingItem.id)} 
                      className="flex items-center space-x-2 text-sm font-bold text-red-500 hover:text-red-400 transition-colors px-4 py-2 rounded-lg hover:bg-red-500/10"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete this Item</span>
                    </button>
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

