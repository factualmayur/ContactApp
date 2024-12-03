import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BiSolidEdit } from "react-icons/bi";
import { IoTrashBin } from "react-icons/io5";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import AddAndUpContact from "./AddAndUpContact";
import useDisclose from "../useDisclose/useDisclose";
import { toast } from "react-toastify";

function ContactCard({ contact }) {

  const {isOpen,onClose,onOpen} = useDisclose();
  async function deleteContact(id) {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contacts Deleted Successfully")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <div className="flex flex-col gap-2 mt-2">
      <div
        key={contact.id}
        className="flex items-center gap-3 p-2 border rounded justify-evenly bg-yellow"
      >
        <HiOutlineUserCircle className="w-16 h-auto text-darkyellow" />

        <div className="ml-2 flex h-[60px] w-[200px] flex-col">
          <h1 className="text-sm font-bold">{contact.name || "No Name"}</h1>
          <h3 className="text-sm">{contact.email || "no email"}</h3>
          <h3 className="text-sm">{contact.phone || "no number"}</h3>
        </div>

        <div className="flex h-auto w-[120px] items-center justify-around text-white">
          <BiSolidEdit 
          onClick={onOpen}
          className="h-auto text-black cursor-pointer w-9 hover:text-cyan-500" />
          <IoTrashBin
            onClick={() => deleteContact(contact.id)}
            className="h-auto text-blue-600 cursor-pointer w-9 hover:text-red-500"
          />
        </div>
      </div>
      
    </div>
    <AddAndUpContact
    contact={contact} 
    isOpen={isOpen} 
    onClose={onClose} 
    isUpdated={true}/>
    </>
  );
}

export default ContactCard;
