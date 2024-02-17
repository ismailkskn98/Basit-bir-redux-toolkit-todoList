import TodoList from './components/TodoList';
import TodoAdd from './components/TodoAdd';
import Header from './components/Header';
import Landing from './components/Landing';
import { useLandingPage } from './hooks/useLandingPage';

function App() {
  const isOpenLoading = useLandingPage(2000);

  return (
    <>
      {isOpenLoading ? (
        <Landing />
      ) : (
        <>
          <Header />
          <TodoAdd />
          <TodoList />
        </>
      )}
    </>
  );
}

export default App;
