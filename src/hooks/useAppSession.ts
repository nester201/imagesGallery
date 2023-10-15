import { useEffect, useState } from 'react';
import { ISession } from '@/interfaces/ISession';
import { IUser } from '@/interfaces/IUser';

export const useAppSession = () => {
  const [session, setSession] = useState<ISession | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      const userJSON = localStorage.getItem('auth-user');
      if (userJSON) {
        const user: IUser = JSON.parse(userJSON);
        setSession({ token, user });
      }
    }
  }, [localStorage]);

  return session;
};
