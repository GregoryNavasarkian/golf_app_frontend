import React, {useState, useEffect} from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';

function DisplayTopTenProjectedTable() {
	const [projectedTopTen, setProjectedTopTen] = useState([]);

	const options = {
        method: 'GET',
        url: 'http://localhost:3200/getTopTenProjected'
      };

	useEffect(() => {
		let mounted = true;
		axios.request(options)
		.then( res => {
			if (mounted) {
				setProjectedTopTen(res.data);
			}
		})
		.catch(function (error) {
			console.error(error);
		});
		return () => mounted = false;
	}, []);

	if (projectedTopTen) {
		return (
			<>
			<div>
				<table>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Current Rank</th>
							<th>Current Points</th>
						</tr>
					</thead>
					<tbody>
						{projectedTopTen.map((projectedTopTen) => (
							<tr key={projectedTopTen.first_name}>
								<td>{projectedTopTen.first_name}</td>
								<td>{projectedTopTen.last_name}</td>
								<td>{projectedTopTen.current_rank}</td>
								<td>{projectedTopTen.current_points}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<br />
		<CSVLink data={projectedTopTen}>
			<button>Export Data</button>
		</CSVLink>
			</>
		);
	}
}

export default DisplayTopTenProjectedTable;