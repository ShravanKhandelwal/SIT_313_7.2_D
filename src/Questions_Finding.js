import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./Questions_Finding.css";

function FindQuestions_Fromdata() {
  // State variables to manage questions, filters, new question input, and expanded question index
  const [questions, set_NEW_Questions] = useState([]);
  const [filterTitle, set_NEW_FilterTitle] = useState("");
  const [filterTag, set_NEW_FilterTag] = useState("");
  const [newQuestion, set_New_Question] = useState({
    title: "",
    tag: "",
    desc: "",
  });
  const [expandedIndex, settingExpandedIndex] = useState(null);

  // Reference to the 'question' collection in Firestore
  const userQuestionsRef = collection(db, "question");
  // State variable to hold filtered questions
  const [Questions_Filtered, setting_NEW_Questions_Filtered] = useState([]);

  useEffect(() => {
    // Function to fetch questions from Firestore and initialize the component
    const get_NEW_Questions = async () => {
      const data = await getDocs(userQuestionsRef);
      const questionData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // Set the questions and initialize the filtered questions
      set_NEW_Questions(questionData);
      setting_NEW_Questions_Filtered(questionData);
    };
    get_NEW_Questions();
  }, []);

  const handleFilter = () => {
    // Function to apply filters to questions based on title and tag
    const Questions_Filtered = questions.filter(
      (question) =>
        question.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
        question.tag.toLowerCase().includes(filterTag.toLowerCase())
    );
    setting_NEW_Questions_Filtered(Questions_Filtered);
  };

  const handlingDeleteQuestion = async (id) => {
    // Function to delete a question by its ID
    // Remove the question with the given id from the database
    await deleteDoc(doc(db, 'questions', id));

    // Update Questions_Filtered to remove the deleted question
    const updatedQuestions = Questions_Filtered.filter(
      (question) => question.id !== id
    );
    setting_NEW_Questions_Filtered(updatedQuestions);
  };

  const handleSubmitNewQuestion = async () => {
    // Function to submit a new question
    // Add the new question to the database
    await addDoc(collection(db, "question"), newQuestion);

    // Update Questions_Filtered with the new question
    setting_NEW_Questions_Filtered([...Questions_Filtered, newQuestion]);

    // Clear the form fields
    set_New_Question({ title: "", tag: "", desc: "" });
  };

  const handling_Expanded = (index) => {
    // Function to toggle the expanded state for a question
    settingExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <div>
      <h1>Filter  Questions</h1>
      <div className="filter_section">
        <h5>Title:</h5>
        <input
          type="text"
          placeholder="Filter by title"
          value={filterTitle}
          onChange={(e) => set_NEW_FilterTitle(e.target.value)}
        />

        <h5>Tag:</h5>
        <input
          type="text"
          placeholder="Filter by tag"
          value={filterTag}
          onChange={(e) => set_NEW_FilterTag(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>

      <h1>Questions</h1>
      {Questions_Filtered.map((question, index) => (
        <div className="card_Section" key={question.id}>
          <h2>Question: {index + 1}</h2>
          <h2>Title: {question.title}</h2>
          <button onClick={() => handlingDeleteQuestion(question.id)}>
            Delete
          </button>
          <button onClick={() => handling_Expanded(index)}>
            {expandedIndex === index ? "Collapse" : "Expand"}
          </button>
          {expandedIndex === index && (
            <div>
              <h3>More Details:</h3>
              <p>Description: {question.desc}</p>
              <p>Tag: {question.tag}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FindQuestions_Fromdata;
