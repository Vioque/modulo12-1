export const mapAccountFromApiToViewModel = account => {
  return {
    ...account,
    alias: account.name,
    balance: `${account.balance} €`,
  };
};

export const mapAccountFromViewModelToApi = account => {
  return {
    ...account,
    name: account.alias,
  };
};
