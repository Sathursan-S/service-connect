import React from 'react';

export default function ContactInfo(props) {
    

  return (
    <button className="btn btn-block me-2" style={{ borderRadius: "20px", backgroundColor: "#00a8e8" }}>
      <i className="fa fa-clock-o"></i> {props.buttonText}
    </button>
  );
}
