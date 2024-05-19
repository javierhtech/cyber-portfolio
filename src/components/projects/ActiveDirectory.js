import React from 'react';
import addiagram from './AD-Diagram.png'; // Replace with actual path to your network diagram image
import userManagement from './User-Management.png'; // Replace with actual path to your user management screenshot
import groupPolicy from './Group-Policy.png'; // Replace with actual path to your group policy screenshot
import clientJoin from './Client-Join.png'; // Replace with actual path to your client join domain screenshot
// Replace with actual path to your verification screenshot
import powershellAutomation from './Powershell-Automation.png'; // Replace with actual path to your PowerShell automation screenshot
import './ActiveDirectory.css';

const ActiveDirectory = () => {
  return (
    <div className="project-detail">
      {/* Introduction Section */}
      <section id="introduction">
        <h2>Active Directory Management Project</h2>
        <p>
          In this project, I set up and managed an Active Directory environment from scratch. This included installing and configuring Active Directory, managing user and group accounts, and applying Group Policies. Through this project, I gained practical experience in network administration and security.
        </p>
      </section>

      {/* Network Diagram Section */}
      <section id="network-diagram">
        <h2>Network Diagram</h2>
        <img src={addiagram} alt="Network Diagram" className="screenshot" />
        <p>
          The network operates within the 192.168.10.0/24 range. Key components include:
        </p>
        <ul>
          <li><strong>Domain Controller:</strong> 192.168.10.7</li>
          <li><strong>Client Machines:</strong> DHCP-assigned IPs</li>
        </ul>
      </section>

      {/* Detailed Configurations Section */}
      <section id="detailed-configurations">
        <h2>Detailed Configurations</h2>
        <h3>Active Directory Setup</h3>
        <p>
          I configured the Active Directory server to manage user authentication and network policies. The server includes the necessary roles and features to function as a Domain Controller.
        </p>

        <h3>Organizational Units and User Accounts</h3>
        <p>
          I created Organizational Units (OUs) for different departments such as IT, HR, Sales, and Finance. User accounts were then created and added to their respective OUs.
        </p>
        <img src={userManagement} alt="User Management" className="screenshot" style={{ width: '68%', height: 'auto' }} />

        <h3>Group Policy Configuration</h3>
        <p>
          I configured Group Policies to manage user settings and security policies across the network. This includes password policies, account lockout policies, and desktop settings.
        </p>
        <img src={groupPolicy} alt="Group Policy Configuration" className="screenshot" style={{ width: '68%', height: 'auto' }} />

        <h3>Automating User Creation with PowerShell</h3>
        <p>
          To streamline the process of creating user accounts, I used PowerShell scripts to automate the creation of users in Active Directory. This involved preparing a CSV file with user details and running a script to create the accounts and assign them to the appropriate OUs.
        </p>
        <img src={powershellAutomation} alt="PowerShell Automation" className="screenshot" style={{ width: '68%', height: 'auto' }} />
      </section>

      {/* Client Machine Configuration Section */}
      <section id="client-configuration">
        <h2>Client Machine Configuration</h2>
        <p>
          I configured client machines to join the domain and apply the Group Policies set by the Domain Controller.
        </p>
        <img src={clientJoin} alt="Client Join Domain" className="screenshot" style={{ width: '68%', height: 'auto' }} />
      </section>

      {/* Conclusion Section */}
      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          This project provided me with hands-on experience in setting up and managing a secure Active Directory environment. Key skills I gained include network administration, user and group management, and policy configuration.
        </p>
      </section>
    </div>
  );
};

export default ActiveDirectory;
