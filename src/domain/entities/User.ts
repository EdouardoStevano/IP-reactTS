export interface UserProps {
    id: number;
    username: string;
    email: string;
    role: string;
    status: string;
    createdAt: Date;
}

export class User {
    private props: UserProps;

    constructor(props: UserProps) {
        if (props.username.length > 30) {
            throw new Error('Username exceeds maximum length');
        }
        this.props = props;
    }

    get id(): number {
        return this.props.id;
    }

    get username(): string {
        return this.props.username;
    }

    get email(): string {
        return this.props.email;
    }

    get role(): string {
        return this.props.role;
    }

    set role(newRole: string) {
        this.props.role = newRole;
    }

    get status(): string {
        return this.props.status;
    }

    set status(newStatus: string) {
        this.props.status = newStatus;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }
}
