import './side_area.css'
import React, { useState } from 'react'
function QueueItem(props){

    const [active, setActive] = useState(props.active);
    const textExtraClass = active ? '' : 'queue_item_text_inactive'

    function toggleActive(){
        setActive(!active)
    }

    return(
    <li className={`queue_item ${textExtraClass}`} 
        key={props.identifier} 
        onClick={toggleActive}> 
        <span className='queue_item_text'>{props.name}</span>
    </li>);
}

export default QueueItem;