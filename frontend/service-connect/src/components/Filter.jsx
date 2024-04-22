import React from 'react'

export default function Filter() {
  return (

<div className="p-3 mb-2 text-emphasis-success" style={{ backgroundColor: '#b769f599', borderRadius: '10px' }}>
  <div className="row">
    <div className="col-md-6 mb-4">
      <div className="form-outline">
        <label className="form-label" htmlFor="form3Example1n">
          <h2 style={{ fontWeight: 'bold' }}>What do you want to do</h2>
        </label>
        <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder="Switch and Outlet Installation" style={{ borderRadius: '20px' }} />
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col-md-6 mb-4">
      <div className="form-outline">
        <label className="form-label" htmlFor="form3Example1n">
          <h2 style={{ fontWeight: 'bold' }}>Date, within</h2>
        </label>
        <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder="Date" style={{ borderRadius: '20px' }} />
      </div>
    </div>

    <div className="col-md-6 mb-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <h2 style={{ fontWeight: 'bold', margin: '0' }}>Select Range</h2>
  <output className="text-center d-block mt-3" id="rangeValue">25000</output>
  <input
    type="range"
    className="form-range"
    min="500"
    max="15000"
    step="500"
    id="customRange3"
    value="1500" // Set the initial value
    style={{ width: '75%' }}
    onChange={handleRangeChange}
  />
</div>
 

  </div>
</div>



    
  )
}

function handleRangeChange() {
    const rangeInput = document.getElementById('customRange3');
    const rangeValue = document.getElementById('rangeValue');
    rangeValue.textContent = rangeInput.value;
  }