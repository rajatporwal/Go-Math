import React from "react";
import "./accordion.scss";

const Accordion = (props) => {
  return (
    <div className="accordion">
        <details>
          <summary>
            <span className="">{props.title}</span>
          </summary>
          <div className="accordion__content">{props.content}</div>
        </details>
    </div>
  );
};

export default Accordion;
