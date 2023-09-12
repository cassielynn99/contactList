import { useState } from "react";
import ContactList from "./ContactList";
import React from "react";

function ContactRow({ contact, setSelectedContactId }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}

export default ContactRow;
