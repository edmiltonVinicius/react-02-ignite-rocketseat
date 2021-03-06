import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import closeImg from '../../assets/svg/close.svg';
import incomeImg from '../../assets/svg/income.svg';
import outcomeImg from '../../assets/svg/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './style';
interface NewTrasanctionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTrasanctionModal({ isOpen, onRequestClose }: NewTrasanctionModalProps) {
    const { createTransaction } = useTransactions();

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            type,
            category,
            value,
            createdAt: new Date().toString()
        });

        onRequestClose();
        clearValuesModalNewTransaction();
    }

    function clearValuesModalNewTransaction() {
        setTitle('');
        setValue(0);
        setCategory('');
        setType('deposit');
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => { 
                onRequestClose();
                clearValuesModalNewTransaction();  
            }}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button 
                type="button" 
                onClick={() => { 
                    onRequestClose(); 
                    clearValuesModalNewTransaction(); 
                }} 
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Register new transaction</h2>

                <input 
                    placeholder="Title"
                    value={title}
                    onChange={event => { setTitle(event.target.value); }}
                />

                <input 
                    type="number" 
                    placeholder="Value"
                    value={value}
                    onChange={event => { setValue(Number(event.target.value)); }}
                />

                <TransactionTypeContainer>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Sa??da" />
                        <span>Sa??da</span>
                    </RadioBox>

                </TransactionTypeContainer>

                <input 
                    placeholder="Category"
                    value={category}
                    onChange={event => { setCategory(event.target.value); }}
                />

                <button type="submit">
                    Register
                </button>

            </Container>
        </Modal>
    );
}