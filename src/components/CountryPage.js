import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useCountry from '../custom-hooks/useCountry';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function  CountryPage() {
  const classes = useStyles();
  const history = useHistory();

  const { countryName } = useParams();
  const { countries: country } = useCountry(`name/${countryName}`)

  const getBack = () =>{
    history.push('/')
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <div className ="infopage">
    {country.length !==0 && (
      <>
     <div><h1> {country[0].name} </h1></div>
     <div><img src={`${country[0].flag}`} height="200px" width="320px" alt="country flag"></img></div>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
        <Typography className={classes.heading}>Other Names</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {country[0].altSpellings.length > 0
					? country[0].altSpellings.map((item) => <li>{item}</li>)
					: 'No data on this'}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Region</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {(country[0].region)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Borders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {country[0].borders.length > 0
					? country[0].borders.map((item) => <li>{item}</li>)
					: 'No data on this'}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Currencies</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {country[0].currencies.length > 0 ? (country[0].currencies[0].name) : 'No data on this'}
          </Typography>
        
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Languages</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {country[0].languages.length > 0
					? (country[0].languages.map(lang=><li>{lang.name}</li>))
          : 'No data on this'
          }
          </Typography>
        </AccordionDetails>
      </Accordion>
      <button onClick={() => getBack()} variant="contained">
				Get Back
			</button>
      </>
      )}
    </div>
  );
}




