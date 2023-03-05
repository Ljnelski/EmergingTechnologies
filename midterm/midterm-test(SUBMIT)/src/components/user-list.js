import { useState } from "react";
import UserDisplay from "./user-display"

function UserList(users) {

    console.log("Data Object from user list", users);
    return (
        users.users.map(user => {
            return <UserDisplay key={user.id} user={user}></UserDisplay>
        })
    )
}

export default UserList;