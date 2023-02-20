import { getMovements } from './movements.api';
import { history } from '../../core/router';
import { addMovementRows } from './movements.helpers';
import { mapMovementsListFromApiToViewModel } from './movements.mappers';

const params = history.getParams();

getMovements(params.id).then(movementsList => {
  const viewModelMovements = mapMovementsListFromApiToViewModel(movementsList).filter(movement => movement.id === params.id);
  addMovementRows(viewModelMovements);

  console.log({ viewModelMovements });

  // viewModelMovements.forEach(movementsList => {

  // });
});
