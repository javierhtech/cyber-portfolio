import React from 'react';
import diagram from './Network-Diagram.png'; // Adjust the path as necessary
import dashboard from './Splunk-Dashboard.png';
import config from './sysmon-config.png';
import domain from './domain-setup.png';
import './WindowsDomain.css';

const WindowsDomain = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section id="introduction">
        <h2>Windows Domain Environment Project</h2>
        <p>
          This project demonstrates my setup of a secure and functional domain environment from scratch. It includes the installation and configuration of Active Directory, Splunk, and Windows, providing practical experience in network administration and security. I would like to give thanks to MYDFIR for inspiration on this lab.
        </p>
      </section>

      {/* Network Diagram Section */}
      <section id="network-diagram">
        <h2>Network Diagram</h2>
        <img src={diagram} alt="Network Diagram" style={{ width: '100%', height: 'auto' }} />
        <p>
          The network operates within the 192.168.10.0/24 range. Key components include:
        </p>
        <ul>
          <li><strong>Splunk Server:</strong> 192.168.10.10</li>
          <li><strong>Active Directory Server:</strong> 192.168.10.7</li>
          <li><strong>Kali Linux (Configured for Future Use):</strong> 192.168.10.250</li>
          <li><strong>Windows 10 Machine:</strong> DHCP-assigned IP</li>
        </ul>
      </section>

      {/* Detailed Configurations Section */}
      <section id="detailed-configurations">
        <h2>Detailed Configurations</h2>
        <h3>Splunk Server</h3>
        <p>
          I configured the Splunk server to collect and analyze logs from the network. It serves as the central log management system.
        </p>
        <h3>Active Directory Server (ADDC01)</h3>
        <p>
          I set up the Active Directory server to manage user authentication and network policies. It includes Splunk Universal Forwarder and Sysmon for logging.
        </p>
        <h3>Windows 10 Machine (TARGET-PC)</h3>
        <p>
          This machine is used for regular network operations. It is equipped with Splunk Universal Forwarder and Sysmon.
        </p>
        <h3>Kali Linux</h3>
        <p>
          I configured the Kali Linux machine for future use in penetration testing and security assessments.
        </p>
      </section>

      {/* Tools Usage Section */}
      <section id="tools-usage">
        <h2>Tools and Usage</h2>
        <h3>Sysmon and Splunk Forwarder</h3>
        <p>
          Sysmon and Splunk Forwarder collect detailed telemetry and logs, enhancing the visibility of system activities.
        </p>
        <img src={config} alt="Sysmon Configuration" style={{ width: '50%', height: 'auto' }} /> {/* Replace with actual path */}
        <h3>Splunk</h3>
        <p>
          Splunk aggregates logs from my Active Directory and Windows 10 machines. It provides dashboards and alerts for real-time monitoring.
        </p>
        <img src={dashboard} alt="Splunk Dashboard" style={{ width: '50%', height: 'auto' }} /> {/* Replace with actual path */}
      </section>

      {/* Results and Findings Section */}
      <section id="results-findings">
        <h2>Results and Findings</h2>
        <ul>
          <li>Successful setup of a fully functional domain environment.</li>
          <li>Effective log collection and analysis using Splunk.</li>
          <li>Proper configuration of Active Directory for user and policy management.</li>
        </ul>
        <img src={domain} alt="Domain Setup" style={{ width: '50%', height: 'auto' }} /> {/* Replace with actual path */}
      </section>

      {/* Conclusion Section */}
      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          This project provided me with hands-on experience in setting up and managing a secure IT environment. Key skills I gained include network administration, log management with Splunk, and domain management with Active Directory.
        </p>
      </section>
    </div>
  );
};

export default WindowsDomain;
