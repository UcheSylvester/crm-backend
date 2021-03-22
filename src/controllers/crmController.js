import { Contact } from "../models/crmModel";

export const addNewContact = async (req, res) => {
  let newContact = new Contact(req.body);

  try {
    const savedContact = await newContact.save();

    res.send(savedContact);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = Contact.find();

    console.log({ contacts });

    res.send(contacts);
  } catch (e) {
    res.status(500).send(e);
  }
};

export const getContact = async (req, res) => {
  try {
  } catch (e) {
    console.log({ e });
  }
};
