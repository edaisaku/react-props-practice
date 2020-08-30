import React from "react"
import Card from "../components/Card"
import contacts from "../contacts"
import Avatar from "../components/Avatar"

function createCard(contacts){
  return <Card 
    id={contacts.id}
    key={contacts.id}
    name={contacts.name}
    img={contacts.imgURL}
    number={contacts.phone}
    mail={contacts.email}
  />
  }

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar 
      img= "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      {contacts.map(createCard)}
    </div>
  )
}

export default App;
