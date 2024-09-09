import { User } from '../../domain/entities/User';

export interface UserCacheService {
    getUser(id: number): Promise<User | null>;
    cacheUser(user: User): Promise<void>;
}

export class InMemoryUserCacheService implements UserCacheService {
    private cache: Map<number, User> = new Map();

    async getUser(id: number): Promise<User | null> {
        return this.cache.get(id) || null;
    }

    async cacheUser(user: User): Promise<void> {
        this.cache.set(user.id, user);
    }
}
