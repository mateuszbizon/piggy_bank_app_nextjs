type ApiResponse<Data = any> = {
    data?: Data;
    message?: string;
    success?: boolean;
}

type User = {
    _id: string;
    id: string;
    name: string;
    username: string;
    onboarded: boolean;
    piggyBanks: PiggyBank[];
}

type PiggyBank = {
    _id: string;
    name: string;
    authorId: string;
    createdAt: Date;
    amountMoney: number;
    payments: Payment[];
    people: PiggyBankPerson[];
}

type PiggyBankPerson = {
    _id: string;
    name: string;
    piggyBankId: string;
    payments: Payment[];
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