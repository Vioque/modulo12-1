import { getMovements } from './movements.api';
import { history } from '../../core/router';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListFromApiToViewModel } from './movements.mappers';
import { onSetValues } from '../../common/helpers';

const params = history.getParams();

getMovements(params.id).then(movementsList => {
  const viewModelMovements = mapMovementsListFromApiToViewModel(movementsList);
  addMovementRows(viewModelMovements);

  console.log({ movementsList });

  viewModelMovements.forEach(movementsList => {
    onSetValues(`select-${movementsList.accountId}`, event => {
      const route = event.target.value;
      history.push(route);
    });
  });
});
