import logoSvg from '../../assets/svg/logo.svg';

import { Container, Content } from './styles';
 
export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoSvg} alt="Dt money" />
                <button type="button">
                    New Transaction
                </button>
            </Content>
        </Container>
    )
}
