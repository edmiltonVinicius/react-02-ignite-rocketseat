import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
   const { transactions } = useTransactions();

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Categorie</th>
                        <th>Date</th>
                    </tr>
                </thead>
                {
                    transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {
                                    new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.value)
                                }
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Date(transaction.createdAt).toLocaleDateString()}
                            </td>
                        </tr>
                    ))
                }
            </table>
        </Container>
    );
};