export const mapMovementsListFromApiToViewModel = movementsList => {
  return movementsList.map(account => mapMovementsFromApiToViewModel(account));
};

const mapMovementsFromApiToViewModel = account => {
  return {
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: `${account.balance} €`,
    lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
  };
};
