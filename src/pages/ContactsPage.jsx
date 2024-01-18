// import React from 'react'

import Contacts from "../components/Contacts"
import ContactsHeader from "../components/ContactsHeader"
import ContactsLocation from "../components/ContactsLocation"

const ContactsPage = () => {
  return (
    <>
     <ContactsHeader/>
     <ContactsLocation/> 
     <Contacts/>
    </>
  )
}

export default ContactsPage
