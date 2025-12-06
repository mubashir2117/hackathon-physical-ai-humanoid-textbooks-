import { useState } from 'react';

export default function PersonalizationPage() {
  const [activeTab, setActiveTab] = useState('appearance');
  const [settings, setSettings] = useState({
    theme: 'dark',
    accentColor: 'purple',
    fontSize: 'medium',
    language: 'english',
    notifications: true,
    soundEffects: true,
    animations: true,
    autoSave: true
  });
  const [saveStatus, setSaveStatus] = useState('');

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    setSaveStatus('saving');
    setTimeout(() => {
      setSaveStatus('saved');
      console.log('Settings saved:', settings);
      setTimeout(() => setSaveStatus(''), 2000);
    }, 1000);
  };

  const handleReset = () => {
    setSettings({
      theme: 'dark',
      accentColor: 'purple',
      fontSize: 'medium',
      language: 'english',
      notifications: true,
      soundEffects: true,
      animations: true,
      autoSave: true
    });
    setSaveStatus('reset');
    setTimeout(() => setSaveStatus(''), 2000);
  };

  const tabs = [
    { id: 'appearance', icon: '🎨', label: 'Appearance' },
    { id: 'preferences', icon: '⚙️', label: 'Preferences' },
    { id: 'notifications', icon: '🔔', label: 'Notifications' },
    { id: 'privacy', icon: '🔒', label: 'Privacy' }
  ];

  const themes = [
    { id: 'dark', name: 'Dark', icon: '🌙', gradient: 'from-slate-900 to-purple-900' },
    { id: 'light', name: 'Light', icon: '☀️', gradient: 'from-slate-100 to-purple-100' },
    { id: 'cosmic', name: 'Cosmic', icon: '✨', gradient: 'from-indigo-900 to-pink-900' },
    { id: 'ocean', name: 'Ocean', icon: '🌊', gradient: 'from-blue-900 to-teal-900' }
  ];

  const accentColors = [
    { id: 'purple', name: 'Purple', color: 'bg-purple-500' },
    { id: 'blue', name: 'Blue', color: 'bg-blue-500' },
    { id: 'pink', name: 'Pink', color: 'bg-pink-500' },
    { id: 'green', name: 'Green', color: 'bg-green-500' },
    { id: 'orange', name: 'Orange', color: 'bg-orange-500' },
    { id: 'red', name: 'Red', color: 'bg-red-500' }
  ];

  const fontSizes = [
    { id: 'small', label: 'Small', size: 'text-sm' },
    { id: 'medium', label: 'Medium', size: 'text-base' },
    { id: 'large', label: 'Large', size: 'text-lg' },
    { id: 'xlarge', label: 'Extra Large', size: 'text-xl' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-4 relative">
            <div className="absolute w-full h-full border-2 border-purple-500/50 rounded-full animate-spin-slow"></div>
            <div className="text-4xl animate-pulse">⚙️</div>
          </div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3">
            Personalization
          </h1>
          <p className="text-slate-300 text-lg">Customize your experience to match your style</p>
        </div>

        {/* Main Content */}
        <div className="bg-slate-900/80 backdrop-blur-2xl rounded-3xl border border-purple-500/30 shadow-2xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-purple-500/20 bg-slate-900/50 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-max px-6 py-4 flex items-center justify-center gap-2 font-semibold transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="p-8">
            {/* Appearance Tab */}
            {activeTab === 'appearance' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Theme Selection */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span>🎨</span> Theme
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {themes.map((theme) => (
                      <button
                        key={theme.id}
                        onClick={() => handleSettingChange('theme', theme.id)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${
                          settings.theme === theme.id
                            ? 'border-purple-500 bg-purple-500/10'
                            : 'border-purple-500/20 bg-slate-800/50 hover:border-purple-500/40'
                        }`}
                      >
                        <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${theme.gradient} mb-3 flex items-center justify-center text-4xl`}>
                          {theme.icon}
                        </div>
                        <p className="text-white font-semibold">{theme.name}</p>
                        {settings.theme === theme.id && (
                          <p className="text-purple-400 text-sm mt-1">✓ Active</p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Accent Color */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span>🎨</span> Accent Color
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {accentColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => handleSettingChange('accentColor', color.id)}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-110 ${
                          settings.accentColor === color.id
                            ? 'border-purple-500'
                            : 'border-purple-500/20 hover:border-purple-500/40'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-lg ${color.color} group-hover:scale-110 transition-transform`}></div>
                        <p className="text-white text-sm font-semibold mt-2">{color.name}</p>
                        {settings.accentColor === color.id && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs">
                            ✓
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Font Size */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                    <span>📝</span> Font Size
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {fontSizes.map((size) => (
                      <button
                        key={size.id}
                        onClick={() => handleSettingChange('fontSize', size.id)}
                        className={`p-5 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          settings.fontSize === size.id
                            ? 'border-purple-500 bg-purple-500/10'
                            : 'border-purple-500/20 bg-slate-800/50 hover:border-purple-500/40'
                        }`}
                      >
                        <p className={`text-white font-semibold ${size.size}`}>Aa</p>
                        <p className="text-slate-300 text-sm mt-2">{size.label}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>⚙️</span> General Preferences
                </h3>
                
                <div className="space-y-4">
                  {/* Language */}
                  <div className="p-6 bg-slate-800/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🌍</span>
                        <div>
                          <h4 className="text-white font-semibold text-lg">Language</h4>
                          <p className="text-slate-400 text-sm">Choose your preferred language</p>
                        </div>
                      </div>
                      <select
                        value={settings.language}
                        onChange={(e) => handleSettingChange('language', e.target.value)}
                        className="px-4 py-2 bg-slate-900 border border-purple-500/30 rounded-lg text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                      >
                        <option value="english">English</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option value="german">German</option>
                        <option value="chinese">Chinese</option>
                      </select>
                    </div>
                  </div>

                  {/* Sound Effects */}
                  <div className="p-6 bg-slate-800/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">🔊</span>
                        <div>
                          <h4 className="text-white font-semibold text-lg">Sound Effects</h4>
                          <p className="text-slate-400 text-sm">Enable audio feedback</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSettingChange('soundEffects', !settings.soundEffects)}
                        className={`w-14 h-8 rounded-full transition-all duration-300 relative ${
                          settings.soundEffects ? 'bg-purple-500' : 'bg-slate-700'
                        }`}
                      >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                          settings.soundEffects ? 'translate-x-7' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Animations */}
                  <div className="p-6 bg-slate-800/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">✨</span>
                        <div>
                          <h4 className="text-white font-semibold text-lg">Animations</h4>
                          <p className="text-slate-400 text-sm">Enable smooth transitions</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSettingChange('animations', !settings.animations)}
                        className={`w-14 h-8 rounded-full transition-all duration-300 relative ${
                          settings.animations ? 'bg-purple-500' : 'bg-slate-700'
                        }`}
                      >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                          settings.animations ? 'translate-x-7' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  </div>

                  {/* Auto Save */}
                  <div className="p-6 bg-slate-800/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">💾</span>
                        <div>
                          <h4 className="text-white font-semibold text-lg">Auto Save</h4>
                          <p className="text-slate-400 text-sm">Automatically save changes</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleSettingChange('autoSave', !settings.autoSave)}
                        className={`w-14 h-8 rounded-full transition-all duration-300 relative ${
                          settings.autoSave ? 'bg-purple-500' : 'bg-slate-700'
                        }`}
                      >
                        <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                          settings.autoSave ? 'translate-x-7' : 'translate-x-1'
                        }`}></div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>🔔</span> Notification Settings
                </h3>
                
                <div className="p-6 bg-slate-800/50 rounded-2xl border border-purple-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">📬</span>
                      <div>
                        <h4 className="text-white font-semibold text-lg">Push Notifications</h4>
                        <p className="text-slate-400 text-sm">Receive real-time updates</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleSettingChange('notifications', !settings.notifications)}
                      className={`w-14 h-8 rounded-full transition-all duration-300 relative ${
                        settings.notifications ? 'bg-purple-500' : 'bg-slate-700'
                      }`}
                    >
                      <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                        settings.notifications ? 'translate-x-7' : 'translate-x-1'
                      }`}></div>
                    </button>
                  </div>

                  {settings.notifications && (
                    <div className="space-y-3 pl-12 animate-fadeIn">
                      <label className="flex items-center gap-3 text-slate-300 cursor-pointer hover:text-white transition-colors">
                        <input type="checkbox" className="w-5 h-5 cursor-pointer" defaultChecked />
                        <span>Email notifications</span>
                      </label>
                      <label className="flex items-center gap-3 text-slate-300 cursor-pointer hover:text-white transition-colors">
                        <input type="checkbox" className="w-5 h-5 cursor-pointer" defaultChecked />
                        <span>Desktop notifications</span>
                      </label>
                      <label className="flex items-center gap-3 text-slate-300 cursor-pointer hover:text-white transition-colors">
                        <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                        <span>Mobile push notifications</span>
                      </label>
                      <label className="flex items-center gap-3 text-slate-300 cursor-pointer hover:text-white transition-colors">
                        <input type="checkbox" className="w-5 h-5 cursor-pointer" defaultChecked />
                        <span>Weekly summary emails</span>
                      </label>
                    </div>
                  )}
                </div>

                <div className="p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-500/30 text-center">
                  <span className="text-5xl mb-3 block">🔔</span>
                  <h4 className="text-white font-bold text-xl mb-2">Stay Updated</h4>
                  <p className="text-slate-300">Never miss important updates and announcements</p>
                </div>
              </div>
            )}

            {/* Privacy Tab */}
            {activeTab === 'privacy' && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span>🔒</span> Privacy & Security
                </h3>
                
                <div className="grid gap-6">
                  {[
                    { icon: '🛡️', title: 'Two-Factor Authentication', desc: 'Add an extra layer of security', status: 'Enabled' },
                    { icon: '🔐', title: 'Password Protection', desc: 'Secure your account', status: 'Strong' },
                    { icon: '👁️', title: 'Profile Visibility', desc: 'Control who can see your profile', status: 'Private' },
                    { icon: '📊', title: 'Data Collection', desc: 'Manage analytics preferences', status: 'Limited' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-slate-800/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-[1.02]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-4xl">{item.icon}</span>
                          <div>
                            <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                            <p className="text-slate-400 text-sm">{item.desc}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg font-semibold text-sm">
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-8 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl border border-red-500/30">
                  <h4 className="text-white font-bold text-xl mb-3 flex items-center gap-2">
                    <span>⚠️</span> Danger Zone
                  </h4>
                  <p className="text-slate-300 mb-4">Permanent actions that cannot be undone</p>
                  <button className="px-6 py-3 bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 rounded-xl text-red-300 font-semibold transition-all hover:scale-105">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="p-6 border-t border-purple-500/20 bg-slate-900/50 flex items-center justify-between">
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-purple-500/30 hover:border-purple-500/50 rounded-xl text-slate-300 font-semibold transition-all hover:scale-105"
            >
              Reset to Default
            </button>
            
            <div className="flex items-center gap-4">
              {saveStatus && (
                <span className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-2 ${
                  saveStatus === 'saving' ? 'bg-blue-500/20 text-blue-300' :
                  saveStatus === 'saved' ? 'bg-green-500/20 text-green-300' :
                  'bg-purple-500/20 text-purple-300'
                }`}>
                  {saveStatus === 'saving' && <div className="w-4 h-4 border-2 border-blue-300/30 border-t-blue-300 rounded-full animate-spin"></div>}
                  {saveStatus === 'saved' && '✓'}
                  {saveStatus === 'reset' && '↺'}
                  {saveStatus === 'saving' ? 'Saving...' : saveStatus === 'saved' ? 'Saved!' : 'Reset!'}
                </span>
              )}
              
              <button
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
              >
                <span>💾</span>
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { icon: '🎨', title: 'Customizable', desc: 'Make it truly yours' },
            { icon: '⚡', title: 'Instant Apply', desc: 'Changes take effect immediately' },
            { icon: '☁️', title: 'Cloud Sync', desc: 'Access on any device' }
          ].map((card, idx) => (
            <div key={idx} className="p-6 bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 text-center">
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-slate-400 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}