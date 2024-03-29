import "./App.css";
import AddPostForm from "./components/addPostForm";
import PostList from "./components/postList";

function App() {
  return (
    <main className="App-container">
      <AddPostForm />
      <PostList />
    </main>
  );
}

export default App;
