import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from 'yup';  

const contactsSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be digits only")
    .required("Phone number is required"),
});

function AddAndUpContact({ isOpen, onClose, isUpdated, contact }) {
  async function addContact(contact) {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contacts Added Successfully")
    } catch (error) {
      console.log(error);
    }
  }

  async function updateContact(contact, id) {
    try {
      const contactRef = doc(db, "contacts", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contacts Updated Successfully")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        validationSchema={contactsSchemaValidation}
          initialValues={
            isUpdated
              ? {
                  name: contact?.name || "",
                  email: contact?.email || "",
                  phone: contact?.phone || "",
                }
              : {
                  name: "",
                  email: "",
                  phone: "",
                }
          }
          onSubmit={(values) => {
            isUpdated ? updateContact(values,contact.id) : addContact(values);
            onClose();
          }}
        >
          <Form>
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-gray-700">
                Name
              </label>
              <Field
                name="name"
                type="text"
                className="px-2 py-1 border rounded"
              />
              <div className="text-xs text-red-700">
                <ErrorMessage name="name"/>
              </div>

              <label htmlFor="email" type="email" className="text-gray-700">
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="px-2 py-1 border rounded"
              />
               <div className="text-xs text-red-700">
                <ErrorMessage name="email"/>
              </div>

              <label htmlFor="phone" className="text-gray-700">
                Phone Number
              </label>
              <Field
                name="phone"
                type="text"
                className="px-2 py-1 border rounded"
              />
               <div className="text-xs text-red-700">
                <ErrorMessage name="phone"/>
              </div>

              <button
                type="submit"
                className="hover:bg-yellow-600 ml-[62%] mt-4 h-[40px] w-[110px] rounded border bg-darkyellow py-2 text-sm"
              >
                {isUpdated ? "Update" : "Add"} Contact
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
}

export default AddAndUpContact;
