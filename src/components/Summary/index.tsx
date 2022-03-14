import incomeImg from '../../assets/svg/income.svg'
import outcomeImg from '../../assets/svg/outcome.svg'
import totalImg from '../../assets/svg/total.svg'
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export function Summary() {
    const { transactions } = useTransactions();
    
    const summary = transactions.reduce((accumulator, current) => {
        if(current.type === 'deposit') {
            accumulator.deposits += current.value;
            accumulator.total += current.value;
        } else {
            accumulator.withdraws += current.value;
            accumulator.total -= current.value;
        }

        return accumulator;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    });

    return (
        <Container>
            <div>
                <header>
                    <p>Entraces</p>
                    <img src={incomeImg} alt="Entraces" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)
                    }
                </strong>
            </div>
            <div>
                <header>
                    <p>Exits</p>
                    <img src={outcomeImg} alt="Exits" />
                </header>
                <strong>- 
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws)
                    }
                </strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {
                        new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)
                    }
                </strong>
            </div>
        </Container>
    );
};