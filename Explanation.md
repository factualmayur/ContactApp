1. I've used Firebase for backend services by registering and creating a database on the Firebase website.  
2. All Firebase configurations and functionalities, such as `db` and `updateDocs`, are stored in a `config` folder for easy access.  
3. I created a custom hook containing states: `{isOpen, onOpen, onClose}`.  
4. In `App.jsx`, I've imported and used `Nav.jsx`, a simple navbar with React Icons.  
5. An asynchronous function, `getContacts`, fetches contact data from the Firebase collection.  
6. `onSnapshot` is a Firebase feature that dynamically updates components when data changes.  
7. `filterContacts` filters the contact list based on search input, matching names in the list.  
8. `ContactCard` is a component that displays contact information using the `mcontacts` prop, showing details like name, email, and phone number.  
9. The `Modal` component from Chakra UI is used to render a card on clicking the "+" button. It includes `AddAndUpContacts`, has a backdrop blur, and is rendered in a separate HTML `root` to avoid CSS conflicts.  
10. `AddAndUpContacts` is imported with props: `contact`, `isOpen`, `onClose`, and `isUpdated`.  
11. In `AddAndUpContacts`, Yup validation ensures that users don’t submit empty information. A schema, `contactsSchemaValidation`, is declared for this purpose.  
12. The function `addContact` uses `addDoc` to add new contacts.  
13. `updateContact` updates existing contacts using their `id`.  
14. `Formik` and `Modal` are imported to manage form states and interactions.  
15. `Formik` initializes values based on whether `isUpdated` is `false` (new contact) or `true` (update existing contact). The `onSubmit` function toggles between adding and updating based on the `updateContact` boolean.  
16. Labels and input fields (`Field`) are set up within the `Formik` form.  
17. `NotFoundContacts` is displayed when the contact list length is zero; otherwise, `ContactCard` components are shown.  
18. A `toastContainer` is imported at the end of `App.jsx` and triggers notifications when contacts are added, updated, or deleted. It includes a `position` function to set the toast’s placement.