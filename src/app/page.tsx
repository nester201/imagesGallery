'use client';
import Auth from '@/components/Auth/Auth';
import { useAppSession } from '@/hooks/useAppSession';
import { redirect } from 'next/navigation';

const AuthPage = () => {
  const session = useAppSession();

  if (session) {
    redirect('/gallery/1');
  }

  return <Auth />;
};

export default AuthPage;
