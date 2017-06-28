import React, { Component } from 'react';
import Loading from './loading';
import '../css/title.css';

const getTitleData = function(title) {
    const data = {
        title: "Back to the Future",
        descr: "Outtatime",
        image: "image.jpg",
        crew: [
            {
                name: "Robert Zemeckis",
                job: "Director",
                image: "img"
            }
        ]
    }
    return Promise.resolve(data);
}

export default class TitleContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: {
                crew: []
            }
        }
    }
    componentDidMount() {
        getTitleData(this.state.title).then((data) => {
            this.setState({
                data: data,
                loading: false
            });
        }).catch((err) => {
            this.setState({
                loading: false
            });
            alert('Caught ' + err.toString());
        });
    }
    render() {
        return React.createElement(Title, { loading: this.state.loading, data: this.state.data });
    }
}

const Title = ({ data, loading }) => {
    return (
        <div className="container">
            <Loading isLoading={loading} />
            <div className="row title-header"> 
                <div className="three columns title-image">{ data.image }</div>
                <div className="nine columns">
                    <h3>{ data.title }</h3>
                    <div>{ data.descr }</div>
                </div>
            </div>
            <div className="title-crew">
                <h5 className="title-crew-heading">Crew</h5>
                <PersonList persons={data.crew} />
            </div>
        </div>
    )
}

const PersonList = ({ persons }) => {
    return (
        <div className="row">
            { persons ? persons.map(p => <Person person={p} />) : null }
        </div>
    )
}

const Person = ({ person }) => {
    return (
        <div className="twelve columns title-person">
            <div className="title-person-image">{ person.image }</div>
            <div className="title-person-main">
                <div>{ person.name }</div>
                <div>{ person.job }</div>
            </div>
        </div>
    )
}