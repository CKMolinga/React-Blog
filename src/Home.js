import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "This is my new website",
      author: "John Doe",
      id: 1,
    },
    {
      title: "Welcome party",
      body: "Welcome to the party!",
      author: "Captain Z",
      id: 2,
    },
    {
      title: "Webdev Top tips",
      body: "Top tips for devs",
      author: "Charles Zuckerberg",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
