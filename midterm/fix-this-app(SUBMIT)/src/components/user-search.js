import UserList from "./user-list";
import React, { useState, useRef } from 'react';


function SearchUser(users) {

    const [filteredUsers, setFilteredUsers] = useState([]);
    const userId = useRef();

    console.log("Data Object from user search", users);


    function filterUsers(e) {
        console.log(users);
        if (users)
        {
            let foundUser;
            users.users.map(user => {
                if(user.id == userId.current.value) {
                    setFilteredUsers([user]);
                    return;
                }
            })
        }
        else
            setFilteredUsers([])

        console.log(filteredUsers);
    }

    return (
        <div>
            <p>Search User:</p>
            <input ref={userId} type="number"></input>
            <button onClick={filterUsers}>Filter</button>
            <UserList users={filteredUsers}></UserList>
        </div>
    )
}

export default SearchUser;