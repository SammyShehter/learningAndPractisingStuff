import React, {Component} from 'react';
import './itemDetails.css';
import Spinner from '../spinner';

const Field = ({item,label, field}) => { 
        return (
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">{label}</span>
                <span>{item[field]}</span>
            </li>
        )
    }



class ItemDetails extends Component {

    state = {
        item: null,
        error:false,
    }


    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {getItem,itemId} = this.props;
        
        if(!itemId) {
            return;
        }
        getItem(itemId)
            .then(item => this.setState({item}))
    }
    
    

    render() {

        // if(!this.state.item) {
        //     return <span class="select-error">Please select the character</span>
        // }

        if(!this.state.item) {
            return <Spinner/>
        }


        const {item} = this.state


        return (
            
            <div className="char-details rounded">
                <h4>{item.name}</h4>
                <ul className="list-group list-group-flush">
                    {
                    React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, {item})
                    })
                    }
                </ul>
            </div>
        );
    }
}

export {ItemDetails, Field}