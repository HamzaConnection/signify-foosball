import './App.css';
import User from './models/user/user';
import SessionCache from './shared/cache/SessionCache';
import { useState } from 'react';

const App = () => {
  const [user, setUser] = useState(SessionCache().get<User>('user'));

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
