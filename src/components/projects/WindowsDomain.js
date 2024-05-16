import React from 'react';

const WindowsDomain = () => {
  return (
    <div className="project-detail">
      <h2>Windows Domain Environment</h2>
      <p>Implemented a Windows Server 2022 Domain Controller and connected target machines in a virtual lab environment. Utilized tools such as Splunk for log management and analysis, Kali Linux for penetration testing and security assessments, and Atomic Red Team for simulating adversary tactics and techniques.</p>
      <h3>Steps</h3>
      <ol>
        <li>Set up Windows Server 2022 as Domain Controller.</li>
        <li>Connected Windows 10 and Kali Linux machines to the domain.</li>
        <li>Configured Splunk for log management.</li>
        <li>Used Atomic Red Team for simulating attacks.</li>
        <li>Performed penetration testing with Kali Linux.</li>
      </ol>
      {/* Add screenshots and additional content here */}
    </div>
  );
};

export default WindowsDomain;
