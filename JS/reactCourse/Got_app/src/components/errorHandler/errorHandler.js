import React from 'react';
import './errorHandler.css';
import img from './error.jpg';

const ErrorHandler = () => {
    return (
        <>
        <img className='errorImg' src={img} alt='эээ'></img>
        <center><span>Something went wrong. Please try later</span></center>
        </>
    )
}

export default ErrorHandler;

