 import React, { useState } from 'react';
import './App.css';
import PostTypeSelector from './Select_Post_Type';
import Form_Question from './Form_Question';
import Form_Article from './Form_Article';
import Questions_Finding from './Questions_Finding';
import "firebase/firestore";
function App() {
  const [postType, setPostType] = useState('question');

  return (
    <div className="App">
      <h1>New Post</h1>
      <PostTypeSelector postType={postType} setPostType={setPostType} />
      {postType === 'question' ? <Form_Question /> : null}
      {postType === 'article' ? <Form_Article /> : null}
      <div className="Find"> 
      {postType === 'FindQuestion' ? <Questions_Finding /> : null} 
      </div>
     
    </div>
  );
}

export default App;
