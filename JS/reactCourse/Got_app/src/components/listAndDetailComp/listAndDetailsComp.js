import React, {Component} from 'react';
import './listAndDetailsComp.css'
import RowBlock from '../rowBlock'
import ItemList from '../itemList';
import {ItemDetails,Field} from '../itemDetails';
import ErrorHandler from '../errorHandler';
import Got_Service from '../services/fetch.js'



export default class ListAndDetailsComp extends Component {

    gotService = new Got_Service();


    state = {
        selectedItem: null,
        error: false
    }

    
    onitemListSelected = (id) => {
        this.setState({
            selectedItem: id
        });
    }

    componentDidCatch() {
        this.setState({error:true});
    }

    pageToCall = null;
    getItem = null;
    fields = [];

    getData = (item) => {
        switch(item) {
            case 'characters':
                this.pageToCall = 5;
                this.getItem = this.gotService.getChar
                this.fields = [
                    <Field key='born' label='Born' field='born'/>,
                    <Field key='gender' label='Gender' field='gender'/>,
                    <Field key='died' label='Died' field='died'/>,
                    <Field key='culture' label='Culture' field='culture'/>
                ]
                return this.gotService.getAllChars;
            case 'books':
                this.pageToCall = 1;
                this.getItem = this.gotService.getBook
                this.fields = [
                    <Field key='authors' label='Authors' field='authors'/>,
                    <Field key='numberOfPages' label='Pages' field='numberOfPages'/>,
                    <Field key='publisher' label='Publisher' field='publisher'/>,
                    <Field key='country' label='Country' field='country'/>
                ]
                return this.gotService.getAllBooks;
            case 'houses':
                this.pageToCall = 1;
                this.getItem = this.gotService.getHouse
                this.fields = [
                    <Field key='region' label='Religion' field='region'/>,
                    <Field key='words' label='Words' field='words'/>,
                    <Field key='coatOfArms' label='Coat Of Arms' field='coatOfArms'/>
                ]
                return this.gotService.getAllHouses;
            default:
                return null;
        }
    }

    

    render() { 

        if(this.state.error) {
            return <ErrorHandler />
        }

        const itemList = (
                <ItemList 
                        getData={this.getData(this.props.itemNeeded)}
                        pageToCall={this.pageToCall}
                        onitemListSelected={this.onitemListSelected} 
                        renderName={item => `${item.name}`}

                    />
            )
        

        const itemDetails =  (
                <ItemDetails getItem={this.getItem} itemId={this.state.selectedItem}>
                    {this.fields}
                </ItemDetails>

            )
        

        return(
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}


