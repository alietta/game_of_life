import { delay } from '@/utils/delay';

export const login = async (name: string) => {
  await delay(1000);

  localStorage.setItem('login', name);
};

export const logout = async () => {
  await delay(1000);
  localStorage.removeItem('login');
};

export const getUserName = async (): Promise<string > => {
  await delay(1000);
  return localStorage.getItem('login') || '';
};
export const isLoggedIn = async () => {
  await delay(1000);
  const login = localStorage.getItem('login');
  return Boolean(login);
};
