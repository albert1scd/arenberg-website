import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './components/pages/HomePage';
import { RoomsPage } from './components/pages/RoomsPage';
import { StudyPage } from './components/pages/StudyPage';
import { CommunityPage } from './components/pages/CommunityPage';
import { ContactPage } from './components/pages/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handlePageChange = (pageId) => {
    setIsLoading(true);
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-colors duration-300`}>
        <Navbar 
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          isCollapsed={isNavCollapsed}
          onCollapse={setIsNavCollapsed}
        />
        <main className={`transition-all duration-300 
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${isNavCollapsed ? 'lg:ml-20' : 'lg:ml-72'}`}
        >
          {currentPage === 'home' && <HomePage onRoomsClick={() => handlePageChange('rooms')} />}
          {currentPage === 'rooms' && <RoomsPage />}
          {currentPage === 'study' && <StudyPage />}
          {currentPage === 'community' && <CommunityPage />}
          {currentPage === 'contact' && <ContactPage />}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
