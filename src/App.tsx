import { useState } from 'react';
import { Header } from './components/Header';
import { NewTrasanctionModal } from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <GlobalStyle />

            <Header onHandleOpenNewTransactionModal={handleOpenNewTransactionModal}/>

            <NewTrasanctionModal 
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />

            <Dashboard />
        </>
    );
}
