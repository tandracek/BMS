import React, { Component } from 'react';
import '../css/personlist.css';

export default ({ persons }) => {
    return (
        <div className="row">
            { persons.map(p => <Person person={p} />) }
        </div>
    )
}

const Person = ({ person }) => {
    return (
        <div className="twelve columns personlist-person">
            <div className="personlist-person-image">{ person.image }</div>
            <div className="personlist-person-main">
                <div>{ person.name }</div>
                <div>{ person.role }</div>
            </div>
        </div>
    )
}