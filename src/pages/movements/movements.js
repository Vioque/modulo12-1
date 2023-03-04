import { getMovements } from './movements.api';
import { history } from '../../core/router';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListFromApiToViewModel } from './movements.mappers';
import { getAccount } from '../account/account.api';
import { onSetValues } from '../../common/helpers';
import { mapAccountFromApiToViewModel, mapAccountFromViewModelToApi } from '../account/account.mappers';

const params = history.getParams();

getMovements(params.id).then(movementsList => {
  const viewModelMovements = mapMovementsListFromApiToViewModel(movementsList).filter(movement => movement.id === params.id);
  addMovementRows(viewModelMovements);
});

getAccount(params.id).then(account => {
  const viewModelAccount = mapAccountFromApiToViewModel(account)//.filter(accountId => accountId.id === params.id)
  console.log('view', viewModelAccount,'account', account)
  onSetValues(viewModelAccount);
});



