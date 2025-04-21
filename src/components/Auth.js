import React, { useEffect, useState } from 'react';
import { auth, provider, signInWithPopup } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function Auth({ onLogin }) {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    onLogin(result.user.email);
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
        <p>Welcome, {user.displayName}</p>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default Auth;
