import { useEffect, useState } from "react";
import api from "./services/api";
import Navbar from "../src/components/Navbar";
import PostCard from "../src/components/PostCard";
import PostForm from "../src/components/PostForm";

function App() {
  const [posts, setPosts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fetchPosts = () => {
    api
      .get("/api/allposts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  useEffect(() => fetchPosts(), []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <PostForm onPostCreated={fetchPosts} />
        <h1 className="text-3xl font-bold my-4">Blogging App</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
