import { useEffect, useState } from 'react';

const useOnlineStatus = (): Boolean => {
  const [onlineStatus, setOnlineStatus] = useState<Boolean>(true);

  useEffect(() => {
    window.addEventListener('online', () => {
      setOnlineStatus(true);
    });

    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
