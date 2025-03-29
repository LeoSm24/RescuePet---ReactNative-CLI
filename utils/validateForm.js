export const validateForm = (form) => {
    return (
      form.type.trim() !== '' &&
      form.description.trim() !== '' &&
      form.location.trim() !== '' &&
      form.image.trim() !== ''
    );
  };