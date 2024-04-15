"use client"

import { useAuth } from "@clerk/nextjs";
import { ReactNode, createContext, useContext, useState } from "react";

type UserContextProps = {
    isAuthor: boolean;
    setAuthorId: (authorId: string | undefined) => void;
}

const UserContext = createContext<UserContextProps>({
    isAuthor: false,
    setAuthorId: () => {}
})

export function useUser() {
    return useContext(UserContext)
}

export function UserProvider({ children }: { children: ReactNode }) {
    const [authorId, setAuthorId] = useState<string | undefined>("")
    const { userId } = useAuth();

    const value: UserContextProps = {
        isAuthor: authorId === userId ? true : false,
        setAuthorId
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}