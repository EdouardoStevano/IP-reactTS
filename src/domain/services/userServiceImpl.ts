import { User } from '../entities/User';
import { UserRepository } from '../../data/repositories/userRepository';
import { UserService } from '../interfaces/userService';

export class UserServiceImpl implements UserService {
    constructor(private userRepository: UserRepository) {}

    async createUser(username: string, email: string): Promise<User> {
        const user = new User({
            id: Math.floor(Math.random() * 1000),
            username,
            email,
            role: 'USER',
            status: 'ACTIVE',
            createdAt: new Date(),
        });
        await this.userRepository.save(user);
        return user;
    }

    async deactivateUser(id: number): Promise<void> {
        const user = await this.userRepository.findById(id);
        if (!user) throw new Error('User not found');
        user.status = 'INACTIVE';
        await this.userRepository.save(user);
    }

    async changeUserRole(id: number, role: string): Promise<void> {
        const user = await this.userRepository.findById(id);
        if (!user) throw new Error('User not found');
        user.role = role;
        await this.userRepository.save(user);
    }
}
