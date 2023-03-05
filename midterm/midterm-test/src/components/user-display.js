function UserDisplay({ user }) {
    return (
        <>
            <h6>Id: {user.id}</h6>
            <h6>Name: {user.name}</h6>
            <h6>Username {user.username}</h6>
            <br></br>                       
        </>
    )
}

export default UserDisplay;