import { useRef } from 'react';

import { About, Header, Footer, GetInTouch, MobileViewHeader, Skills } from 'organisms/index';

import Home from './components/templates/home/home';
import ProjectList from './components/templates/projects/ProjectList';

function App() {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const workRef = useRef<null | HTMLDivElement>(null);
  const contactRef = useRef<null | HTMLDivElement>(null);

  return (
    <div className="font-roboto bg-primary-background">
      {/* Header / Footer - Desktop View */}
      <div className="lg:block hidden">
        <Header aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
        <Footer />
      </div>
      {/* Header / Footer - Mobile / Tablet View */}
      <div className="lg:hidden block">
        <MobileViewHeader aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      </div>
      <div className="content lg:pl-52 lg:px-52 md:px-10 px-6 pt-52 flex flex-col gap-52">
        {/* Hero Section View */}
        <Home />
        {/* Skills View */}
        <Skills />
        {/* About */}
        <div ref={aboutRef}>
          <About />
        </div>
        {/* Projects */}
        <div className="xl:mt-0 mt-52" ref={workRef}>
          <ProjectList />
        </div>
        {/* Get In Touch */}
        <div ref={contactRef}>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}

export default App;
