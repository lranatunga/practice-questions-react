import { Link } from "react-router-dom"

const blogList = [
    {
        id: 1,
        title: "Post 1",
        text: 'Hello from post 1'
    },
    {
        id: 2,
        title: "Post 2",
        text: 'Hello from post 2'
    },
    {
        id: 3,
        title: "Post 3",
        text: 'Hello from post 3'
    },
    {
        id: 4,
        title: "Post 4",
        text: 'Hello from post 4'
    },
    {
        id: 5,
        title: "Post `5",
        text: 'Hello from post 5'
    },
    {
        id: 6,
        title: "Post 6",
        text: 'Hello from post 6'
    },
]

export  function BlogList(){
    return(
        <div>
            <h3>Blog List</h3>
            <ul>
                {blogList.map (blog => {
                    <li key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}