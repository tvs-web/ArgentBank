import React from 'react';
import Header from '../../Components/Header/Header';
import Logo from '../../assets/argentBankLogo.png';
import Footer from '../../Components/Footer/Footer';
import './Connexion.scss';
import Form from '../../Components/Form/Form';
export default function Connexion() {
  return (
    <div className="connexion">
      <Header
        headerLogo={Logo}
        headerAlt="ArgentBank"
        headerIconNav1="fa fa-user-circle"
        // headerIconNav2="fa fa-sign-out"
        // headerNav2="Name"
        headerNav1="Sign In"
      />
      <main>
        <Form formIcone="fa fa-user-circle" />
      </main>
      <Footer />
    </div>
  );
}
