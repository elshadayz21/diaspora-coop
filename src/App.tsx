import { ReactNode } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './styles/app.scss';
import { MoneyTransfer } from './pages/MoneyTransfer';
import { GetALoan } from './pages/GetALoan';
import { LoanCalculator } from './pages/LoanCalculator';
import About from "./pages/about"
import ScrollToTopButton from './components/ScrollToTopButton';
interface BodyeRouteProps {
  // TODO: move to types
  children: ReactNode;
}

const BodyRoute = ({ children }: BodyeRouteProps) => (
  <div className="app">
    <body>
      <Header />
      {children}
      <Footer />
      <ScrollToTopButton />
    </body>
  </div>
);

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <BodyRoute>
              <Home />
            </BodyRoute>
          }
        />
        <Route
          path="/money-transfer-service"
          element={
            <BodyRoute>
              <MoneyTransfer />
            </BodyRoute>
          }
        />
        <Route
          path="/get-a-loan"
          element={
            <BodyRoute>
              <GetALoan />
            </BodyRoute>
          }
        />
        <Route
          path="/loan-calculator"
          element={
            <BodyRoute>
              <LoanCalculator />
            </BodyRoute>
          }
        />
         <Route
          path='/about'
          element={
            <BodyRoute>
              <About />
            </BodyRoute>
          }
        />
      </Routes>
      
    </div>
  );
};
export default App;
