import React, {Component} from 'react';
import './randomChar.css';
import Got_Service from '../services/fetch.js'
import Spinner from '../spinner';
import ErrorHandler from '../errorHandler'


export default class RandomChar extends Component {


    gotService = new Got_Service();

    componentDidMount(){
        this.updateChar();
        this.charUpdateInterval = setInterval(this.updateChar,this.props.interval)
    }

    static defaultProps = {
        interval: 4000
    }    
    

    componentWillUnmount() {
        clearInterval(this.charUpdateInterval)
    }

    state = {
        char : {},
        loading: true,
        error: false
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
        console.log(err);
    }

    updateChar = () => {

        const number = Math.floor(Math.random()*50 + 100);
        // const number = 1300000;

        this.gotService.getChar(number)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {

        const {char, loading, error} = this.state;

        const errorOccured = error ? <ErrorHandler /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ?<View char={char} /> : null;

        return (
            <div className="random-block rounded">
                {errorOccured}
                {spinner}
                {content}
            </div>
        );
    }
}


const View = ({char}) => {

    const {name, gender, born, died, culture} = char;


    return (

        <>
        <h4>Random Character: {name}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{born}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{died}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{culture}</span>
            </li>
        </ul>
        </>
    )
}
