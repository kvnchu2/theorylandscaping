import React from "react";

const Accordion = ({question, answer, expand, onClick}) => {
  return (
  <>
      <div>
        <dt className={expand ? 'title is-expanded' : 'title'} onClick={onClick}>
          <p>
          {question}
          </p>
        </dt>
        <dd className={expand ? 'content is-expanded' : 'content'} onClick={onClick}>
          <p>
            {answer}
          </p>
        </dd>
      </div>
  </>
  );
};

export default Accordion;