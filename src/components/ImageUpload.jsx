import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState([]);
  console.log("img", image);

  const handlePost = () => {
    let formData = new FormData();
    Array.from(image).forEach((item) => {
      formData.append("products", item);
    });
    //rtk query to post
  };

  return (
    <div>
      <input
        multiple
        type="file"
        onChange={(e) => setImage(e.target.files)}
        title="Upload Image"
      />
      {/* for single file(e.target.files[0]) */}
      <div className=" grid grid-cols-2 gap-x-2 my-1">
        {Array.from(image).map((item, idx) => {
          return (
            <div key={idx}>
              <img
                src={item ? URL.createObjectURL(item) : null}
                className=" h-24 lg:h-52 w-full"
              />
              {/* URL.createObjectURL(item) converts into url */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageUpload;
