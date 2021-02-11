import React, { Component } from 'react';

export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: ''
        }
        this.buttons = [
            {name: 'all', label: 'All posts'},
            {name: 'liked', label: 'Liked posts'}
        ]
    }
    render() {

        const {filter,onFilterSelect} = this.props;

        const buttons = this.buttons.map(({name,label}) => {

            const active = filter === name;
            const buttonClass = active ? 'btn-info' : 'btn-outline-secondary';

            return (
                <button 
                    key={name} type="button" className={`btn ${buttonClass}`}
                    onClick={() => {onFilterSelect(name)}}    
                >{label}</button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}
