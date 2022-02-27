import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './routes/Home';
import Todo from './routes/Todo';
import Font from './routes/Font';
import NoMatch from './routes/Nomatch';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router v6</h1>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Todo">Todo</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/Font">Font</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/font" element={<Font />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
