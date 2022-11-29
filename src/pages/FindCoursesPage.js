import React from 'react';
import DisplayCoursesTable from '../components/DisplayCoursesTable';

function FindCoursesPage() {

    const[lat, setLat] = React.useState('');
    const[lng, setLng] = React.useState('');
	const[isShowTable, setIsShowTable] = React.useState(false);


    function buttonClick() {
        setIsShowTable(true);
    }

    //lng = -118.09723
	//lat = 34.22977
    return (
        <>
        <div>
            <h1>Find Courses</h1>
            <br></br>
            <p>Enter your location to find nearby golf courses.</p>
            <br></br>
        </div>
        <form>
            <label>
                Latitude:</label>
            <input type="text" name="lat" value={lat} onChange={e => setLat(e.target.value)} />
            <label>
                &nbsp;Longitude:</label>
            <input type="text" name="lat" value={lng} onChange={e => setLng(e.target.value)} />
        </form>
        <br></br><button onClick={buttonClick}>Search</button>
        <br></br>
        {isShowTable && <DisplayCoursesTable lat={lat} lng={lng}/>}
        </>
    );
}

export default FindCoursesPage;