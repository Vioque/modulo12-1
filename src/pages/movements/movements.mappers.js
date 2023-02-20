export const mapMovementsListFromApiToViewModel = movementsList => {
  return movementsList.map(account => mapMovementsFromApiToViewModel(account));
};

const mapMovementsFromApiToViewModel = movement => {
  return {
    id: movement.accountId,
    name: movement.description,
    balance: `${movement.balance} €`,
    lastTransaction: new Date(movement.lastTransaction).toLocaleDateString(),
  };
};
