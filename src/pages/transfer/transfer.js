import { setAccountOptions } from './transfer.helpers';
import { getAccountList } from '../account-list/account-list.api';
import { history } from '../../core/router';
import { onSetError, onSetFormErrors, onSubmitForm, onUpdateField } from '../../common/helpers';
import { formValidation } from './transfer.validations';
import { insertTransfer } from './transfer.api';

const params = history.getParams();

getAccountList().then(accountList => {
  setAccountOptions(accountList, params.id);
});

let transfer = {
  iban: '',
  name: '',
  amount: '',
  concept: '',
  email: '',
};

onUpdateField('iban', event => {
  const value = event.target.value;

  transfer = {
    ...transfer,
    iban: value,
  };

  formValidation.validateField('iban', transfer.iban).then(result => {
    onSetError('iban', result);
  });
});

onUpdateField('name', event => {
  const value = event.target.value;

  transfer = {
    ...transfer,
    name: value,
  };

  formValidation.validateField('name', transfer.name).then(result => {
    onSetError('name', result);
  });
});

onUpdateField('amount', event => {
  const value = event.target.value;

  transfer = {
    ...transfer,
    amount: value,
  };

  formValidation.validateField('amount', transfer.amount).then(result => {
    onSetError('amount', result);
  });
});

onUpdateField('concept', event => {
  const value = event.target.value;

  transfer = {
    ...transfer,
    concept: value,
  };

  formValidation.validateField('concept', transfer.concept).then(result => {
    onSetError('concept', result);
  });
});

onUpdateField('day', event => {
  const value = event.target.value;

  transfer = {
    ...transfer,
    day: value,
  };

  formValidation.validateField('day', transfer.day).then(result => {
    onSetError('day', result);
  });
});

onUpdateField('month', event => {
  const value = event.target.value;

  transfer = {
    ...transfer,
    month: value,
  };

  formValidation.validateField('month', transfer.month).then(result => {
    onSetError('month', result);
  });
});

onUpdateField('year', event => {
  const value = event.target.value;

  transfer = {
    ...transfer,
    year: value,
  };

  formValidation.validateField('year', transfer.year).then(result => {
    onSetError('year', result);
  });
});

onUpdateField('email', event => {
  const value = event.target.value;

  transfer = {
    ...transfer,
    email: value,
  };

  formValidation.validateField('email', transfer.email).then(result => {
    onSetError('email', result);
  });
});

const onSave = () => {
  return insertTransfer(transfer);
};
onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then(result => {
    onSetFormErrors(result);
    if (result.succeeded) {
      transfer.transaction = transfer.day + transfer.month + transfer.year;
      const { day, month, year, ...transferData } = transfer;
      transfer = transferData;
      onSave().then(transfer => {
        history.back();
      });
    }
  });
});
