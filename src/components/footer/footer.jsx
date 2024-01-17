'use client';

import { Footer as FlowbiteFooter } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { footerimg } from '../../assets/index.js';

const Footer = () => {
  return (
    <FlowbiteFooter className="bg-footercolor static bottom-0 left-0 right-0 py-1 px-40 text-1xl sm:text-center">
    <div className="w-full">
      <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
        <div>
          <img src={footerimg} width={120} alt="" />
      
        </div>
        <div>
          <FlowbiteFooter.Title title="Help Center " className='text-2xl text-white'  />
          <FlowbiteFooter.LinkGroup col>
            <FlowbiteFooter.Link href="#">Discord Server</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Twitter</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Facebook</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Contact Us</FlowbiteFooter.Link>
          </FlowbiteFooter.LinkGroup>
        </div>
        <div>
          <FlowbiteFooter.Title title="legal" className='text-2xl text-white'/>
          <FlowbiteFooter.LinkGroup col>
            <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Licensing</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Terms &amp; Conditions</FlowbiteFooter.Link>
          </FlowbiteFooter.LinkGroup>
        </div>
        <div>
          <FlowbiteFooter.Title title="download"  className='text-2xl text-white'/>
          <FlowbiteFooter.LinkGroup col>
            <FlowbiteFooter.Link href="#">iOS</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Android</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">Windows</FlowbiteFooter.Link>
            <FlowbiteFooter.Link href="#">MacOS</FlowbiteFooter.Link>
          </FlowbiteFooter.LinkGroup>
        </div>
      </div>
      <div className="w-full px-4 py-6 sm:flex sm:items-center sm:justify-between">
        <FlowbiteFooter.Copyright href="#" by=" .. Abdullah Ashraf" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
          <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
          <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
          <FlowbiteFooter.Icon href="#" icon={BsGithub} />
        </div>
      </div>
    </div>
  </FlowbiteFooter>
  );
}

export default Footer;
