import React, { useState } from "react";
import "./Form_Article.css";
import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import Image from "./image";

function Form_Article() {
  // Initialize state variables to store article information.
  const [title, set_New_Title] = useState("");
  const [abstract, set_NEW_Abstract] = useState("");
  const [article, set_NEW_Article] = useState("");
  const [tag, set_NEW_Tag] = useState("");

  // Create a reference to the 'article' collection in Firestore.
  const user_Collection_Refrence = collection(db, "article");

  // Define a function to save user data to Firestore.
  const saveing_UserData = async () => {
    // Add a document to the 'article' collection with the provided data.
    await addDoc(user_Collection_Refrence, {
      title: title,
      abstract: abstract,
      article: article,
      tag: tag,
    }).then(() => {
      // Display an alert when the data is successfully uploaded.
      alert("Data Successfully Uploaded!");
    });
  };

  return (
    <>
      <div className="img">
        <h2>Upload an image:</h2>
        <Image />
      </div>
      <div className="Headerarticle">
        <h2>Share your article:</h2>
        <div className="title">
          <label>Article Title:</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(event) => {
              // Update the 'title' state as the input changes.
              set_New_Title(event.target.value);
            }}
          />
        </div>
        <div className="Abstract_Area">
          <label>Article Abstract:</label>
          <input
            type="text"
            placeholder="Enter article abstract"
            onChange={(event) => {
              // Update the 'abstract' state as the input changes.
              set_NEW_Abstract(event.target.value);
            }}
          />
        </div>
        <div className="Article_Section">
          <label>Article Text:</label>
          <input
            type="text"
            placeholder="Enter article text"
            onChange={(event) => {
              // Update the 'article' state as the input changes.
              set_NEW_Article(event.target.value);
            }}
          />
        </div>
        <div className="Tag">
          <label>Tags:</label>
          <input
            type="text"
            placeholder="Enter tags"
            onChange={(event) => {
              // Update the 'tag' state as the input changes.
              set_NEW_Tag(event.target.value);
            }}
          />
        </div>
        <button onClick={saveing_UserData} className="Button">
          Publish
        </button>
      </div>
    </>
  );
}

export default Form_Article;
