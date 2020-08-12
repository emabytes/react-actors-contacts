import React from 'react';

const ContactItem = (props) => {
    return (
        <article id="contact-item">
            <img src={props.pictureUrl} alt="photo" />
            <h4>{props.name}</h4>
            <h4>{props.popularity.toFixed(2)}</h4>
            <input className="delete-btn btn" type="button" value="delete" onClick={() => props.deleteContact(props.popularity)} />
        </article>);
}

export default ContactItem;