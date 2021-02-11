import React from 'react';
import ContForm from '../containerForm';
import Header from '../header';
import { HashRouter as Router, Route} from "react-router-dom";
import './app.scss'


 const App = () => {

    const Welcome = () => {
        return(
            <div className='welcomeBan flex'>
                <h3>ברוכים הבאים</h3>
                <h2>לחברה פיקטיבית</h2>
                <hr></hr>
                <p>טקסט על התמונות סליידר כאופציהטקסט על התמונות סליידר כאופציהטקסט על התמונות סליידר כאופציהטקסט על התמונות סליידר כאופציהטקסט על התמונות סליידר כאופציהטקסט על התמונות סליידר כאופציהטקסט על התמונות סליידר כאופציה</p>
            </div>
        )
    }

    const About = () => {
        return (
            <div className='boxes flex'>
                <div className='boxes__inst flex'>
                    <button className='iconInBox'>&#10229;</button>
                    <h4 className='textInBox'>חיפוש מספר התרה</h4>
                </div>
                <div className='boxes__inst flex'>
                    <button className='iconInBox'>&#10229;</button>
                    <h4 className='textInBox'>חיפוש מזהה עסקה</h4>
                </div>
                <div className='boxes__inst flex'>
                    <button className='iconInBox'>&#10229;</button>
                    <h4 className='textInBox'>חיפוש מזהה עסקה</h4>
                </div>
            </div>
        )
    }

    return(
        <Router>
            <Header/>
                <Route exact path='/' render={ () => <><ContForm/> <Welcome/></>} />
                <Route exact path='/about' render={ () => <><About/> <Welcome/></>} />
        </Router>
    )

}

export default App;