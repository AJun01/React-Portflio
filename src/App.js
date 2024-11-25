import React , { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Nav from './nav/Nav';
import About from './about/About';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import './styles/app.css';
import Background from './background/Background';
import PlayerStats from './playerStats/PlayerStats';
import useSlideDirection from './hooks/useSlideDirection'; 
import useDelayedContent from './hooks/useDelayedContent'; 
import HenshinEffect from "./avatar/AvatarHuman";

const App = () => {
  const location = useLocation();
  const slideDirection = useSlideDirection();

  const showContent = useDelayedContent(4000); // Use a 4000ms delay

  return (
    <div>
       <HenshinEffect />
      {/* Conditionally render Nav, Background, and PlayerStats after the delay */}
      {showContent && <Nav />}
      <Background play={showContent} />
      {/* Transition Group for page animations */}
      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          classNames={slideDirection} // Use slideDirection from the custom hook
          timeout={500} // Match with CSS duration
          unmountOnExit
        >
          <div className="page-wrapper">
            <Routes location={location}>
              <Route path="/" element={showContent && <About />} />
              <Route path="/skills" element={showContent && <Skills />} />
              <Route path="/projects" element={showContent && <Projects />} />
              <Route path="/contact" element={showContent && <Contact />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>

      {/* Conditionally render PlayerStats after the delay */}
      {showContent && <PlayerStats />}
    </div>
  );
};

export default App;
