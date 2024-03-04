import React from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from './DropdownMenu';

export default function Menus() {
  return (
    <>
      <div className="w-full">
        <Link to="/" className='hover:text-primary py-2 block'>Home</Link>
      </div>
      <div className="w-full">
        <a href="https://joeyscoin.vercel.app" className='hover:text-primary py-2 block'>NFT</a>
      </div>
      <DropdownMenu>
        <div className="w-full">
          <Link to="/blahblah" className='hover:text-primary py-2 block'>404 Page</Link>
        </div>
      </DropdownMenu>
    </>
  );
}
