export const contactsInitialState = {
  contacts: [
    {
      id: 'id-1',
      name: 'Rosie Simpson',
      phone_number: '+380679594299',
    },
    {
      id: 'id-2',
      name: 'Hermione Kline',
      phone_number: '+380980088585',
    },
    {
      id: 'id-3',
      name: 'Eden Clements',
      phone_number: '+380666796606',
    },
    { id: 'id-4', name: 'Annie Copeland', phone_number: '+380666796608' },
  ],

  isLoading: false,
  error: null,
  activeContactId: null,
};

export const filterInitialState = {
  filter: '',
};
