import { createContext, useEffect, useState, ReactNode, useContext } from 'react';
import { api } from "../services/api";

interface TransactionProps {
    id: number;
    title: string;
    value: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInputs = Omit<TransactionProps, 'id'>

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextData {
    transactions: TransactionProps[];
    createTransaction: (transaction: TransactionInputs) => Promise<void>;
}

const TransactionContext = createContext<TransactionContextData>(
    {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, []);

    async function createTransaction(transactionInput: TransactionInputs) {
        const response = await api.post('/transactions', transactionInput);
        const { transaction } = response.data;

        setTransactions([
            ...transactions,
            transaction
        ]);
    }

    return (
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};

export function useTransactions() {
    const context = useContext(TransactionContext);
    return context;
}