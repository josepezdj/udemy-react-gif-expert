import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['']);

  const handleAddCategory = (cat) => {
    if (categories.includes(cat)) return;

    setCategories([cat, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        onNewCategory={ cat => handleAddCategory(cat) }
      />

      { categories.map( category => (
          <GifGrid
            key={ category } 
            category={ category } 
          />
        ))
      }

    </>
  )
}
