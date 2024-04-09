type ApiResponse<Data = any> = {
    data?: Data;
    message?: string;
    success?: boolean;
}

type UserResponse = User;

type PiggyBanksResponse = PiggyBank[]

type PiggyBankResponse = {
    piggyBank: PiggyBank;
    people: PiggyBankPerson[];
    payments: Payment[];
};

type User = {
    _id: string;
    id: string;
    name: string;
    username: string;
    onboarded: boolean;
}

type PiggyBank = {
    _id: string;
    name: string;
    authorId: string;
    createdAt: Date;
    amountMoney: number;
}

type PiggyBankPerson = {
    _id: string;
    name: string;
    piggyBankId: string;
    amountMoney: number;
}

type Payment = {
    _id: string;
    piggyBankId: string;
    piggyBankPersonId: string;
    piggyBankPersonName: string;
    isPaymentAdded: boolean;
    paymentValue: number;
    createdAt: Date;
}