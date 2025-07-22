import React from 'react'

const NetworkingFirewall = () => {
  return (
    <div className='flex flex-col items-center mt-10 md:mt-10 lg:mt-0'>
      <h1 className='bg-[#119472] rounded text-white text-[24px] lg:text-[30.4px] font-[600] font-montserrat px-[10px] py-[5px]'>FIREWALL SETUP</h1>
      <div className="text-area-firwall bg-[#201e1e] p-[20px] md:p-[50px] lg:p-[70px] text-center  mt-5">
        <p>Firewall setup is a critical part of network security, acting as a barrier between your internal network and potential external threats. It monitors and controls incoming and outgoing network traffic based on predetermined security rules. By doing so, it helps prevent unauthorized access, cyberattacks, and malware from infiltrating your network.</p>
        <br/>
        <p>Our team specializes in configuring firewalls to meet the specific needs of your business. We analyze your security requirements and implement tailored solutions to ensure that your data, resources, and sensitive information are always protected. This involves setting up proper access control, threat detection, and blocking malicious traffic, so your network remains secure and operational at all times.</p>
      </div>
    </div>
  )
}

export default NetworkingFirewall
