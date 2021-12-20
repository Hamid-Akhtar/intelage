import mongoose from "mongoose";

const formSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
    experience: {
      type: String,
      required: true,
    },
    skills: [
      {
        type: String,
        required: true,
      },
    ],
    reason: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const FormModel = mongoose.model("FormModel", formSchema);

export default FormModel;
