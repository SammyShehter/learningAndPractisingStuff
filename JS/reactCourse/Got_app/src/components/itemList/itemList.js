import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../spinner';


function ItemList({getData, pageToCall,onitemListSelected,renderName}){

    const [itemList, updateList] = useState(null);

    useEffect(() => {
        getData(pageToCall)
            .then((data) => {
                updateList(data)   
            })
            .catch((err) => console.error(err));
    }, [])

    function rightIndexOfChar(index) {
        return index * 10 - 9 
    }

    function renderItems(arr) {
        
            return arr.map((item,i) => {
                const label = renderName(item)
                return( 
                    <li 
                        className="list-group-item"
                        key={`key-${i}`}
                        onClick={ () => {onitemListSelected(i + rightIndexOfChar(pageToCall))}}
                    >
                        {label}
                    </li>
                )
        })
    }








        if(!itemList){
            return <Spinner/>
        }

        const items = renderItems(itemList);       

        return(
            <ul className="item-list list-group">
                {items}
            </ul>
        )
}

export default ItemList;