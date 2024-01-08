const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      apiUrl: "https://playground.4geeks.com/apis/fake/contact/",
      contacts: [],
    }, // aquí se guardarán las variables.
    actions: {
      /*Función para traer datos de la bd con Fetch*/
      getContacts: async () => {
        const store = getStore();
        const response = await fetch(store.apiUrl + "agenda/Agenda_Cardona");
        const dataContacts = await response.json();
        setStore({ contacts: dataContacts });
      },

      addContact: async (newContact) => {
        const store = getStore();
        const response = await fetch(
          store.apiUrl, //
          {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        getActions().getContacts();
      },

      deleteContact: async (id) => {
        const store = getStore();
        const response = await fetch(`${store.apiUrl}${id}`,
        {
          method: "DELETE",
        });
              
        getActions().getContacts();
      },

      updateContact: async (newContact, id) => {
        const store = getStore();
        const response = await fetch(`${store.apiUrl}${id}`,
        {
          method: "PUT",
          body: JSON.stringify(newContact),
          headers: {
           "Content-Type": "application/json"
          }
        });
        getActions().getContacts();
      }

      // Dado que action es un objeto, entonces las funciones aquí citadas se presentan del modo llave: valor. Donde llave es el nombre de la función.
    }, // aquí se guararán las funciones que modifican esas variables.
  };
};

export default getState;
