
import './App.css';
import axios from "axios";
import React from "react";
const routeAPI = "https://jsonplaceholder.typicode.com/posts"

export default function App() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    //bao 404
    axios
    .get(`${routeAPI}/asdf`)
    .then((response) =>{
      setPost(response.data);
    })
    .catch((error) => {
      setError(error);
    });
  }, []);

  if(error) return `Error: ${error.message}`;
  if(!post) return "No post";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )

// React.useEffect(()=>{
//   axios.get(routeAPI).then((response)=>{
//     setPost(response.data)
//   });
// }, []);
// React.useEffect(()=>{
//   axios.get(`${routeAPI}/1`).then((response)=>{
//     setPost(response.data)
//   });
// }, []);

// function createPost(){
//   axios
//   .post(routeAPI,{
//     title: "Hello World!",
//     body:"This is a new post.",
//   })
//   .then((response)=>{
//     setPost(response.data);
//   });
// }

// function updatePost(){
//   axios
//   .put(`${routeAPI}1`,{
//     title: "Hello World!",
//     body: "this is an updated post",
//   })
//   .then((response)=>{
//     setPost(response.data);
//   })
// }

// function deletePost(){
//   axios.delete(`${routeAPI}/1`).then(()=>{
//     alert("Post deleted!");
//     setPost(null);
//   });
// }



// if(!post) return null;

// return (
//   <div>
//     <h1>{post.title}</h1>
//     <p>{post.body}</p>
//   </div>
// )

// if(!post) return "No post!";

// return(
//   <div>
//     <h1>{post.title}</h1>
//     <p>post.body</p>
//     <button onClick={createPost}>Create Post</button>
//   </div>
// );

// return(
//   <div>
//     <h1>{post.title}</h1>
//     <p>{post.body}</p>
//     <botton onClick={updatePost}>Update Post</botton>
//   </div>
// )

// return (
//   <div>
//     <h1>{post.title}</h1>
//     <p>"{post.body}"</p>
//      <button onClick={deletePost}> Delete Post</button>
//   </div>
// )
 }


