import {useParams} from 'react-router-dom';
import SearchResultsRow from './SearchResultsRow';
const SearchResults = ({houses}) => {


    // Need to filter the houses based on county
        //for this I need to get the county from the location bar ,
            // I need to use useParams and get the county, filter houses
   

    let {county} = useParams();
    let filteredHouses = houses.filter((elem) => elem.county === county);
    console.log(filteredHouses);
    return (  
        <div>
            
            <div className="table-responsive">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th scope="col">Address</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        filteredHouses.map((elem) => {
                          return <SearchResultsRow house={elem}/>
                        })
                        }                        
                        
                    </tbody>
                </table>
            </div>
            

        </div>
    );
}
 
export default SearchResults;