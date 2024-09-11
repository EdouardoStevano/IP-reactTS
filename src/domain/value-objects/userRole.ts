export class UserRole {
    private role: string;

    private static VALID_ROLES = ['USER', 'ADMIN'];

    constructor(role: string) {
        if (!UserRole.VALID_ROLES.includes(role)) {
            throw new Error('Invalid user role');
        }
        this.role = role;
    }

    get value(): string {
        return this.role;
    }
}
