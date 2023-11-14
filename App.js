import { StatusBar } from 'expo-status-bar';
import NavigationComponent from './components/Navigation/NavigationComponent';
import ExpensesContextProvider from './store/expenses-context';

export default function App() {
  return (
    <>
      <StatusBar style='auto'/>
      <ExpensesContextProvider>
        <NavigationComponent />
      </ExpensesContextProvider>
    </>
  );
}

