import { HeroHeader } from './components/HeroHeader';
import { Navbar } from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-linen text-olive-900">
      <Navbar />

      <main>
        <HeroHeader />
      </main>
    </div>
  );
}
