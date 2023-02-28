import React, {useState, useEffect} from "react";
import Accordion from '../components/Accordion.js';
import {getAllFaqs} from "../lib/contentful";


const Faq = ({faqs}) => {

  const [state, setState] = useState({});

  useEffect(() => {
    faqs.map((faq)=> {
      setState({...state, [faq.block] : false});
    });
      
  }, [faqs]);

  const toggle = (block) => {
    setState({...state, [block]:!state[block] });
  };

  return (
  <>
    <section id="int-hero">
      <h1 id="home-h">Frequently Asked Questions</h1>
    </section>
    
    <div className="accordion-container">
      <h3>Questions frequently asked by clients</h3>
      <dl className="accordion">
        {faqs.map(faq => (
          <div>
            <Accordion question={faq.question} answer={faq.answer} onClick={() => toggle(faq.block)} expand={state[faq.block]} />
          </div>
        ))
        }
      </dl>
    </div>;
  </>
  );
};

export default Faq;

export async function getStaticProps() {
  const faqs = await getAllFaqs();
  return {
    props: {
      faqs,
    },
  };
}