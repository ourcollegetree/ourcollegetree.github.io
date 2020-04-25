
import React from 'react';

const ThanksComp = () => (
  <div className="thankyou">
    <div style={{
      position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
    }}
    >
      <div style={{
        position: 'relative', width: '100%', height: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
      >
        <div>
          <p style={{fontFamily: 'Viner Hand ITC', fontSize: 'xxx-large', textAlign: 'center', color: 'rgb(255, 254, 254)'}}>Thank you !</p>
          <br />
          <p style={{color: 'rgb(255, 254, 254)', fontSize: 'xx-large', fontFamily: 'Segoe Print' }}>We will be in touch with you shortly.</p>
        </div>
      </div>
    </div>
  </div>
);

export default ThanksComp;


