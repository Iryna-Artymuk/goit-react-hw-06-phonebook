import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,

  // Об'єкт редюсерів
  reducers: {
    setActiveContactId(state, action) {
      state.activeContactId = action.payload;
      // console.log(' action.payload: ', action.payload);
    },
    addContact: {
      //   при створенні слайсу, властивості в об'єкті редюсерів, в нашому випадку addContacts, необхідно передати не функцію, а об'єкт із двома властивостями - reducer та prepare.

      reducer(state, action) {
        // console.log(action.payload);

        // const existContact = state.contacts.find(
        //   contact => contact.name === action.payload.name
        // );
        // // console.log(existContact);
        // if (!existContact) {
        //   state.contacts.push(action.payload);
        // } else {
        //   return alert(`contactact ${existContact.name} already in your  list`);
        // }

        state.contacts.push(action.payload);
      },
      prepare(contactData) {
        // console.log('contactData: ', contactData);

        // contactData це обєкт нового контакту він "залетить"  в prepare при сабміті форми коли зробимо dispatch  addContact
        return {
          payload: {
            ...contactData,
            id: nanoid(),
          },
        };
      },
    },
    changeContact: {
      //   при створенні слайсу, властивості в об'єкті редюсерів, в нашому випадку addContacts, необхідно передати не функцію, а об'єкт із двома властивостями - reducer та prepare.

      reducer(state, action) {
        console.log(action.payload);

        const contact = state.contacts.find(
          contact => contact.id === action.payload.id
        );
        // console.log(existContact);
        if (contact) {
          contact.name = action.payload.name;
          contact.phone_number = action.payload.phone_number;
        } else {
          return contact;
        }
      },
      prepare(newData) {
        // console.log('contactData: ', contactData);

        // contactData це обєкт нового контакту він "залетить"  в prepare при сабміті форми коли зробимо dispatch  addContact
        return {
          payload: {
            ...newData,
          },
        };
      },
    },
    // очікується що в action прийде id контакту який треба видалити
    deleteContact(state, action) {
      // delete contact  variant 1
      // const index = state.contacts.findIndex(contact => {
      //   console.log('action.payload: ', action.payload);
      //   return contact.id === action.payload;
      // });
      // state.contacts.splice(index, 1);

      
      /////////////////////////////////////////////////////////////
      // delete contact  variant 2
      const filteredContacts = state.contacts.filter(
        contacts => contacts.id !== action.payload
      );
      state.contacts = filteredContacts;
   
    },
    sortAtoZ(state, action) {
      console.log('state: ', state.contacts);
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      // console.log(action);
      state.contacts.sort(function (contact1, contact2) {
        return contact1.name.localeCompare(contact2.name);
      });
    },

    sortZtoA(state, action) {
      // const sortState = [...state].sort(function (task1, task2) {
      //   return task1.text.localeCompare(task2.text);
      // });
      state.contacts.sort(function (contact1, contact2) {
        return contact2.name.localeCompare(contact1.name);
      });
    },
  },
});

// Генератори екшенів
export const {
  addContact,
  deleteContact,
  sortAtoZ,
  sortZtoA,
  setActiveContactId,
  changeContact,
} = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
