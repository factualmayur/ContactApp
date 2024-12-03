import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./config/Nav";
import { FaSearch, FaPlusCircle } from "react-icons/fa"; 
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpContact from "./components/AddAndUpContact";
import useDisclose from "./useDisclose/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from "./components/NotFoundContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen} = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        onSnapshot(contactsRef,(snapshot)=>{
          const contactsList = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setContacts(contactsList);
          return contactsList
        })
      
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    getContacts();
  }, []);

  function filterContacts (e){
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");
    onSnapshot(contactsRef,(snapshot)=>{
      const contactsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredContacts = contactsList.filter((contact)=>(
        contact.name.toLowerCase().includes(value.toLowerCase())
      ))
      setContacts(filteredContacts);
      return filteredContacts;
    })
  }
  return (
    <>
      <div className="mx-auto max-w-[370px] px-5 py-4">
        <Nav />
        <section className="mt-2 flex h-[50px] items-center justify-center text-white">
          <div className="flex items-center justify-center w-full gap-4 p-1 border border-white rounded-xl">
            <FaSearch className="ml-2" />
            <input
            onChange={filterContacts}
              className="flex-1 bg-transparent outline-none"
              type="text"
              placeholder="Search Contacts"
            />
          </div>
          <FaPlusCircle onClick={onOpen} className="ml-4 cursor-pointer h-7 w-7" />
        </section>

        <section className="">
          { contacts.length <= 0 ? < NotFoundContact/> : contacts.map((contact) => (
           <ContactCard key={contact.id} contact={contact}/>
          ))}
        </section>

        <AddAndUpContact isOpen={isOpen} onClose={onClose} />
        <ToastContainer position="bottom-center"/>
        
      </div>
    </>
  );
}

export default App;
