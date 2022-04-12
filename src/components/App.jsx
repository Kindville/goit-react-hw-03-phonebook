import { Component } from "react";
import { ContactForm } from "components/ContactForm"
import { ContactList } from "components/ContactList"
import { Filter } from "components/Filter"
import {Container} from "components/App.styled"
import { nanoid } from 'nanoid'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  } 
  componentDidMount() {
    const contacts =localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  addContact = ({ name, number }) => {
    const { contacts } = this.state
    const newContact = { id: nanoid(), name, number }
        
    contacts.some(contact => contact.name === name) ?
      alert(`${name} is already exist`) :
     
      this.setState(({ contacts }) => ({
        contacts: [newContact, ...contacts],
      })
      )
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getContacts();

    return (
      <Container>
        <h1>Phonebook</h1>

        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        {visibleContacts.length > 1 && (
          <Filter value={filter} changeFilter={this.changeFilter} />
        )}
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </Container>
    );
  }
}
