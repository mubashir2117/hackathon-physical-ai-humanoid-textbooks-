import React from 'react';

export default function AuthPage() {
  return (
    <div>
      <h1>Authentication</h1>
      <p>Authentication feature coming soon...</p>
    </div>
  );
}
import { useState } from 'react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [shake, setShake] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!isLogin) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log('Form submitted:', { ...formData, type: isLogin ? 'login' : 'signup' });
      setLoading(false);
      alert(`${isLogin ? 'Login' : 'Sign up'} successful!`);
    }, 2000);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ email: '', password: '', name: '', confirmPassword: '' });
    setErrors({});
  };

  const handleSocialLogin = (provider) => {
    alert(`${provider} login - Feature coming soon!`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 relative overflow-hidden font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="flex gap-10 max-w-6xl w-full z-10">
        {/* Auth Card */}
        <div className={`flex-1 max-w-md bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-10 border border-purple-500/30 shadow-2xl ${shake ? 'animate-shake' : ''}`}>
          {/* Brand */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-4 relative flex items-center justify-center">
              <div className="absolute w-full h-full border-2 border-purple-500/50 rounded-full animate-spin-slow"></div>
              <div className="text-4xl animate-pulse">✦</div>
            </div>
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              Cosmic Auth
            </h1>
            <p className="text-slate-300 text-sm">Next-generation authentication</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 bg-white/5 p-1 rounded-xl mb-8 relative">
            <button
              onClick={() => isLogin || toggleMode()}
              className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all duration-300 z-10 ${
                isLogin ? 'text-white' : 'text-slate-400'
              }`}
            >
              🔐 Login
            </button>
            <button
              onClick={() => !isLogin || toggleMode()}
              className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all duration-300 z-10 ${
                !isLogin ? 'text-white' : 'text-slate-400'
              }`}
            >
              ✨ Sign Up
            </button>
            <div 
              className={`absolute w-1/2 h-[calc(100%-8px)] bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg top-1 transition-transform duration-300 ${
                !isLogin ? 'translate-x-[calc(100%+4px)]' : 'translate-x-1'
              }`}
            ></div>
          </div>

          {/* Form */}
          <div className="space-y-5 mb-6">
            {!isLogin && (
              <div>
                <label className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                  <span>👤</span> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  disabled={loading}
                  className={`w-full px-4 py-3.5 bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-purple-500/30'
                  } rounded-xl text-white placeholder-slate-500 outline-none focus:border-purple-500 focus:bg-purple-500/10 focus:ring-4 focus:ring-purple-500/20 transition-all`}
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <span>⚠️</span> {errors.name}
                  </p>
                )}
              </div>
            )}

            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                <span>✉️</span> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                disabled={loading}
                className={`w-full px-4 py-3.5 bg-white/5 border ${
                  errors.email ? 'border-red-500' : 'border-purple-500/30'
                } rounded-xl text-white placeholder-slate-500 outline-none focus:border-purple-500 focus:bg-purple-500/10 focus:ring-4 focus:ring-purple-500/20 transition-all`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <span>⚠️</span> {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                <span>🔒</span> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  disabled={loading}
                  className={`w-full px-4 py-3.5 pr-12 bg-white/5 border ${
                    errors.password ? 'border-red-500' : 'border-purple-500/30'
                  } rounded-xl text-white placeholder-slate-500 outline-none focus:border-purple-500 focus:bg-purple-500/10 focus:ring-4 focus:ring-purple-500/20 transition-all`}
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors text-xl"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                  <span>⚠️</span> {errors.password}
                </p>
              )}
            </div>

            {!isLogin && (
              <div>
                <label className="flex items-center gap-2 text-white font-semibold text-sm mb-2">
                  <span>🔐</span> Confirm Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  disabled={loading}
                  className={`w-full px-4 py-3.5 bg-white/5 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-purple-500/30'
                  } rounded-xl text-white placeholder-slate-500 outline-none focus:border-purple-500 focus:bg-purple-500/10 focus:ring-4 focus:ring-purple-500/20 transition-all`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <span>⚠️</span> {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {isLogin && (
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 text-slate-300 text-sm cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 cursor-pointer" />
                  <span>Remember me</span>
                </label>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Processing...
                </>
              ) : (
                <>
                  <span>🚀</span>
                  {isLogin ? 'Login' : 'Create Account'}
                </>
              )}
            </button>
          </div>

          {/* Divider */}
          <div className="relative text-center my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-500/20"></div>
            </div>
            <span className="relative px-4 bg-slate-900/80 text-slate-500 text-xs">or continue with</span>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all hover:-translate-y-0.5 flex flex-col items-center gap-1"
            >
              <span className="text-xl">🔍</span>
              <span className="text-xs text-slate-300 font-semibold">Google</span>
            </button>
            <button
              onClick={() => handleSocialLogin('GitHub')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all hover:-translate-y-0.5 flex flex-col items-center gap-1"
            >
              <span className="text-xl">⚫</span>
              <span className="text-xs text-slate-300 font-semibold">GitHub</span>
            </button>
            <button
              onClick={() => handleSocialLogin('Twitter')}
              className="p-3 bg-white/5 hover:bg-white/10 border border-purple-500/20 hover:border-purple-500/40 rounded-xl transition-all hover:-translate-y-0.5 flex flex-col items-center gap-1"
            >
              <span className="text-xl">🐦</span>
              <span className="text-xs text-slate-300 font-semibold">Twitter</span>
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-slate-300 text-sm">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={toggleMode}
              className="ml-1.5 text-purple-400 hover:text-purple-300 font-bold transition-colors"
            >
              {isLogin ? 'Sign up' : 'Login'}
            </button>
          </p>
        </div>

        {/* Features Panel */}
        <div className="flex-1 max-w-lg bg-slate-900/60 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/20 hidden lg:block">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
            Why Choose Us?
          </h2>
          <div className="space-y-6">
            {[
              { icon: '🔐', title: 'Secure & Encrypted', desc: 'Bank-level security with end-to-end encryption' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance for instant access' },
              { icon: '🌍', title: 'Global Access', desc: 'Access from anywhere, anytime, any device' },
              { icon: '🎨', title: 'Beautiful Design', desc: 'Modern UI with smooth animations' }
            ].map((feature, idx) => (
              <div 
                key={idx}
                className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 hover:bg-white/10 transition-all hover:translate-x-2"
              >
                <div className="text-3xl min-w-[48px] h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1.5">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}