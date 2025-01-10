export interface User {
  id: number;
  name: string;
  userName: string;
  isAdmin: boolean;
  isRootAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUser {
  name: string;
  userName: string;
  password: string;
  isAdmin: boolean;
  isRootAdmin: boolean;
}
