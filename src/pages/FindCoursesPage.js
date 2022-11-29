import React from 'react';
import DisplayCoursesTable from '../components/DisplayCoursesTable';
import Geocode from "react-geocode";
Geocode.setLanguage("en");

function FindCoursesPage() {

    const[lat, setLat] = React.useState('34.22977');
    const[lng, setLng] = React.useState('-118.09723');
	const[zipCode, setZipCode] = React.useState('91208');
	const[isShowTable, setIsShowTable] = React.useState(false);


    function buttonClick() {
		Geocode.fromAddress().then(
			response => {
				const { lat, lng } = response.results[0].geometry.location;
				console.log(lat, lng);
				setLat(lat);
				setLng(lng);
			},
			error => {
				console.error(error);
			}
		);
        setIsShowTable(true);
    }

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
                ZipCode: </label>
            <input type="text" name="zip" value={zipCode} onChange={e => setZipCode(e.target.value)} />
        </form>
        <br></br><button onClick={buttonClick}>Search</button>
        <br></br>
        {isShowTable && <DisplayCoursesTable lat={lat} lng={lng}/>}
        </>
    );
}

export default FindCoursesPage;