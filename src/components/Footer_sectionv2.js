import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer_sectionv2(props) {
  return (
    <div className="footer__container">
      <div className="row section__footer">
        <div className="section__footer--col1">
          <h5>{props.heading}</h5>
          <p>{props.para}</p>
          <a href={props.link}>{props.ltext}</a>
          <ul>
            <li><FontAwesomeIcon icon="coffee" /></li>
            <li><FontAwesomeIcon icon="coffee" /></li>
            <li><FontAwesomeIcon icon="coffee" /></li>
            <li><FontAwesomeIcon icon="coffee" /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
