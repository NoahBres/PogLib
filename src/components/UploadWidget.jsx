import React, { useEffect, useRef } from "react";

export default function UploadWidget() {
  const cloudinaryWidget = useRef(null);

  useEffect(() => {
    cloudinaryWidget.current = window.cloudinary.createUploadWidget(
      {
        cloudName: process.env.CLOUD_NAME,
        uploadPreset: process.env.UPLOAD_PRESET,
        cropping: true,
        sources: ["local", "url", "camera"],
        tags: ["poglib"],
      },
      (error, result) => {
        console.log(
          result.info.secure_url,
          `An image of ${result.info.original_filename}`
        );
        // this.setState({
        //   imageUrl: result.info.secure_url,
        //   imageAlt: `An image of ${result.info.original_filename}`,
        // });
      }
    );
  });

  function handleClick(e) {
    cloudinaryWidget.current.open(); // open up the widget after creation
  }

  return (
    <div>
      <button onClick={handleClick}>Upload</button>
    </div>
  );
}
