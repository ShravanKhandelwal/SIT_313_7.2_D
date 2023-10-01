import React from 'react';
import { useState } from 'react';
import { storage } from './firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 as uuidv4 } from 'uuid';
import './image_Displayed.css';

function Image_Displayed() {
  // State variable to store the uploaded image
  const [image_DisplayedUpload, setImage_DisplayedUpload] = useState(null);

  // Function to upload the selected image to Firebase Storage
  const uploadImage_Displayed = () => {
    // Check if an image has been selected
    if (image_DisplayedUpload == null) return;

    // Generate a unique file name using UUID and the original file name
    const uniqueFileName = `${uuidv4()}_${image_DisplayedUpload.name}`;

    // Create a reference to the Firebase Storage location for the uploaded image
    const image_DisplayedRef = ref(storage, `image_Displayed/${uniqueFileName}`);

    // Upload the image file to Firebase Storage
    uploadBytes(image_DisplayedRef, image_DisplayedUpload).then(() => {
      // Display an alert when the image is successfully uploaded
      alert("Image Successfully Uploaded!");
    });
  }

  return (
    <div className="img">
      {/* Input element for selecting an image file */}
      <input type="file" onChange={(event) => {
        // Set the selected image file in the state
        setImage_DisplayedUpload(event.target.files[0]);
      }} />
      {/* Button to trigger the image upload process */}
      <button onClick={uploadImage_Displayed}>Upload image</button>
    </div>
  );
}

export default Image_Displayed;
