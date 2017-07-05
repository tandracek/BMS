import React, { Component } from 'react';
import '../css/personlist.css';

export default ({ persons, limit }) => {
    let i = 0;
    if (limit > 0) {
        persons = persons.slice(0, limit);
    }
    return (
        <div className="row">
            { persons.map(p => <Person key={i++} person={p} />) }
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