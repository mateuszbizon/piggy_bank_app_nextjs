type ApiResponse<Data = any> = {
    data?: Data;
    message?: string;
    success?: boolean;
}

type UserResponse = User;

type User = {
    _id: string;
    id: string;
    name: string;
    username: string;
    onboarded: boolean;
}