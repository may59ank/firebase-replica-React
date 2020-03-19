import React from 'react'

export default function Title_v1(props) {
  return (
    <header className="row text-center comprehensive__row">
      <div className="col">
        <h1>{props.heading}<sup className="primary-sup">{props.sup}</sup></h1>
        <p>{props.para}</p>
      </div>
    </header>
  )
}
