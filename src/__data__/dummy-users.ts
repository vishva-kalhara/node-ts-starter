import { IUser } from '../api/types/userTypes';

export const dummyUsers: IUser[] = [
  {
    id: 1,
    email: 'admin@example.com',
    password: 'admin123',
    confirmPassword: 'admin123',
    role: 'admin',
  },
  {
    id: 2,
    email: 'user1@example.com',
    password: 'user123',
    confirmPassword: 'user123',
    role: 'User',
  },
  {
    id: 3,
    email: 'user2@example.com',
    password: 'password',
    confirmPassword: 'password',
    role: 'User',
  },
  {
    id: 4,
    email: 'admin2@example.com',
    password: 'adminpassword',
    confirmPassword: 'adminpassword',
    role: 'admin',
  },
  {
    id: 5,
    email: 'user3@example.com',
    password: 'pass123',
    confirmPassword: 'pass123',
    role: 'User',
  },
  {
    id: 6,
    email: 'admin3@example.com',
    password: 'adminpass',
    confirmPassword: 'adminpass',
    role: 'admin',
  },
  {
    id: 7,
    email: 'user4@example.com',
    password: 'userpass',
    confirmPassword: 'userpass',
    role: 'User',
  },
  {
    id: 8,
    email: 'admin4@example.com',
    password: 'admin1234',
    confirmPassword: 'admin1234',
    role: 'admin',
  },
];
