// src/hooks/useSidebar.js
import { useState, useEffect } from 'react';

export const useSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');

  // Close sidebar when clicking outside or pressing escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    const handleResize = () => {
      // Close sidebar on mobile when resizing to desktop
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSidebarClick = (key) => {
    setActiveSection(key);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return {
    sidebarOpen,
    setSidebarOpen,
    activeSection,
    setActiveSection,
    handleSidebarClick,
    toggleSidebar
  };
};
