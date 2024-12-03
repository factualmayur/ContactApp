import React from 'react'

function NotFoundContact() {
  return (
    <div className='flex items-center h-[60vh] gap-5 m-3 text-2xl text-white'>
      <img src="/Nocontact.svg" alt="No Contacts Found" />
      <h1>Contacts Not Found</h1>
    </div>
  )
}

export default NotFoundContact
