import { useState } from "react";
import axios from "axios";
import { ImageUploaderHook } from "@/utils/types"; // Adjust the path as necessary

const useImageUploader = (): ImageUploaderHook => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const uploadImageToCloudinary = async (file: File, cloudName: string, uploadPreset: string): Promise<string | null> => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);
      formData.append("cloud_name", cloudName);

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, // Corrected URL to use cloudName dynamically
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return { image, imagePreview, isLoading, uploadImageToCloudinary, handleImageChange };
};

export default useImageUploader;
