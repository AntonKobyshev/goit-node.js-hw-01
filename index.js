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
      break;

    // case 'remove':
    //   // ... id
    //   break;
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

// invokeAction(argv);

invokeAction({
  action: "add",
  name: "asd",
  email: "dui.in@egetlacus.ca",
  phone: "(294) 840-6685",
});
