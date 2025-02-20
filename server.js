const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/blogs', (req, res) => {
  const blogDir = path.join(__dirname, 'src/pages/blogs');
  console.log(`Reading blog directory: ${blogDir}`);
  const files = fs.readdirSync(blogDir);
  const posts = files.map(file => {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf-8');
    const [title, ...rest] = content.split('\n');
    return {
      id: file.replace('.md', ''),
      title: title.replace('# ', ''),
      content: rest.join('\n')
    };
  });
  console.log(`Found ${posts.length} blog posts`);
  res.json(posts);
});

app.get('/api/blogs/:id', (req, res) => {
  const { id } = req.params;
  const blogDir = path.join(__dirname, 'src/pages/blogs');
  const filePath = path.join(blogDir, `${id}.md`);
  console.log(`Reading blog post: ${filePath}`);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const [title, ...rest] = content.split('\n');
    res.json({
      title: title.replace('# ', ''),
      content: rest.join('\n')
    });
  } else {
    console.log(`Post not found: ${filePath}`);
    res.status(404).send('Post not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
