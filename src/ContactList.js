import React, { Component } from 'react';
import ContactItem from './ContactItem';
import contactsData from './contacts.json'

class ContactList extends Component {
    state = {
        contactArr: contactsData.slice(0, 5),
        randomArr: contactsData.slice(5),
        fromAtoZ: true,
    }
    addRandom = () => {
        let randomItem = Math.floor(Math.random() * this.state.randomArr.length)
        let newArr = this.state.contactArr.slice()
        newArr.unshift(this.state.randomArr[randomItem])
        let newRandomArr = this.state.randomArr.slice()
        newRandomArr.splice(randomItem, 1)
        this.setState({ randomArr: newRandomArr });
        this.setState({ contactArr: newArr });
    }
    handleSort = () => {
        if (this.state.fromAtoZ) {
            const newArr = this.state.contactArr.slice()
            newArr.sort((elt1, elt2) => {
                let a = elt1.name.toUpperCase()
                let b = elt2.name.toUpperCase()
                if (a < b) {
                    return 1
                } else if (a > b) {
                    return -1
                } else {
                    return 0
                }
            })
            this.setState({ contactArr: newArr });
            this.setState({ fromAtoZ: !this.state.fromAtoZ });
        } else {
            const newArr = this.state.contactArr.slice()
            newArr.sort((elt1, elt2) => {
                let a = elt1.name.toUpperCase()
                let b = elt2.name.toUpperCase()
                if (a < b) {
                    return -1
                } else if (a > b) {
                    return 1
                } else {
                    return 0
                }
            })
            this.setState({ contactArr: newArr });
            this.setState({ fromAtoZ: !this.state.fromAtoZ });
        }
    }
    deleteContact = (popularity) => {
        console.log(popularity)
        const newArr = this.state.contactArr.filter(contact => contact.popularity !== popularity)
        this.setState({ contactArr: newArr });
    }

    render() {
        return (
            <section id="contact-list">
                <input type="button" className="btn" value="Add random contact" onClick={this.addRandom} />
                <input type="button" className="btn" value="Sort By Name" onClick={this.handleSort} />
                <div>
                    <h3>Picture</h3>
                    <h3>Name</h3>
                    <h3>Popularity</h3>
                    <h3></h3>
                </div>

                {this.state.contactArr.map((contact, i) =>
                    <ContactItem
                        key={i}
                        pictureUrl={contact.pictureUrl}
                        name={contact.name}
                        popularity={contact.popularity}
                        deleteContact={this.deleteContact}
                    />
                )}
            </section>
        );
    }
}

export default ContactList;