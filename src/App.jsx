
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import HorizontalSkills from './components/HorizontalSkills';
import Projects from './components/Projects';
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
      </main>
    </div>
  )
}

export default App
