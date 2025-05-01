import React, { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Auth({ onLogin }) {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    onLogin(result.user.email);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    onLogin(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        onLogin(user.email);
      }
    });
    return () => unsubscribe();
  }, [onLogin]);

  return (
    <div className="note-box" style={{ fontSize: '0.9rem', color: 'var(--accent-color)', textAlign: 'right' }}>
      {user ? (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
          <span>Welcome, {user.displayName}</span>
          <button 
            onClick={handleLogout} 
            className="button" 
            style={{ 
              fontSize: '0.8rem', 
              padding: '0.3rem 0.8rem', 
              margin: '0' 
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '10px' }}>
          <span>Private content requires login</span>
          <button 
            onClick={handleLogin} 
            className="button" 
            style={{ 
              fontSize: '0.8rem', 
              padding: '0.3rem 0.8rem', 
              margin: '0' 
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default Auth;