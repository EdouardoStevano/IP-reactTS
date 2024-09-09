export interface UserHttpClient {
    getUser(id: number): Promise<any>;
    createUser(data: any): Promise<any>;
}

export class FetchUserHttpClient implements UserHttpClient {
    async getUser(id: number): Promise<any> {
        const response = await fetch(`/api/users/${id}`);
        return response.json();
    }

    async createUser(data: any): Promise<any> {
        const response = await fetch(`/api/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
}
