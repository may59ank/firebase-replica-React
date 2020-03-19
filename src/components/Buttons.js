import React from 'react'

export default function buttons(props) {
  return (
    <div className="row extensions__row3 text-center">
      <div className="col">
        <div className="btn-component">
          <a href="#" className="btn-secondary" >{props.title}</a>
        </div>
      </div>
    </div>
  )
}
