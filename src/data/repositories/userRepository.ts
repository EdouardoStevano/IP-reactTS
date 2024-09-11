import { User } from '../../domain/entities/User';

export interface UserRepository {
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | null>;
    save(user: User): Promise<void>;
    deleteById(id: number): Promise<void>;
}

export class InMemoryUserRepository implements UserRepository {
    private users: User[] = [];

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findById(id: number): Promise<User | null> {
        return this.users.find((user) => user.id === id) || null;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }

    async deleteById(id: number): Promise<void> {
        this.users = this.users.filter((user) => user.id !== id);
    }
}
