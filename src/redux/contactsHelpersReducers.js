import { fetchContacts, addContact, deleteContact } from './operations';

const extraActions = [fetchContacts, addContact, deleteContact];
export const getActions = type => extraActions.map(action => action[type]);

export const handlePending = state => {
  state.isLoading = true;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const fetchContactsFulfilledReducer = (state, action) => {
  state.items = action.payload;
};

export const addContactFulfilledReducer = (state, action) => {
  state.items.push(action.payload);
};

export const deleteContactFulfilledReducer = (state, action) => {
  const index = state.items.findIndex(({ id }) => id === action.payload.id);
  state.items.splice(index, 1);
};
