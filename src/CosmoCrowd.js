import './CosmoCrowd.css';
import Banner from './banner/banner'
import MainArea from './main_area/MainArea';
function CosmoCrowd(){
  return(
    <div className={'CosmoCrowdRoot'}>
      <Banner />
      <MainArea />
    </div>
  );
}

export default CosmoCrowd;
