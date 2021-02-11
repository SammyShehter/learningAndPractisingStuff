import React, { Component } from 'react';

export default class PostAddForm extends Component{

    constructor(props){
        super(props);
        this.state = {
            text:''
        }

    }



    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        if(this.state.text === ''){
            e.preventDefault();
            return false;
        }
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text:''
        })
    }

    render(){
        return (
            <form 
                className="bottomPanel"
                onSubmit={this.onSubmit}    
            >
                <div className="d-flex">
                    <input
                        type="text"
                        placeholder="What's on your mind?"
                        className="form-control new-post-lable"
                        onChange={this.textChange}
                        value={this.state.text}
                    />
                    <button
                        type="submit"
                        className="btn-outline-secondary"
                    >
                        Add Post
                    </button>
                </div>
            </form>
        )
    }

}

