import React from 'react';
import scorePage from './Score-Page.png'; // Replace with actual path to your score page screenshot
import './DodCtf.css';

const DodCtf = () => {
  return (
    <div className="project-detail">
      <h2>DoD Cyber Sentinel Skills Challenge</h2>
      <p>
        During the DoD Cyber Sentinel Skills Challenge, I utilized various tools and techniques on my Kali Linux machine to tackle different cybersecurity challenges:
      </p>
      <h3>Challenges and Tools</h3>
      <h4>Filing Problem (Forensics)</h4>
      <p>
        I used forensic tools such as Autopsy and FTK Imager to analyze file metadata, recover hidden information, and extract evidence from the file system.
      </p>

      <h4>Packer's Paradox (Malware & Reverse Engineering)</h4>
      <p>
        Using reverse engineering tools like Ghidra and IDA Pro on Kali Linux, I unpacked and analyzed malware binaries to understand their behavior and extract hidden data.
      </p>

      <h4>Header Hinterlands (Networking & Reconnaissance)</h4>
      <p>
        I employed Wireshark and tcpdump on Kali to capture and analyze network traffic. These tools helped me inspect HTTP headers and identify important information embedded within them.
      </p>

      <h4>Have you bean here before? (OSINT)</h4>
      <p>
        I leveraged OSINT tools such as Maltego and Recon-ng on Kali to gather information from public sources. These tools helped me map out relationships and gather intelligence about the target.
      </p>

      <h4>Printer (Web Security)</h4>
      <p>
        For web security analysis, I used Burp Suite and OWASP ZAP on my Kali machine to find and exploit web vulnerabilities. These tools were essential for testing the security of web applications and identifying potential weaknesses.
      </p>

      <h3>Results</h3>
      <p>
        Using these tools on my Kali Linux machine, I successfully solved the challenges and earned 750 points, securing 254th place in my first CTF challenge.
      </p>
      <img src={scorePage} alt="Score Page" className="screenshot" />
    </div>
  );
};

export default DodCtf;
