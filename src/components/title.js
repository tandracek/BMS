import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group';
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
                name: "Robert Zemeckis",
                role: "Director",
                image: "img"
            }
        ],
        cast: [
            {
                name: "Michael J. Fox",
                role: "Marty McFly"
            },
            {
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
            },
            page: TitleMain
        }
    }
    handleMoreClick = (type) => {

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
        return React.createElement(Title, { loading: this.state.loading, data: this.state.data, onMoreClick: this.handleMoreClick, page: this.state.page });
    }
}

const Title = ({ data, loading, onMoreClick, page }) => {
    return (
        <div className="container">
            <Loading isLoading={loading} />
            <ReactCSSTransitionGroup>
                <page onMoreClick={ onMoreClick } data={ data } />
            </ReactCSSTransitionGroup>
        </div>
    )
}

const TitlePersons = () => {
    return (
        <div>
            Cast or Crew
        </div>
    )
}

const TitleMain = () => {
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
                <PersonList persons={data.crew || []} />
                <button onClick={() => onMoreClick(PersonTypes.CREW)} className="title-more">More</button>
            </div>
            <div className="title-cast">
                <h5 className="title-cast-heading">Cast</h5>
                <PersonList persons={data.cast || []} />
                <button onClick={() => onMoreClick(PersonTypes.CAST)} className="title-more">More</button>
            </div>
        </div>
    )
}