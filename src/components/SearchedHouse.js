import {useParams} from 'react-router-dom'; 
// useParams hook that returns an object of key/value pair from the component rendered by matching route
import Inquiry from './Inquiry';
const SearchedHouse = (props) => {

    let {id} = useParams();    
    // const myhouses = props.houses;
    if (props.houses.length === 0) {
        return <p>Loading...</p>;
    }
    let house = props.houses.find(elem=>elem._id ==id);
    console.log('SearchedHouse',id,house);
    console.log();

return (      
    <div>
        <div className="row">
            <div className="col-sm-12">
                <h3 className="bg-secondary"> Searched House</h3>
            </div>
        </div>
       
        <div className="row float-start">
            <div className="col-sm-12">
               <h4> County: {house.county}  </h4>
            </div>
        </div>
       
        <div className="row">
            <div className="col-sm-12">
            <h4> Address: {house.address}</h4>
            </div>
        </div>
       
        <div className="row">
            <div className="col-sm-7">
                <img className="w-100" src={`../images/${house.photo}`} alt="house here" />
            </div>
            <div className="col-sm-5">
            <h4> Price: USD  {house.price}</h4>
            { (localStorage.getItem('name')) &&
                <Inquiry/>
            }
            </div>
        </div>
    </div>
 );
}
 
export default SearchedHouse;