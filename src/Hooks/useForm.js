import { useState } from "react";


export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState({})

  const handleInputChange = ({ target }) => {
    const { name, value } = target
    console.log([name]);
    setFormState({
      ...formState,
      [name]: value,
    })

  }

  const handleReset = () => {
    setFormState(initialForm)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }



  return {
    formState,
    handleInputChange,
    handleReset,
    handleSubmit,
  }

}
