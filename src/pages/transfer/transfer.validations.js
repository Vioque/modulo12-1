import { createFormValidation, Validators } from '@lemoncode/fonk';
import { dayValidator, monthValidator, yearValidator } from './transfer.custom.validations';

const validationSchema = {
  field: {
    iban: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    name: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    amount: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    concept: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
    ],
    day: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: dayValidator,
      },
    ],
    month: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: monthValidator,
      },
    ],
    year: [
      {
        validator: Validators.required,
        message: 'Campo requerido',
      },
      {
        validator: yearValidator,
      },
    ],
    email: [
      {
        validator: Validators.email,
        message: 'Email no válido',
      },
    ],

  },
};

export const formValidation = createFormValidation(validationSchema);
