import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  firstName: {
    type: String,
    required: "First name is required",
  },
  lastName: {
    type: String,
    required: "Last name is required",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Contact = mongoose.model("Contact", ContactSchema);
