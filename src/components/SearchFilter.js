import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

const SearchFilter = ({houses}) => {
    // iterate through the county values inhouses
    // return all county
    //store them in a set , to remove duplicates
    //create an array out of it
    //use that in the select field to display options
    let myhouses = houses;
    let counties = Array.from(new Set(myhouses.map((elem) => elem.county)));
    counties.unshift("-");
    console.log('houses',houses.length,houses);
    console.log('counties',counties.length,counties);
    let navigate = useNavigate();

    let changeHandler = (e) => {
        let county = e.target.value;
        console.log("change handler" + county);
        if (county=='-')
            navigate("/");
        else
            navigate(`searchresults/${county}`);
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-12">
                    Search By County
                    <select onChange={changeHandler} >                        
                        {
                            counties.map((elem,index)=> {
                                console.log(index,elem);
                                return (
                                    <option key={index} value={elem}> {elem} </option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
        </div>
     );
}
 
export default SearchFilter ;
