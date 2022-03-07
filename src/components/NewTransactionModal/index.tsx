import Modal from 'react-modal';
import closeImg from '../../assets/svg/close.svg';
import incomeImg from '../../assets/svg/income.svg';
import outcomeImg from '../../assets/svg/outcome.svg';
import { Container, TransactionTypeContainer } from './style';
interface NewTrasanctionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTrasanctionModal({ isOpen, onRequestClose }: NewTrasanctionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type="button" 
                onClick={onRequestClose} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar" />
            </button>

            <Container>
                <h2>Register new transaction</h2>

                <input 
                    placeholder="Title"
                />

                <input 
                    type="number" 
                    placeholder="Value"
                />

                <TransactionTypeContainer>

                    <button
                        type="button"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button
                        type="button"
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>

                </TransactionTypeContainer>

                <input 
                    placeholder="Category"
                />

                <button type="submit">
                    Register
                </button>

            </Container>
        </Modal>
    );
}