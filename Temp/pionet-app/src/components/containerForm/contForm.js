import React,{Component} from 'react';
import Pionet_Serv from '../services/fetch.js'

class SmsNotif extends Component {

    pionetServ = new Pionet_Serv();

    state = {
        contNum:this.props.contNum,
        phoneNum:0,
        weGood:false,
        errorMessage:''
    }

    numbChange = (e) => {
        this.setState({
            phoneNum: e.target.value
        })
    }

    onPhoneSubmit = async (e) => {
        e.preventDefault();
        if(this.state.phoneNum.length === 10){
            this.setState({weGood:true});
            const params = new URLSearchParams();
            params.append('PhoneNumber', `${this.state.phoneNum}`);
            await this.pionetServ.getNotif(this.state.contNum,params).then((body) => {console.log(body);})
            this.setState({message:'הודעה נשלחה'})
            
        }else{
            this.setState({weGood:true})
            this.setState({message:'אירעה שגיאה, נסה שוב'})
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.contNum !== this.state.contNum) {
          this.setState({weGood:false});
        }
      }

    render = () => {

        if(this.state.weGood){

            
            return(
                <div className="phoneNum">
                <form className="phoneNum__form flex " dir='rtl'  onSubmit={this.onPhoneSubmit} >
                    <p>אני מעוניין לקבל מסרון לנייד כאשר המכולה מגיעה</p>
                    <input placeholder='מספר נייד' type='number' onChange={this.numbChange}></input>
                    <p>{this.state.message}</p>
                    <button type='submit'>שלח</button>
                    
                </form>
                
                
                </div>
            )
        }

        return (
            <div className="phoneNum">
                <form className="phoneNum__form flex" dir='rtl'  onSubmit={this.onPhoneSubmit} >
                    <p>אני מעוניין לקבל מסרון לנייד כאשר המכולה מגיעה</p>
                    <input placeholder='מספר נייד' onChange={this.numbChange}></input>
                    <button type='submit'>שלח</button>
                </form>
            </div>
        )
    }

}


export default class ContForm extends Component {
    pionetServ = new Pionet_Serv();

    state = {
        contNum:null,
        itemList:{
            code:1,
            errorMessage:''
        },
    }

    textChange = (e) => {
        this.setState({
            contNum: e.target.value
        })
    }

    getInfo = (numStr) => {
        this.pionetServ.getContainer(numStr)
        .then((itemList) => {
            this.setState({itemList})
        })
        .catch(e => console.error(e))
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.getInfo(this.state.contNum);
    }

    toDateTime = (secs) => {
        let t = new Date(0);
        t.setSeconds(parseInt(secs));
        return t.toLocaleDateString('en-GB').replaceAll('/','.')
    }


    render = () => {

        const {code, errorMessage} = this.state.itemList;

        if(code !== 0){
            return(
                <>
                <div className='boxes flex'>
                    <div className='boxes__inst flex'>
                        <button className='iconInBox'>&#10229;</button>
                        <h4 className='textInBox'>חיפוש מספר התרה</h4>
                    </div>
                    <div className='boxes__inst flex'>
                        <button className='iconInBox'>&#10229;</button>
                        <h4 className='textInBox'>חיפוש מזהה עסקה</h4>
                    </div>
                    <div className='boxes__inst boxes__main'>
                        
                        <form className='formInBox flex'
                            onSubmit={this.onSubmit} 
                        >
                            <button className='iconInBox' type='submit'>&#10229;</button>
                            <input className='inputInBox' onChange={this.textChange}></input>
                        <h4 className='textInBox'>:מספר מכולה</h4>    
                        </form>
                    </div>
                </div>
                <div className='infoBox flex'>
                    <div className='infoBox__inst'>
                        <p><span>{errorMessage}</span>:מכולה מספר</p>
                        <p>:גודל</p>
                        <p>:סוג</p>
                        <p>:מצהר</p>
                    </div>
                    <div className='infoBox__inst'>
                        <p>:סוג טיפול</p>
                        <p>:מסוכן</p>
                        <p>:צפויה להגיע למוסף אשדוד/חיפה</p>
                        <p>:סטאטוס מכס</p>
                    </div>
                    
                </div>
                </>
            )
        }

        const {data} = this.state.itemList;
        const {containerID, size, treatment, dangerous, type, dueDate, customsStatus, manifest} = data;
        

        return (
            <>
                <div className='boxes flex'>
                    <div className='boxes__inst flex'>
                        <button className='iconInBox'>&#10229;</button>
                        <h4 className='textInBox'>חיפוש מספר התרה</h4>
                    </div>
                    <div className='boxes__inst flex'>
                        <button className='iconInBox'>&#10229;</button>
                        <h4 className='textInBox'>חיפוש מזהה עסקה</h4>
                    </div>
                    <div className='boxes__inst boxes__main'>
                        
                        <form className='formInBox flex'
                            onSubmit={this.onSubmit} 
                        >
                            <button className='iconInBox' type='submit'>&#10229;</button>
                            <input className='inputInBox' onChange={this.textChange}></input>
                        <h4 className='textInBox'>:מספר מכולה</h4>    
                        </form>
                    </div>
                </div>
                    <div className='infoBox flex'>
                            <div className='infoBox__inst'>
                                <p><span>{containerID}</span> :מכולה מספר</p>
                                <p><span>{size}</span> :גודל</p>
                                <p>סוג: <span>{type}</span></p>
                                <p>מצהר: <span>{manifest}</span></p>
                            </div>
                            <div className='infoBox__inst'>
                                <p>סוג טיפול: <span>{treatment}</span></p>
                                <p>מסוכן: <span>{dangerous}</span></p>
                                <p>צפויה להגיע למוסף אשדוד/חיפה: <span>{this.toDateTime(dueDate)}</span></p>
                                <p>סטאטוס מכס: <span>{customsStatus}</span></p>
                            </div>
                            <SmsNotif contNum={this.state.contNum} />
                    </div>
                        
            </>
        )
    }
}