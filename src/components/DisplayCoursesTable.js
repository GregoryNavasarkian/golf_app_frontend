import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DisplayCoursesTable( {lat, lng} ) {
	const [courses, setCourses] = useState([]);

	const options = {
        method: 'GET',
        url: 'https://golf-course-finder.p.rapidapi.com/courses',
        params: {radius: '10', lat: lat, lng: lng},
        headers: {
          'X-RapidAPI-Key': 'cfe41879c5msh3ac43794f053255p1327ecjsn0aa5e3a5f2c1',
          'X-RapidAPI-Host': 'golf-course-finder.p.rapidapi.com'
        }
      };

	useEffect(() => {
		let mounted = true;
		axios.request(options)
		.then( res => {
			if(mounted) {
				setCourses(res.data.courses);
			}
		})
		.catch(function (error) {
			console.error(error);
		});
		return () => mounted = false;
	}, [lat, lng]);


	if (courses) {
		return (
			<>
			<div>
				<table>
					<thead>
						<tr>
							<th>Course Name</th>
							<th>Zip Code</th>
							<th>Distance</th>
						</tr>
					</thead>
					<tbody>
						{courses.map((course) => (
							<tr key={course.name}>
								<td>{course.name}</td>
								<td>{course.zip_code}</td>
								<td>{course.distance}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			</>
		);
	}
}

export default DisplayCoursesTable;