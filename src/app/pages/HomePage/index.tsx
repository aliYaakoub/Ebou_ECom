import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import Hero from 'app/components/hero';
import Category from 'app/components/category';

export function HomePage() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React Boilerplate application homepage"
        />
      </Helmet>
      <NavBar />
      <Hero />
      <Category />
    </div>
  );
}
