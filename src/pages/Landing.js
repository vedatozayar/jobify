import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            I'm baby craft beer kinfolk fixie, enamel pin kickstarter lomo
            skateboard. Single-origin coffee adaptogen VHS truffaut. Prism PBR&B
            taiyaki, fanny pack actually pug la croix typewriter portland praxis
            palo santo distillery taxidermy marfa tbh.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login / Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
