import React from 'react'

interface IProps {
  image?: string;
  title: string;
  text: string;
  children: React.ReactNode;
}

export const Card : React.FC<IProps> = (props) => {
  return (
    <div className="card">
      { 
        props.image ? <img src={props.image} className="card-img-top" alt={props.title} /> : <></>
      }
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="card-text">{props.text}</div>
        <br />
        {props.children}
      </div>
    </div>
  )
}
