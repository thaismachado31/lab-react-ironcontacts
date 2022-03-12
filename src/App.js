import './App.css';
import contactsList from "./contacts.json";
import { useState } from "react";

function App() {
  const clone = [...contactsList]
  let firstContacts = clone.splice(0,5)
  const [contacts, setContacts] = useState([...firstContacts])
  let cloneContact = [...contacts]
  

  function handleAddClick(event) {
    let randomSelection = Math.floor(Math.random()* (clone.length));
    let newContact= clone[randomSelection]
    clone.splice(randomSelection, 1)
    cloneContact.push(newContact)
    return setContacts(cloneContact)
  }

  function sortPopularity() {
    cloneContact.sort((a,b)=> (b.popularity - a.popularity))
    return setContacts(cloneContact)
  }

  function sortName() {
    cloneContact.sort((a,b)=> (a.name.localeCompare(b.name)))
    return setContacts(cloneContact)
  }

  function removeContact(index) {
    cloneContact.splice(index, 1)
    return setContacts(cloneContact)
  }
  



  return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className='btnContacts'>
          <button onClick={handleAddClick}>Add Random Contact</button>
          <button onClick={sortPopularity}>Sort by popularity</button>
          <button onClick={sortName}>Sort by name</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won Oscars</th>
              <th>Won Emmy</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((currentContact, index) => {
              const wonOscar = currentContact.wonOscar ? "🏆" : null;
              const wonEmmy = currentContact.wonEmmy ? "🌟" : null;
              return (
              <tr key={index}>
                <th>
                <img className="imgProfile"src={currentContact.pictureUrl} alt={currentContact.name}/>
                </th>
                <th>{currentContact.name}</th>
                <th>{(Math.round(currentContact.popularity*100)/100).toFixed(2)}</th>
                <th>{wonOscar}</th>
                <th>{wonEmmy}</th>
                <th>
                  <button onClick={() => removeContact(index)}>delete</button>
                </th>
              </tr>
            )})}
          </tbody>
        </table>  
      </div>
  )
}

export default App;
