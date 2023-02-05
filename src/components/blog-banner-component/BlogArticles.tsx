import React from 'react'
import BlogCard from './BlogCard';

const BlogArticles = () => {

    const blogData = [
      {
        src: "./images/Banner.jpg",
      },
      {
        src: "./images/Banner1.jpg",
      },
      {
        src: "./images/Banner2.jpg",
      },
      {
        src: "./images/Banner2.jpg",
      },
    ];

  return (
      <div>
          {blogData.map(item => (
              <BlogCard />
              
          ))}
    </div>
  )
}

export default BlogArticles