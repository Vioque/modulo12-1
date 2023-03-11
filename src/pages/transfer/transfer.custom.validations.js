export const dayValidator = day => {
  const succeeded = parseInt(day.value) > 0 && parseInt(day.value) <= 31;
  return {
    succeeded: succeeded,
    message: 'Introduzca una fecha válida',
  };
};

export const monthValidator = month => {
  const succeeded = parseInt(month.value) > 0 && parseInt(month.value) <= 12;
  return {
    succeeded: succeeded,
    type: '',
    message: 'Introduzca una fecha válida',
  };
};

export const yearValidator = year => {
  const currentYear = new Date().getFullYear();
  const succeeded = parseInt(year.value) >= currentYear && parseInt(year.value) < currentYear + 2;
  return {
    succeeded: succeeded,
    type: '',
    message: 'Introduzca una fecha válida',
  };
};
