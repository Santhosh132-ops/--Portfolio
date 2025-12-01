
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import HorizontalSkills from './components/HorizontalSkills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import SkillBadges from './components/SkillBadges';
import Contacts from './components/Contacts';
import ArticlePage from './components/ArticlePage';
import ProjectPage from './components/ProjectPage';
import NotFound from './components/NotFound';
import { useScrollReveal } from './hooks/useScrollReveal';
import './App.css';

function ScrollRevealSection({ children, delay = 0 }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'is-visible' : ''}`}
      style={{ '--delay': `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <main>
              <Hero />
              <ScrollRevealSection delay={100}>
                <HorizontalSkills />
              </ScrollRevealSection>
              <ScrollRevealSection delay={200}>
                <About />
              </ScrollRevealSection>
              <ScrollRevealSection delay={300}>
                <Projects />
              </ScrollRevealSection>
              <ScrollRevealSection delay={400}>
                <Achievements />
              </ScrollRevealSection>
              <ScrollRevealSection delay={450}>
                <SkillBadges />
              </ScrollRevealSection>
              <ScrollRevealSection delay={500}>
                <Contacts />
              </ScrollRevealSection>
            </main>
          </>
        } />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
