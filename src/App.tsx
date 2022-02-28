import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';

import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header />
      <Dashboard />
    </>
  );
}
