import UserDisplay from "./user-display"

function UserList(users) {

    return(
        users.map(user => {
            return <UserDisplay key={user.id} user={user}></UserDisplay>
        })
    )
}