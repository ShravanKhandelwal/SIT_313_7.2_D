// Import necessary dependencies and styles
import "./Form_Question.css";
import Image from "./image";
import { db } from "./firebase";
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

function Form_Question() {
  // Initialize state variables to store question information.
  const [title, set_NEW_Title] = useState("");
  const [desc, set_NEW_Desc] = useState("");
  const [tag, set_NEW_Tag] = useState("");
  const userCollectionRefrences = collection(db, "question"); // Reference to the 'question' collection in Firestore

  // Define a function to write user data (question) to Firestore.
  const writing_UserData = async () => {
    // Add a document to the 'question' collection with the provided data.
    await addDoc(userCollectionRefrences, {
      title: title,
      desc: desc,
      tag: tag,
    }).then(() => {
      // Display an alert when the data is successfully uploaded.
      alert("Data Successfully Uploaded!");
    });
  };

  return (
    <>
      <div className="img">
        <h2>Add an image:</h2>
        <Image />
      </div>
      <div className="Article_heading">
        <h2>What do you want to share or ask?</h2>
        <div className="title">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter title"
            onChange={(event) => {
              // Update the 'title' state as the input changes.
              set_NEW_Title(event.target.value);
            }}
          />
        </div>
        <div className="Article_Heading">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Enter description"
            onChange={(event) => {
              // Update the 'desc' state as the input changes.
              set_NEW_Desc(event.target.value);
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
        <button onClick={writing_UserData} className="Button">
          Post
        </button>
      </div>
    </>
  );
}

export default Form_Question;
