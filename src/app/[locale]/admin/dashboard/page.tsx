'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';

export default function AdminDashboard() {
  const router = useRouter();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Auth check
    const auth = localStorage.getItem('portfolio_admin_auth');
    if (auth !== 'true') {
      router.push('/admin');
      return;
    }

    // Fetch content
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('portfolio_admin_auth');
    router.push('/admin');
  };

  const handleSave = async () => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      });
      const data = await res.json();
      if (data.success) {
        setMessage('Content saved successfully! Reload the main site to see changes.');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Failed to save.');
      }
    } catch (err) {
      setMessage('Error saving content.');
    }
    setSaving(false);
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (!content) return <div className="min-h-screen flex items-center justify-center">Error loading data</div>;

  return (
    <div className="min-h-screen bg-[var(--bg)] p-6" dir="ltr">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="premium-card p-6 flex items-center justify-between sticky top-6 z-50">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text)]">Portfolio Dashboard</h1>
            <p className="text-[var(--text-muted)] text-sm">Edit your website content directly (JSON format for advanced control)</p>
          </div>
          <div className="flex items-center gap-4">
            {message && <span className="text-green-500 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full">{message}</span>}
            <ThemeToggle />
            <button onClick={handleSave} disabled={saving} className="btn-primary px-6 py-2">
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
            <button onClick={handleLogout} className="btn-secondary px-6 py-2 border border-[var(--border)] text-[var(--text)]">
              Logout
            </button>
          </div>
        </div>

        {/* Content Editor */}
        <div className="premium-card overflow-hidden flex flex-col h-[70vh]">
          <div className="bg-[var(--border)] px-4 py-2 text-sm font-bold text-[var(--text)] flex justify-between items-center">
            <span>content.json</span>
            <span className="text-[10px] uppercase text-[var(--text-muted)]">Be careful with JSON syntax</span>
          </div>
          <textarea
            className="flex-1 w-full bg-[var(--bg-card)] text-[var(--text)] p-6 font-mono text-sm focus:outline-none resize-none"
            value={JSON.stringify(content, null, 2)}
            onChange={(e) => {
              try {
                // Only parse if user is doing valid JSON, but allow typing. 
                // We'll manage this with a raw string state for real-time editing
              } catch(e) {}
            }}
            readOnly // For this MVP we make it read-only for safety until we build full forms, but let's build a real raw editor:
            style={{ display: 'none' }}
          />
          {/* We need a proper JSON editor state */}
          <JSONEditor initialData={content} onChange={setContent} />
        </div>

      </div>
    </div>
  );
}

// Simple Raw JSON Editor component
function JSONEditor({ initialData, onChange }: { initialData: any, onChange: (data: any) => void }) {
  const [text, setText] = useState(JSON.stringify(initialData, null, 2));
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setText(val);
    try {
      const parsed = JSON.parse(val);
      setError(null);
      onChange(parsed);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex-1 flex flex-col relative">
      <textarea
        className="flex-1 w-full bg-[var(--bg-card)] text-[var(--text)] p-6 font-mono text-[13px] leading-relaxed focus:outline-none resize-none"
        value={text}
        onChange={handleChange}
        spellCheck={false}
      />
      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-xs p-2 font-mono">
          JSON Error: {error}
        </div>
      )}
    </div>
  );
}
