export const mapMovementsListFromApiToViewModel = movementsList => {
  return movementsList.map(account => mapMovementsFromApiToViewModel(account));
};

const mapMovementsFromApiToViewModel = movement => {
  return {
    id: movement.accountId,
    transaction: new Date(movement.transaction).toLocaleDateString(),
    description: movement.description,
    amount: movement.amount,
    balance: `${movement.balance} €`,
    realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
  };
};
