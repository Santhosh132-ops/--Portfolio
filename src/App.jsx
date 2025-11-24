
import Hero from './components/Hero';
import About from './components/About';
import HorizontalSkills from './components/HorizontalSkills';
import './App.css';

function App() {
  return (
    <div className="app">
      <main>
        <Hero />
        <HorizontalSkills />
        <About />
      </main>
    </div>
  )
}

export default App
