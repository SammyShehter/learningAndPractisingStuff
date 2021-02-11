import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorHandler from '../errorHandler';
import Got_Service from '../services/fetch.js'
import {withRouter} from 'react-router-dom';



class ListComp extends Component {

    gotService = new Got_Service();


    state = {
        error: false
    }

    getData = (wantedComp) => {
        switch(wantedComp) {
            case 'characters':
                this.pageToCall = 5;
                return this.gotService.getAllChars;
            case 'books':
                this.pageToCall = 1;
                return this.gotService.getAllBooks;
            case 'houses':
                this.pageToCall = 1;
                return this.gotService.getAllHouses;
            default:
                return null;
        }
    }


    componentDidCatch() {
        this.setState({error:true});
    }


    render() { 

        if(this.state.error) {
            return <ErrorHandler />
        }
        

        return(
            <ItemList 
                getData={this.getData(this.props.wantedComp)}
                pageToCall={this.pageToCall}
                onitemListSelected={(itemId) => {
                    this.props.history.push(`${itemId}`);
                }} 
                renderName={item => `${item.name}`}
            />
        )
    }
}


export default withRouter(ListComp);