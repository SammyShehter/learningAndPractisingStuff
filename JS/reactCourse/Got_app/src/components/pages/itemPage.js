import React, {Component} from 'react';
import {ItemDetails,Field} from '../itemDetails'
import Got_Service from '../services/fetch.js'

class ItemPage extends Component {

    gotService = new Got_Service();

    getItem = (wantedItem) => {
        switch(wantedItem) {
            case 'character':
                this.fields = [
                    <Field key='born' label='Born' field='born'/>,
                    <Field key='gender' label='Gender' field='gender'/>,
                    <Field key='died' label='Died' field='died'/>,
                    <Field key='culture' label='Culture' field='culture'/>
                ]
                return this.gotService.getChar;
            case 'house':
                this.fields = [
                    <Field key='region' label='Religion' field='region'/>,
                    <Field key='words' label='Words' field='words'/>,
                    <Field key='coatOfArms' label='Coat Of Arms' field='coatOfArms'/>
                ]
                return this.gotService.getHouse;
            case 'book':
                this.fields = [
                    <Field key='authors' label='Authors' field='authors'/>,
                    <Field key='numberOfPages' label='Pages' field='numberOfPages'/>,
                    <Field key='publisher' label='Publisher' field='publisher'/>,
                    <Field key='country' label='Country' field='country'/>
                ]
                return this.gotService.getBook;    
            default: 
                return null;
        }
    }

    render() {
        return(
            <ItemDetails getItem={this.getItem(this.props.wantedItem)} itemId={this.props.itemId}>
                {this.fields}
            </ItemDetails>
        )
    }
}

export {ItemPage}