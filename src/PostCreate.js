import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group  ">
          <h5>Title</h5>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control mt-2"
          />
        </div>
        <button className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
