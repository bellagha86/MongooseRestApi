import React, { Component } from 'react'
import ContactList from './Components/ContactList'
import AddContact from './Components/AddContact'

class App extends Component {
  render() {
    return (
      <div>
        <AddContact/>
        <ContactList/>
        
      </div>
    )
  }
}
export default App