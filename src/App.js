import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { Counter_Add, Counter_Sub } from './action.types';
import TodoInput from './components/TodoInput';
import Todo from './components/Todo';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state)=>state)
  return (
    <div className="App">
      <TodoInput/>
      <Todo/>
    </div>
  );
}

export default App;
