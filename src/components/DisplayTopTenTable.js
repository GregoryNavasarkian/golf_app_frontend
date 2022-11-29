import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DisplayTopTenTable() {
	const [topTen, setTopTen] = useState([]);

	const options = {
        method: 'GET',
        url: 'http://localhost:3200/getTopTen'
      };

	useEffect(() => {
		let mounted = true;
		axios.request(options)
		.then( res => {
			if (mounted) {
				setTopTen(res.data);
			}
		})
		.catch(function (error) {
			console.error(error);
		});
		return () => mounted = false;
	}, []);

	if (topTen) {
		return (
			<>
			<div>
				<table>
					<thead>
						<tr>
							<th>Rank</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						{topTen.map((topTen) => (
							<tr key={topTen.position}>
								<td>{topTen.position}</td>
								<td>{topTen.first_name}</td>
								<td>{topTen.last_name}</td>
								<td>{topTen.country}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			</>
		);
	}
}

export default DisplayTopTenTable;