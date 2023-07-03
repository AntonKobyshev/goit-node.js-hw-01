const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("db", "contacts.json");

console.log(contactsPath)

const listContacts = async () => {
    const data = await fs.readFile(contactsPath )
    return JSON.parse(data);
}


const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId)
    return contact || null;

}

// const removeContact = async (contactId) => {

// }

// const addContact= async (name, email, phone) => {

// }

module.exports = {
    listContacts,
    getContactById,
    // removeContact,
    // addContact
}