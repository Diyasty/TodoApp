import { User } from './user.model';
export interface Todo {
  id?: string | number;
  title: string;
  description: string;
  status?: string;
  owner?: User[];
}
