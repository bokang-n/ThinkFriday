import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to React",
      date: "October 20, 2024",
      content: "React is a JavaScript library for building user interfaces...",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      date: "October 25, 2024",
      content: "Closures are a fundamental concept in JavaScript...",
    },
    {
      id: 3,
      title: "Getting Started with CSS Grid",
      date: "October 28, 2024",
      content:
        "CSS Grid is a layout system optimized for 2-dimensional layouts...",
    },
  ];

  return (
    <div className="blog-page">
      <h1>Blog Posts</h1>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p>
              <em>{post.date}</em>
            </p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
