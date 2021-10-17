import {FC} from 'react';
import './App.css';
import UserList from './Components/UserList';

const App : FC = () => {
  return (
    <div>
      <header><h2>User Management</h2></header>
      <section>  <UserList /></section>
      <footer></footer>
    </div>
  );
}

export default App;
