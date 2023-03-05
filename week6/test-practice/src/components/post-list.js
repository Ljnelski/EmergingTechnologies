function PostList() {
    const exampleData = [
        {
            id: 1,
            title: "Post1",
            content: "This is the content"
        },
        {
            id: 2,
            title: "Post2",
            content: "This is the content"
        },
        {
            id: 3,
            title: "Post3",
            content: "This is the content"
        }
    ];

    return (
        <div>
            <h1>POST LIST RENDER</h1>
            {
                exampleData.length !== 0
                    ? // True
                    <div>
                        {
                            exampleData.map((item) => (
                                <p>{item.title}</p>
                            ))
                        }

                    </div>
                    : // false
                    <div>
                        <p> There is no data to show</p>
                    </div>
            } </div>
    );
}

export default PostList;