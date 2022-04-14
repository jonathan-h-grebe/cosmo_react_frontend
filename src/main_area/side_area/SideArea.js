import React, { useState } from 'react'
import QueueItem from './QueueItem'
function SideArea(){
    const [queues, setQueues] = useState(
        [{name: 'applications', active: true},
         {name: 'permission', active: true},
         {name: 'residence cards', active: false},
         {name: 'consultations', active: false},
         {name: 'permanent residents', active: false},
         {name: 'others', active: false}
        ]);

    function createQueueElement(queue_item, index){
        return(
             <QueueItem name={queue_item.name} identifier={index} active={queue_item.active}/>
        );
    }

    return(
        <div style={{"flexGrow": "1","height": "100%", "backgroundColor": "aliceblue", "marginRight": "10px"} }>
            <ul style={{"height": "100%", "padding": "0"}}>

             {queues.map(createQueueElement)}

            </ul>
        </div>
    );
}

export default SideArea;