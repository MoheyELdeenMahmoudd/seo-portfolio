'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/lib/i18n';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem('portfolio_admin_auth');
    if (auth === 'true') {
      router.push('/admin/dashboard');
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication for portfolio purposes
    if (password === 'admin123') { // Change this in production
      localStorage.setItem('portfolio_admin_auth', 'true');
      router.push('/admin/dashboard');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="premium-card p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-[var(--text)]">{t('admin.login') || 'Admin Login'}</h1>
        
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-xl mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[var(--text)] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              placeholder="Enter admin password"
              dir="ltr"
            />
          </div>
          <button type="submit" className="btn-primary w-full py-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
