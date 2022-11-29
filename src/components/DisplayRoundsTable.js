import React, {useState, useEffect} from 'react';
import { CSVLink } from 'react-csv';
import axios from 'axios';

function DisplayRoundsTable() {

	const [rounds, setRounds] = useState([]);

	const options = {
		method: 'GET',
		url: 'http://localhost:5000/rounds'
	};

	useEffect(() => {
		let mounted = true;
		axios.request(options)
		.then( res => {
			if (mounted) {
				setRounds(res.data);
			}
		})
		.catch(function (error) {
			console.error(error);
		});
		
		return () => mounted = false;
	}, []);


	return (
		<>
		<div>
			<table>
				<thead>
					<tr>
						<th>Course Name</th>
						<th>Date</th>
						<th>Score</th>
						<th>Par</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{rounds.map((round) => (
						<tr key={round.courseName}>
							<td>{round.courseName}</td>
							<td>{round.date}</td>
							<td>{round.score}</td>
							<td>{round.par}</td>
							<td><button className='tableButton'>Delete</button></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
		<br />
		<CSVLink data={rounds}>
			<button>Export Data</button>
		</CSVLink>
		</>
	);
}

export default DisplayRoundsTable;