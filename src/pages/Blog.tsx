import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const context = import.meta.glob('./blogs/*.md', { as: 'raw' });
        const posts = await Promise.all(
          Object.keys(context).map(async (key, index) => {
            const content = await context[key]();
            const [title, ...rest] = content.split('\n');
            const shortDescription = rest.join('\n').substring(0, 200) + '...'; // Short description
            return {
              id: index + 1,
              title: title.replace('# ', ''),
              shortDescription,
              content: rest.join('\n')
            };
          })
        );
        setBlogPosts(posts);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlogPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto pt-32 pb-20 py-12 px-4 md:px-0 text-white">
      <header className="text-left mb-8 border-b border-gray-700 pb-8">
        <h1 className="text-4xl font-extrabold mb-2">Blog</h1>
      </header>

      {blogPosts.map(post => (
        <article key={post.id} className="mb-6 border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-semibold mb-3">
            <Link to={`/blog/${post.id}`} className="hover:underline">{post.title}</Link>
          </h2>
          <p>{post.shortDescription}</p>
          <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">Read more</Link>
        </article>
      ))}
    </div>
  );
};

export default Blog;
