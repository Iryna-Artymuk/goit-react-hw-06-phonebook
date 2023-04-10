export const getStoreContacts = state => {
  //   console.log(state);
  return state.contacts;
};

export const getStoreFilter = state => {
  console.log(state.filter.searchValue);
  return state.filter.searchValue;
};
