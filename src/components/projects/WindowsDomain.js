import React from 'react';
import diagram from './Network-Diagram.png'; // Adjust the path as necessary
import './WindowsDomain.css';


const WindowsDomain = () => {
  return (
    <div>
      {/* Introduction Section */}
      <section id="introduction">
        <h2>Introduction</h2>
        <p>
          The objective of this project was to create a secure and functional virtual lab environment to simulate real-world scenarios of network management, log analysis, and security assessments. This environment provides a practical platform for learning and testing cybersecurity techniques. I would like to give a big shoutout to MYDFIR for inspiring and helping the project idea.
        </p>
      </section>

      {/* Network Diagram Section */}
      <section id="network-diagram">
        <h2>Network Diagram</h2>
        <img src={diagram} alt="Network Diagram" style={{ width: '100%', height: 'auto' }} />
        <p>
          The diagram above illustrates the configured network environment. The domain "MyDFIR" operates within the 192.168.10.0/24 network. Key components include:
        </p>
        <ul>
          <li><strong>Splunk Server:</strong> 192.168.10.10</li>
          <li><strong>Active Directory:</strong> 192.168.10.7</li>
          <li><strong>Kali Linux (Attacker):</strong> 192.168.10.250</li>
          <li><strong>Windows 10:</strong> DHCP assigned IP</li>
        </ul>
      </section>

      {/* Detailed Configurations Section */}
      <section id="detailed-configurations">
        <h2>Detailed Machine Configurations</h2>
        <h3>Splunk Server</h3>
        <p>
          The Splunk server, located at 192.168.10.10, is configured to collect and analyze logs from the entire network. It serves as the central log management system.
        </p>
        <h3>Active Directory</h3>
        <p>
          The Active Directory server, at 192.168.10.7, manages user authentication and network policies. It also runs Splunk Universal Forwarder and Sysmon for enhanced logging.
        </p>
        <h3>Windows 10</h3>
        <p>
          The Windows 10 machine is dynamically assigned an IP via DHCP and is used for regular network operations. It is equipped with Splunk Universal Forwarder, Sysmon, and Atomic Red Team for simulating attacks.
        </p>
        <h3>Kali Linux</h3>
        <p>
          The Kali Linux machine, with IP 192.168.10.250, is used for penetration testing and simulating adversary activities.
        </p>
      </section>

      {/* Tools Usage Section */}
      <section id="tools-usage">
        <h2>Tools and Their Usage</h2>
        <h3>Splunk</h3>
        <p>
          Splunk is configured to aggregate logs from the Active Directory and Windows 10 machines, enabling comprehensive log management and analysis. Dashboards and alerts are set up for real-time monitoring.
        </p>
        <h3>Atomic Red Team</h3>
        <p>
          Atomic Red Team is deployed on the Windows 10 machine to simulate various attack techniques. These simulations help in validating the detection capabilities of the setup.
        </p>
        <h3>Kali Linux</h3>
        <p>
          Kali Linux is used for penetration testing, leveraging tools such as Nmap and Metasploit to identify vulnerabilities and test the network’s security.
        </p>
      </section>

      {/* Results and Findings Section */}
      <section id="results-findings">
        <h2>Results and Findings</h2>
        <p>
          The project led to the identification of several critical vulnerabilities which were subsequently addressed. Key findings include:
        </p>
        <ul>
          <li>Successful detection of simulated attacks using Splunk.</li>
          <li>Identified configuration weaknesses in Active Directory.</li>
          <li>Enhanced security posture through penetration testing.</li>
        </ul>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          This project provided a hands-on experience in setting up and managing a secure IT environment. Key skills gained include network administration, log management with Splunk, penetration testing, and attack simulation using Atomic Red Team.
        </p>
      </section>
    </div>
  );
};

export default WindowsDomain;
