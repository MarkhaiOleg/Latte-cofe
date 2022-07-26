import * as React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import Header from './components/Header/Header';
import NavBarLogo from './components/NavBarLogo/NavBarLogo';
import Menu from './components/Menu/Menu';
import WorkingHours from './components/working hours/WorkingHours';
import Appearance from './components/Appearance/Appearance';
import Award from './components/Award/Award';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <NavBarLogo />
      <AboutUs />
      <Menu />
      <WorkingHours />
      <Appearance />
      <Award />
      <Footer />
    </div>
  );
}

export default App;
