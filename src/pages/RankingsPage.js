import React from 'react';
import DisplayTopTenTable from '../components/DisplayTopTenTable';
import DisplayTopTenProjectedTable from '../components/DisplayTopTenProjectedTable';
import DisplayAllToursTable from '../components/DisplayAllToursTable';

const RankingsPage = () => {

	const[isShowTopTen, setIsShowTopTen] = React.useState(false);
	const[isShowTopTenProjected, setIsShowTopTenProjected] = React.useState(false);
	const[isShowAllTours, setIsShowAllTours] = React.useState(false);

	function showTopTen() {
		setIsShowAllTours(false);
		setIsShowTopTenProjected(false);
		setIsShowTopTen(true);
	}

	function showTopTenProjected() {
		setIsShowAllTours(false);
		setIsShowTopTen(false);
		setIsShowTopTenProjected(true);
	}

	function showAllTours() {
		setIsShowTopTen(false);
		setIsShowTopTenProjected(false);
		setIsShowAllTours(true);
	}

    return (
        <>
			<h1>Rankings Page</h1>
			<br/>
			<button onClick={showTopTen}>Show Top 10</button>
			<br></br>
			<button onClick={showTopTenProjected}>Show Top 10 Projected</button>
			<br></br>
			<button onClick={showAllTours}>Show All Tours</button>
			<br/>
			{isShowTopTen && <DisplayTopTenTable/>}
			{isShowTopTenProjected && <DisplayTopTenProjectedTable/>}
			{isShowAllTours && <DisplayAllToursTable/>}
        </>
    );
}

export default RankingsPage;