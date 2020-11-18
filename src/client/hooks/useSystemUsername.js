import { useState, useEffect } from 'react';

const useSystemUsername = () => {
  const [username, setUsername] = useState(null);

  useEffect(async () => {
    const res = await fetch('/api/getUsername');
    const data = await res.json();
    
    setUsername(data.username);
  }, []);

  return username;
};

export default useSystemUsername;