import { useEffect, useState } from "react";
import { fetchGifs } from '../helpers/fetchGifs';

export const useFetchGits = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await fetchGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }

  useEffect( () => {
    getImages(category);
  }, [] )

  return {
    images,
    isLoading
  };

};