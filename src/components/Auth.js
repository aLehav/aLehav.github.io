import React, { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './Auth.css'

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
    <div className="auth">
      {user ? (
        <>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default Auth;
