import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import PostList from './components/post-list';

function App() {
  return (
    <Router>
      {/* Routes nest inside one another. Nested route paths build upon
          parent route paths, and nested route elements render inside
          parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="posts" element={<PostList/>} />
          <Route path="search" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<div><h1>No Route Found</h1></div>} />
        </Route>
      </Routes>
    </Router >
  );
}



function Layout() {
  return (
    <div className="App">
      <h1>Practice Test</h1>
      <div className="buttons">

        <div className="action_btn">
          <Link to='/posts'>
            <button className="submit action_btn submit">Save</button>
          </Link>
          <Link to="/search">
            <button className="submit action_btn cancel" type="submit">Cancel</button>
          </Link>
          <p id="saved"></p>
        </div>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}



export default App;
