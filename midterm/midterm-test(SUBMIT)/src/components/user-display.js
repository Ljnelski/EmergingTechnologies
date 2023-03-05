function UserDisplay({ user }) {
    return (
        <>
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Username:  {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>website: {user.website}</p>
            
            <br></br>                       
        </>
    )
}

export default UserDisplay;