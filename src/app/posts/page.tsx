import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Post {
 userId: number;
 id: number;
 title: string;
 body: string;
}
const Posts = async () => {
 const response = await fetch(base_url);
 const posts: Post[] = await response.json();
 return (
  <>
   <h1 className="text-fuchsia-500">Postingan Page</h1>
   {posts.map((post) => {
    return (
     <CardList>
      <p>{post.id}</p>
      <i>{post.title}</i>
      <p>{post.body}</p>
      <ViewUserButton userId={post.userId}/>
     </CardList>
    );
   })}
   
  </>
 );
};

export default Posts;
