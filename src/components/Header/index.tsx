import logoSvg from '../../assets/svg/logo.svg';

import { Container, Content } from './styles';
interface HeaderProps {
    onHandleOpenNewTransactionModal: () => void;
}

export function Header({ onHandleOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoSvg} alt="Dt money" />
                <button type="button" onClick={onHandleOpenNewTransactionModal}>
                    New Transaction
                </button>
            </Content>
        </Container>
    );
};
