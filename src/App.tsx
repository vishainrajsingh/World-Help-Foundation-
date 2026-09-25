import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Work } from './pages/Work';
import { Impact } from './pages/Impact';
import { GetInvolved } from './pages/GetInvolved';
import { Volunteer } from './pages/Volunteer';
import { Partner } from './pages/Partner';
import { Donate } from './pages/Donate';
import { Stories } from './pages/Stories';
import { Gallery } from './pages/Gallery';
import { News } from './pages/News';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <About setCurrentPage={setCurrentPage} />;
      case 'work':
        return <Work setCurrentPage={setCurrentPage} />;
      case 'impact':
        return <Impact setCurrentPage={setCurrentPage} />;
      case 'get-involved':
        return <GetInvolved setCurrentPage={setCurrentPage} />;
      case 'volunteer':
        return <Volunteer />;
      case 'partner':
        return <Partner />;
      case 'donate':
        return <Donate />;
      case 'stories':
        return <Stories setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <Gallery />;
      case 'news':
        return <News />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <Terms />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-500 selection:text-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
