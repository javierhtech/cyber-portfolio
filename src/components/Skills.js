import React from 'react';
import Certifications from './Certifications';

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2>Skills</h2>
      <ul>
        <li>Network Security</li>
        <li>Windows Active Directory</li>
        <li>Linux System Administration</li>
        <li>Microsoft 365 Administration</li>
        <li>Troubleshooting Hardware and Software</li>
        <li>Virtualization (VirtualBox, VMware)</li>
        <li>Help Desk Support</li>
        <li>Customer Service</li>
        <li>Python</li>
        <li>JavaScript</li>
      </ul>
      <h3>Certifications</h3>
      <Certifications />
    </section>
  );
};

export default Skills;
