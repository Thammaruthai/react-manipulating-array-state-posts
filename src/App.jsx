import "./App.css";
import Posts from "./components/Posts";
import postsdata from "./components/data";

function App() {
  console.log(postsdata);
  
  
  return (
    <div className="App">
      
      {postsdata.map((post)=>{
        return (
          <>
            <Posts
              key={post.id}
              title={post.title}
              content={post.content}
              likes={post.likes}
            />
          </>
        );
      })}
    </div>
  );
}

export default App;
