import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer_section(props) {
  return (
    <div className="footer__container">
      <div className="row section__footer">
        <div className="section__footer--col1">
          <h5>{props.heading}</h5>
          <p>{props.para}</p>
          <a href={props.link}>{props.ltext}</a>
        </div>
        <div className="section__footer--col2">
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  )
}
