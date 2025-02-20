import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const context = import.meta.glob('./blogs/*.md', { as: 'raw' });
        const key = Object.keys(context)[id - 1];
        const content = await context[key]();
        const [title, ...rest] = content.split('\n');
        setPost({
          title: title.replace('# ', ''),
          content: rest.join('\n')
        });
      } catch (error) {
        setError(error.message);
      }
    };

    fetchBlogPost();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto pt-32 pb-20 py-12 px-4 md:px-0 text-white">
      <header className="text-left mb-8 border-b border-gray-700 pb-8">
        <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
      </header>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
