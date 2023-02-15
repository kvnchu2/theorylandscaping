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
                <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>
      
        </div>
    </section>
  </>
  );
};

export default Faq;


