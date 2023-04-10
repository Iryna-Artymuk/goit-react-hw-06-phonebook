import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const initialContacts = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    phone_number: '459-12-56',
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    phone_number: '443-89-12',
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    phone_number: '645-17-79',
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    phone_number: '227-91-26',
  },
];

const contactsListSlice = createSlice({
  name: 'contact',
  initialState: initialContacts,
  reducers: {
    // очікується що в action прийде {} контакту який треба додати
    addContact: {
      reducer(state, action) {
        console.log(action.payload);
        state.push(action.payload);
      },
      prepare(contactData) {
        return {
          payload: {
            ...contactData,
            id: nanoid(),
          },
        };
      },
    },
    // очікується що в action прийде id контакту який треба видалити
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsListSlice.actions;
export const contactsReducer = contactsListSlice.reducer;
