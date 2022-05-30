import * as React from 'react';
import { Nav } from './Nav';
import Info from './info';

export function NavBar() {
  return (
    <nav className="sticky top-0 left-0 w-full border-b-2 border-dark-orange z-50">
      <Info />
      <Nav />
    </nav>
  );
}
