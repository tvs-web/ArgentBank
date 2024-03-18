import React from 'react';
import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner';
import Items from '../../Components/Items/Items';
import Footer from '../../Components/Footer/Footer';
import Logo from '../../assets/argentBankLogo.png';
export default function Home() {
  return (
    <div className="home">
      <Header
        headerLogo={Logo}
        headerAlt="ArgentBank"
        headerIconNav1="fa fa-user-circle"
        // headerIconNav2="fa fa-sign-out"
        // headerNav2="Name"
        headerNav1=" Sign In"
      />
      <Banner />
      <Items />
      <Footer />
    </div>
  );
}
