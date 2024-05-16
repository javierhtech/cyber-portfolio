import React from 'react';
import netlogo from '../netlogo.png';
import seclogo from '../seclogo.png';

const Certifications = () => {
  return (
    <div className="certifications">
      <div className="certification">
        <img src={netlogo} alt="Network+ Certification" />
        <p>CompTIA™ Network+</p>
      </div>
      <div className="certification">
        <img src={seclogo} alt="Security+ Certification" />
        <p>CompTIA™ Security+</p>
      </div>
    </div>
  );
};

export default Certifications;

