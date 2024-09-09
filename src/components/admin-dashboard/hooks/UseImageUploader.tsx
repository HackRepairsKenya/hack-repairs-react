import { useState } from "react";
import axios from "axios";

const useImageUploader = () => {
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImageToCloudinary = async (file, cloudName, uploadPreset) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("cloud_name", cloudName);

      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/ddrzo561w/image/upload",
        formData
      );

      if (response.status === 200) {
        const imageURL = response.data.secure_url;
        return imageURL;
      } else {
        console.error("Failed to upload image:", response);
        return null;
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  return { image, imagePreview, isLoading, uploadImageToCloudinary, handleImageChange };
};

export default useImageUploader;