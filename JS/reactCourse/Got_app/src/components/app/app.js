import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import {ListComp, ItemPage} from '../pages'
import ListAndDeatailComp from '../listAndDetailComp';
import RandomChar from '../randomChar';
import Got_Service from '../services/fetch.js'
import { BrowserRouter as Router, Route} from "react-router-dom";






export default class App extends Component {

    gotService = new Got_Service();

    state = {
        randChar: true,
    }

    randCharStateChanger = () => {
        this.setState({randChar: !this.state.randChar})
    }


    render(){

        const {randChar} = this.state;

        const randCharBox = randChar ? <RandomChar/> : null;

        return(
        <Router>
            
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randCharBox}
                            <Button color="secondary" onClick={this.randCharStateChanger}>Rand Character Box</Button>
                        </Col>
                    </Row>
                    <Route exact path='/characters/' render={ () => <ListComp wantedComp='characters'/>}/>
                    <Route exact path='/books/' render={ () => <ListComp wantedComp='books'/>}/>
                    <Route exact path='/houses/' render={ () => <ListComp wantedComp='houses'/>}/>
                    <Route exact path='/books/:id' render={
                        ({match}) => {
                            return <ItemPage itemId={match.params.id} wantedItem='book'/>}
                        }/>
                    <Route exact path='/houses/:id' render={
                        ({match}) => {
                            return <ItemPage itemId={match.params.id} wantedItem='house'/>}
                        }/>
                    <Route exact path='/characters/:id' render={
                        ({match}) => {
                            return <ItemPage itemId={match.params.id} wantedItem='character'/>}
                        }/>
                    <Route exact path='/test/' render={() => <ListAndDeatailComp itemNeeded='characters' />}/>
                </Container>
            
        </Router>
        );
    };
};

