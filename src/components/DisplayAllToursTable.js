import React, {useState, useEffect} from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';

function DisplayAllToursTable() {
	const [allTours, setAllTours] = useState([]);

	const options = {
        method: 'GET',
        url: 'http://localhost:3200/getAllTours'
      };

	useEffect(() => {
		let mounted = true;
		axios.request(options)
		.then( res => {
			if (mounted) {
				setAllTours(res.data);
			}
		})
		.catch(function (error) {
			console.error(error);
		});
		return () => mounted = false;
	}, []);

	if (allTours) {
		return (
			<>
			<div>
				<table>
					<thead>
						<tr>
							<th>Tour Name</th>
							<th>Season</th>
						</tr>
					</thead>
					<tbody>
						{allTours.map((allTours) => (
							<tr key={allTours}>
								<td>{allTours.tour_name}</td>
								<td>{allTours.season_id}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<br />
		<CSVLink data={allTours}>
			<button>Export Data</button>
		</CSVLink>
			</>
		);
	}
}

export default DisplayAllToursTable;