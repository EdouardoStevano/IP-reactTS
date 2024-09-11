import { User } from '../entities/User';

export interface UserService {
    createUser(username: string, email: string): Promise<User>;
    deactivateUser(id: number): Promise<void>;
    changeUserRole(id: number, role: string): Promise<void>;
}
