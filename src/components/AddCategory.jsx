import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  };

  const handleFormSumbit = (e) => {
    e.preventDefault();

    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return;

    // setCategories(cat => [inputValue, ...cat]);
    onNewCategory(newInputValue);
    setInputValue('');
  }

  return (
    <form onSubmit={event => handleFormSumbit(event)}>
      <input 
        type="text"
        placeholder="Search Gifs"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}
