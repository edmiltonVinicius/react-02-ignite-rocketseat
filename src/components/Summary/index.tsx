import incomeImg from '../../assets/svg/income.svg'
import outcomeImg from '../../assets/svg/outcome.svg'
import totalImg from '../../assets/svg/total.svg'

import { Container } from './styles';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entraces</p>
                    <img src={incomeImg} alt="Entraces" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Exits</p>
                    <img src={outcomeImg} alt="Exits" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    );
};