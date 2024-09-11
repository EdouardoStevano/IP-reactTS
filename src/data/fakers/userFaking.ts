import { User } from '../../domain/entities/User';

export const fakeUser = (): User => {
    return new User({
        id: Math.floor(Math.random() * 1000),
        username: 'FakeUser',
        email: 'fakeuser@example.com',
        role: 'USER',
        status: 'ACTIVE',
        createdAt: new Date(),
    });
};
