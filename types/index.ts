type ApiResponse<Data> = {
    data?: Data;
    message?: string;
}

type UserResponse = User;

type User = {
    _id: string;
    id: string;
    name: string;
    username: string;
    onboarded: boolean;
}