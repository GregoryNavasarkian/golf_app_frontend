import React, {useState} from 'react';
import DisplayRoundsTable from '../components/DisplayRoundsTable';

function AddRoundPage() {

	const [courseName, setCourseName] = useState('');
	const [date, setDate] = useState('');
	const [score, setScore] = useState('');
	const [par, setPar] = useState('');

	const addRound = async () => {
		const newRound = {courseName, date, score, par};
		const response = await fetch('http://localhost:5000/rounds', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newRound)
		});
		if (response.status === 201) {
			console.log('Round added');
		}
		else {
			console.log('Error adding round');
		}
	};

    return (
	    <>
			<h1> Add Round </h1>
			<br />
			<form onSubmit={(e) => {e.preventDefault();}}>
				<label for="name">Name: &nbsp;</label>
				<input
					type="text"
					placeholder="Course Name"
					required
					value={courseName}
					onChange={e => setCourseName(e.target.value)} 
					id="name" 
				/>
				&nbsp;&nbsp;
				<label for="date">Date: &nbsp;</label>
				<input
					type="date"
					placeholder="Date"
					required
					value={date}
					onChange={e => setDate(e.target.value)}
					id="date"
				/>
				&nbsp;&nbsp;
				<label for="score">Score: &nbsp;</label>
				<input
					type="number"
					placeholder="Score"
					required
					value={score}
					onChange={e => setScore(e.target.value)}
					id="score"
				/>
				&nbsp;&nbsp;
				<label for="par">Par: &nbsp;</label>
				<input
					type="number"
					placeholder="Par"
					required
					value={par}
					onChange={e => setPar(e.target.value)}
					id="par"
				/>

				<br></br><br></br>
				<button onClick={addRound}>Add Round</button>
			</form>
			<br></br><br />
			<DisplayRoundsTable />
		</>
    );
}

export default AddRoundPage;