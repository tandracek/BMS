import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Route, Redirect } from 'react-router-dom';
import PropsRoute from './propsroute.js';
import Loading from './loading';
import PersonList from './personlist';
import '../css/title.css';

const getTitleData = function (title) {
    const data = {
        title: "Back to the Future",
        descr: "Outtatime",
        image: "image.jpg",
        crew: [
            {
                id: 1,
                name: "Robert Zemeckis",
                role: "Director",
                image: "img"
            }
        ],
        cast: [
            {
                id: 1,
                name: "Michael J. Fox",
                role: "Marty McFly"
            },
            {
                id: 2,
                name: "Christopher Lloyd",
                role: "Doc Brown"
            }
        ]
    }
    return Promise.resolve(data);
}

const PersonTypes = {
    CAST: 'cast',
    CREW: 'crew'
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
        this.url = this.props.match.url;
        this.castPath = `${this.url}/cast`;
        this.crewPath = `${this.url}/crew`;
    }
    handleMoreClick = (type) => {
        this.props.history.push(`${this.props.match.url}/${type}`);
    }
    componentDidMount() {
        console.log('component mounting');
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
        return React.createElement(Title, { loading: this.state.loading, data: this.state.data, onMoreClick: this.handleMoreClick, url: this.url,
            castPath: this.castPath, crewPath: this.crewPath });
    }
}

const Title = ({ data, loading, onMoreClick, url, castPath, crewPath }) => {
    return (
        <div className="container">
            <Loading isLoading={loading} />
            { /*<CSSTransitionGroup 
                transitionName="title"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <Page onMoreClick={ onMoreClick } data={ data } />
            </CSSTransitionGroup>*/ }

            <PropsRoute exact path={url} component={TitleMain} data={data} onMoreClick={onMoreClick} />
            <PropsRoute path={castPath} component={Cast} data={data} />
            <PropsRoute path={crewPath} component={Crew} data={data} />
        </div>
    )
}

const Crew = ({ data }) => {
    return (
        <div>
            Crew
            <PersonList persons={data.crew} />
        </div>
    )
}

const Cast = ({ data }) => {
    return (
        <div>
            Cast
            <PersonList persons={data.cast} />
        </div>
    )
}

const TitleMain = ({ onMoreClick, data}) => {
    return (
        <div>
            <div className="row title-header">
                <div className="three columns title-image">{data.image}</div>
                <div className="nine columns">
                    <h3>{data.title}</h3>
                    <div>{data.descr}</div>
                </div>
            </div>
            <div className="title-crew">
                <h5 className="title-crew-heading">Crew</h5>
                <PersonList persons={data.crew || []} limit={3} />
                <button onClick={() => onMoreClick(PersonTypes.CREW)} className="title-more">More</button>
            </div>
            <div className="title-cast">
                <h5 className="title-cast-heading">Cast</h5>
                <PersonList persons={data.cast || []} limit={5}/>
                <button onClick={() => onMoreClick(PersonTypes.CAST)} className="title-more">More</button>
            </div>
        </div>
    )
}