import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CrudExample = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    // Fetch all posts on component mount
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  const handleInputChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdatePost = () => {
    if (editingPostId) {
      // Update an existing post
      axios.put(`https://jsonplaceholder.typicode.com/posts/${editingPostId}`, newPost)
        .then(response => {
          setPosts(posts.map(post => (post.id === editingPostId ? response.data : post)));
          setNewPost({ title: '', body: '' });
          setEditingPostId(null);
        })
        .catch(error => {
          console.error('Error updating post:', error);
        });
    } else {
      // Create a new post
      axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
        .then(response => {
          setPosts([...posts, response.data]);
          setNewPost({ title: '', body: '' });
        })
        .catch(error => {
          console.error('Error creating post:', error);
        });
    }
  };

  const handleEditPost = (postId) => {
    // Set the post being edited and populate the form
    const postToEdit = posts.find(post => post.id === postId);
    setNewPost({ title: postToEdit.title, body: postToEdit.body });
    setEditingPostId(postId);
  };

  const handleDeletePost = (postId) => {
    // Delete a post
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(() => {
        setPosts(posts.filter(post => post.id !== postId));
        setNewPost({ title: '', body: '' });
        setEditingPostId(null);
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  };

  return (
    <div>
      <h1>CRUD Example with Axios</h1>

      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {post.title} - {post.body}
            <button onClick={() => handleEditPost(post.id)}>Edit</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>{editingPostId ? 'Edit' : 'Create'} Post</h2>
      <div>
        <label>Title: </label>
        <input type="text" name="title" value={newPost.title} onChange={handleInputChange} />
      </div>
      <div>
        <label>Body: </label>
        <input type="text" name="body" value={newPost.body} onChange={handleInputChange} />
      </div>
      <button onClick={handleCreateOrUpdatePost}>
        {editingPostId ? 'Update Post' : 'Create Post'}
      </button>
    </div>
  );
};

export default CrudExample;
