
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import HorizontalSkills from './components/HorizontalSkills';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <HorizontalSkills />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App
