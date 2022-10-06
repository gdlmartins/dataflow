import "./App.scss";
import Form from "./app/features/posts/form";
import PostList from "./app/features/posts/PostList";

function App() {
  return (
    <div className='mainapp'>
      <PostList />
      <Form />
    </div>
  );
}

export default App;
