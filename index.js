const contacts = require("./contacts");

// const argv = require('yargs').argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
      break;
    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
      break;
    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
      break;
    case "update":
      const updateContact = await contacts.updateById(id, name, email, phone);
      return console.log(updateContact);
      break;

    case "remove":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);
      break;
      
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction(argv);

invokeAction({
  action: "add",
  name: "Anton",
  email: "antonkobyshev@gmail.com",
  phone: "+380672098165",
});

// invokeAction({
//   action: "remove",
//   id: "3VHl84j-5_uC8e2ghLNMa",
// });
