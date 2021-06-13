import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ListSubheader, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { Autorenew, ExpandLess, ExpandMore } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import  countryData from '../custom-hooks/useCountry';
import { useParams } from 'react-router-dom';
import useCountry from '../custom-hooks/useCountry';

const CountryPage = () => {
	const history = useHistory();
	const [open, setOpen] = useState(false);


	const handleClick = () => {
		setOpen(!open);
	};
	const gotoHome = () => {
		history.push('/');
	};

	const { countryName } = useParams();

	const countryData =  useCountry(`name/${countryName}`);
	console.log("From the Info page", countryData); 

	const Labels = (label) => {
		return (
			<>
				<ListItem button onClick={handleClick} id={`${label}`}>
					<ListItemIcon>
						<SendIcon />
					</ListItemIcon>

					<ListItemText primary={`${label}`} />
					{open ? <ExpandLess /> : <ExpandMore />}
				</ListItem>
			</>
		);
	};
	// seems like it cant be customizable.... cause of the collapse... it will make it all up/ down!
	const collapse = (item) => {
		return (
			<>
				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding key={`${item}`}>
						<ListItem key={`${item}`} button >
							<ListItemText primary={`${item}`} />
						</ListItem>
					</List>
				</Collapse>
			</>
		);
	};

	return (
		<div className ="infopage" >
			<h1>{countryData[0].name}</h1>
			<List
				component="nav"
				aria-labelledby="nested-list-subheader"
				subheader={
					<ListSubheader component="div" id="nested-list-subheader">
						<img src={`${countryData[0].flag}`} height="200px" width="300px" alt="country flag"></img>
					</ListSubheader>
				}
			>
				{Labels('Other Name')}
				{countryData[0].altSpellings.length > 0
					? countryData[0].altSpellings.map((item) => collapse(item))
					: 'No data on this'}

				{Labels('Region')}
				{collapse(countryData[0].region)}

				{Labels('Borders')}
				{countryData[0].borders.length > 0
					? countryData[0].borders.map((item) => collapse(item))
					: 'No data on this'}

				{Labels('Currencies')}
				{countryData[0].currencies.length > 0 ? collapse(countryData[0].currencies[0].name) : 'No data on this'}

				{Labels('Languages')}
				{countryData[0].languages.length > 0 ? collapse(countryData[0].languages[0].name) : 'No data on this'}
				<button  onClick={() => gotoHome()} variant="contained">
				Get Back
			</button>
			</List>

		</div>
	);
};

export default CountryPage;
