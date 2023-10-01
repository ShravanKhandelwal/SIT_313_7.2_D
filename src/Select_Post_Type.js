import React from 'react';
import './Select_Post_Type.css';

function Select_Post_Type({ postType, setPostType }) {
  const Post_type_Change_handeling = (event) => {
    const { name, checked } = event.target;
    if (checked) {
      setPostType(name);
    }
  };

  return (
    <div className="header">
      <label>Select Post Type:</label>
      <div>
        <input
          type="checkbox"
          id="question"
          name="question"
          checked={postType === 'question'}
          onChange={Post_type_Change_handeling}
        />
        <label htmlFor="question">Question</label>
      </div>
      <div className="section_2">
        <input
          type="checkbox"
          id="article"
          name="article"
          checked={postType === 'article'}
          onChange={Post_type_Change_handeling}
        />
        <label htmlFor="article">Article</label>
        </div>

        <div>
        <input
          type="checkbox"
          id="FindOuestion"
          name="FindQuestion"
          checked={postType === 'FindQuestion'}
          onChange={Post_type_Change_handeling}
          />
          <label htmlFor="FindQuestion">Find Question</label>
      </div>
      
    </div>
  );
}

export default Select_Post_Type;
