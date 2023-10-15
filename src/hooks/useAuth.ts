import { IUser } from '@/interfaces/IUser';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const { push } = useRouter();

  const registerUser = async (user: IUser) => {
    const usersJSON = await localStorage.getItem('users');
    const users: IUser[] = usersJSON ? JSON.parse(usersJSON) : [];
    const existingUser = users.find(existingUser => existingUser.username === user.username);
    if (existingUser) {
      return 'error';
    }
    users.push(user);
    const token = uuidv4();
    await localStorage.setItem('auth-token', token);
    await localStorage.setItem('users', JSON.stringify(users));

    return 'success';
  };

  const authenticateUser = async (user: IUser) => {
    const usersJSON = await localStorage.getItem('users');
    const users: IUser[] = usersJSON ? JSON.parse(usersJSON) : [];
    const existingUser = users.find(
      existingUser => existingUser.username === user.username && existingUser.password === user.password
    );
    if (existingUser) {
      const token = uuidv4();
      localStorage.setItem('auth-token', token);
      localStorage.setItem('auth-user', JSON.stringify(existingUser));
      return 'success';
    }

    return 'error';
  };

  const signOut = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('auth-user');
    push('/');
  };

  return { registerUser, authenticateUser, signOut };
};
