export interface UserAuthService {
    login(username: string, password: string): Promise<string>;
    logout(): Promise<void>;
}

export class SimpleUserAuthService implements UserAuthService {
    private token: string | null = null;

    async login(username: string, password: string): Promise<string> {
        if (username === 'admin' && password === 'password') {
            this.token = 'fake-jwt-token';
            return this.token;
        }
        throw new Error('Invalid credentials');
    }

    async logout(): Promise<void> {
        this.token = null;
    }

    getToken(): string | null {
        return this.token;
    }
}
