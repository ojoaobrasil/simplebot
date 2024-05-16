import React, { useState, useEffect } from 'react';
import api from '../services/api';

const AutoReply = () => {
  const [autoReplies, setAutoReplies] = useState([]);
  const [newAutoReply, setNewAutoReply] = useState({ keyword: '', reply: '' });

  useEffect(() => {
    const fetchAutoReplies = async () => {
      const response = await api.get('/autoreplies');
      setAutoReplies(response.data);
    };

    fetchAutoReplies();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api.post('/autoreplies', newAutoReply);
    setAutoReplies([...autoReplies, response.data]);
    setNewAutoReply({ keyword: '', reply: '' });
  };

  return (
    <div>
      <h1>Auto Replies</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Keyword"
          value={newAutoReply.keyword}
          onChange={(e) => setNewAutoReply({ ...newAutoReply, keyword: e.target.value })}
        />
        <input
          type="text"
          placeholder="Reply"
          value={newAutoReply.reply}
          onChange={(e) => setNewAutoReply({ ...newAutoReply, reply: e.target.value })}
        />
        <button type="submit">Add Auto Reply</button>
      </form>
      <ul>
        {autoReplies.map((autoReply) => (
          <li key={autoReply._id}>
            {autoReply.keyword}: {autoReply.reply}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoReply;