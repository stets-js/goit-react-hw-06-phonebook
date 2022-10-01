import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      const isSameName = state.contacts.find(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      isSameName
        ? alert(`${action.payload.name} is already in contacts`)
        : state.contacts.push(action.payload);
    },

    removeContact(state, action) {
      state.contacts.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = ContactsSlice.actions;

export default ContactsSlice.reducer;
