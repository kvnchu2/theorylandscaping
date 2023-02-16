import React from "react";
import { useState} from "react";
import Image from "next/image";


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    accordionDetails: {
      textAlign: 'left',
    },
  });

const Faq = () => {

    const classes = useStyles();
  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Frequently Asked Questions</h1>
    </section>

    <section id="faq">
        <div className="faq-title">
            <h3>Questions frequently asked by clients</h3>
        </div>

        <div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>How long is an active rehabilitation session?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                <Typography>
                Active Rehabilitation sessions are typically 45 minutes long but can be shorter or longer depending on your circumstances.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography>How many sessions of ICBC Active Rehabilitation am I approved for?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                <Typography>
                With ICBC, you are pre-approved for 12 early access treatments within 12 weeks of your accident. After this pre-approval period has ended, and the Kinesiologist has determined you need more treatment, a treatment plan will be submitted to ICBC to request for more sessions.
                </Typography>
                </AccordionDetails>
            </Accordion>
      
        </div>
    </section>
  </>
  );
};

export default Faq;


