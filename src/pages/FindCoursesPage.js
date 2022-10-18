import React from 'react';
import DisplayCoursesTable from '../components/DisplayCoursesTable';

function FindCoursesPage() {

    const[lat, setLat] = React.useState('34.22977');
    const[lng, setLng] = React.useState('-118.09723');


    function buttonClick() {
        return(< DisplayCoursesTable lat={lat} lng={lng} />);
    }

    
    return (
        <>
        <div>
            <h1>Find Courses</h1>
            <br></br>
            <p>Enter your location to find nearby golf courses.</p>
            <br></br>


            {/* <button onClick={buttonClick}>Get Course</button> */}
        </div>
        <form>
            <label>
                Latitude:</label>
            <input type="text" name="lat" value={lat} onChange={e => setLat(e.target.value)} />
            <label>
                &nbsp;Longitude:</label>
            <input type="text" name="lat" value={lat} onChange={e => setLat(e.target.value)} />
            
        </form>
        <br></br><button onClick={buttonClick}>Search</button>
        <br></br>
        <DisplayCoursesTable lat={lat} lng={lng}/>
        </>
    );
}

export default FindCoursesPage;