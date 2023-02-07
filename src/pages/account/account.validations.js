import { createFormValidation, Validators } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    type: [Validators.required],
    alias: [Validators.required],
  },
};

export const formValidation = createFormValidation(validationSchema);
