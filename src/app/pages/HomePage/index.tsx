import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavBar } from 'app/components/NavBar';
import Hero from 'app/components/hero';
import Category from 'app/components/category';
import BestSeller from 'app/components/bestSeller';
import Products from 'app/components/products';
import DealOfTheDay from 'app/components/dealOfTheDay';
import Testimonials from 'app/components/testimonials';
import NewsLetter from 'app/components/newsLetter';

export const HomePage: React.FC = () => {
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
      <BestSeller />
      <Products />
      <DealOfTheDay />
      <Testimonials />
      <NewsLetter />
    </div>
  );
};
