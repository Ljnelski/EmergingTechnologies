import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";
import axios from 'axios';
import UserList from './components/user-list';
import SearchUser from './components/user-search';

function App() {

  const [users, setUsers] = useState([]);
  const [showLoading, setShowLoading] = useState(true);
  const USER_API = "https://jsonplaceholder.typicode.com/users"

  useEffect(() => {
    const fetchData = async () => {
      axios.get(USER_API)
        .then(result => {
          setUsers(result.data);
          setShowLoading(false);

        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Midterm Test</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="user-list" element={<div>
              {
                users.length == 0 ?
                  <div>
                    {
                      showLoading && <p>Data Loading</p>
                    }

                  </div>
                  : <UserList users={users}></UserList>
              }
            </div>} />
            <Route path="user-search" element={<SearchUser users={users}></SearchUser>} />
            <Route path="*" element={<p>Missing Route</p>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Layout() {
  return (
    <div className="App">
      <div className="buttons">
        <div className="action_btn">
          <Link to='/user-list'>
            <button className="button-31 action_btn">Users</button>
          </Link>
          <Link to="/user-search">
            <button className="button-31 action_btn" type="submit">Search user</button>
          </Link>
          <p id="saved"></p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
