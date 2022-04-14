import SideArea from './side_area/SideArea';
import GraphArea from './graph_area/GraphArea';

function MainArea(){
    return(
        <div style={{"height": "100%", "display": "flex", "justifyContent" : "space-between"}}>
            <SideArea />
            <GraphArea />
        </div>
    );
}

export default MainArea;