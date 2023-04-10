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
        const existContact = state.find(
          contact => contact.name === action.payload.name
        );
        console.log(existContact);
        if (!existContact) {
          state.push(action.payload);
        } else {
          return alert(`contactact ${existContact.name} already in your  list`);
        }
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
    sortAtoZ(state, action) {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      console.log(action);
      state.sort(function (contact1, contact2) {
        return contact1.name.localeCompare(contact2.name);
      });
    },
    sortZtoA(state, action) {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      state.sort(function (contact1, contact2) {
        return contact2.name.localeCompare(contact1.name);
      });
    },
  },
});

export const { addContact, deleteContact, sortAtoZ, sortZtoA } =
  contactsListSlice.actions;
export const contactsReducer = contactsListSlice.reducer;
