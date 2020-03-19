import React from 'react'

export default function Title_v2(props) {
  return (
    <header className="row text-center extensions__row">
      <div className="col">
        <h1>{props.heading}<sup className="primary-sup">{props.sup}</sup></h1>
        <p>{props.para}</p>
      </div>
    </header>
  )
}
