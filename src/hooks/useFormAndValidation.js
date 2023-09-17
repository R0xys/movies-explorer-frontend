
import React from 'react';

export function useFormAndValidation() {
  const [ values, setValues ] = React.useState({});
  const [ errors, setErrors ] = React.useState({});
  const [ isValid, setIsValid ] = React.useState(false);

  const handleChange = (e, defaultValid = true) => {
    const {name, value} = e.target
    setValues({...values, [name]: value });
    setErrors({...errors, [name]: e.target.validationMessage});
    setIsValid(e.target.closest('form').checkValidity()); 
  };

  const handleChangeCustomInput= (evt) => {
    handleChange(evt, false)
  }

  const resetForm = React.useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    setValues(newValues);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setValues, setErrors, setIsValid]);

  return { values, handleChange, errors, isValid, setErrors, resetForm, setValues, setIsValid, handleChangeCustomInput };
}

