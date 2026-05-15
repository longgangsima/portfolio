import { BugHunt } from './components/BugHunt';
import { Contact } from './components/Contact';
import { CursorFx } from './components/CursorFx';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Stats } from './components/Stats';
import { Work } from './components/Work';

export default function App() {
  return (
    <>
      <CursorFx />
      <Nav />
      <Hero />
      <Stats />
      <Work />
      <Projects />
      <BugHunt />
      <Contact />
    </>
  );
}
