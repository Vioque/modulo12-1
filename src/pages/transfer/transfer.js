import { setAccountOptions } from './transfer.helpers';
import { getAccountList } from '../account-list/account-list.api';
import { history } from '../../core/router';
import { onSetError, onSetFormErrors, onSubmitForm, onUpdateField } from '../../common/helpers';
import { formValidation } from './transfer.validation';
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
  // const apiTransfer = mapAccountFromViewModelToApi(transfer);
  // return insertTransfer(apiTransfer);
  return insertTransfer(transfer);
};
onSubmitForm('transfer-button', () => {
  formValidation.validateForm(transfer).then(result => {
    onSetFormErrors(result);
    if (result.succeeded) {
      onSave().then(apiTransfer => {
        history.back();
      });
    }
  });
});
