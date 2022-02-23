// app.js'de import ettik //
import { useState, useEffect } from 'react'

import "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {

    // kayıtlarımızın ekleneceği state //
    const [contacts, setContacts] = useState([
        {
            fullname: "Mehmet",
            phone_number:"123123"
        },
        {
            fullname: "Ahmet",
            phone_number:"456456"
        },
        {
            fullname: "Nazlı",
            phone_number:"789789"
        }
    ])

    // contacts'e atama yapıldığında son güncel halini görmeye çalışalım //
    useEffect(() => {
        console.log(contacts)
    }, [contacts])


    return (
        <div id='container'>
            <h1>CONTACTS</h1>
            {/* contacts={contacts} = eklenen kayıtları prop olarak gönderme */}
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} /> 
        </div>
    )
}

export default Contacts