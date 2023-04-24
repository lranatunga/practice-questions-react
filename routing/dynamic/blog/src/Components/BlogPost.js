// import { BlogList } from "./BlogList"
import {useParams} from 'react-router-dom'

// function BlogPost ( ) {
    // const post = [
    //     {
    //         id: 1,
    //         title: "Post 1",
    //         text: 'Hello from post 1'
    //     },
    //     {
    //         id: 2,
    //         title: "Post 2",
    //         text: 'Hello from post 2'
    //     },
    //     {
    //         id: 3,
    //         title: "Post 3",
    //         text: 'Hello from post 3'
    //     },
    //     {
    //         id: 4,
    //         title: "Post 4",
    //         text: 'Hello from post 4'
    //     },
    //     {
    //         id: 5,
    //         title: "Post `5",
    //         text: 'Hello from post 5'
    //     },
    //     {
    //         id: 6,
    //         title: "Post 6",
    //         text: 'Hello from post 6'
    //     },
    // ]
//     const {postid} = useParams()
//     const post = getBlogPostById(postId); 
//     return (
//         <>
//         <div> This is blog posts {BlogList[id -1].text}</div>
        
//         </>
//     )
// }

// export default BlogPost
const post = [
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

export function BlogPost() {
    const { postId } = useParams();
    // const post = getBlogPostById(postId); 
return (
    
    <div>
        {post.map(post => {
            return  (
                <>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            </>)
        })}
   
    </div>
);
}