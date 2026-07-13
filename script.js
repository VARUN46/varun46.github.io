/**
 * script.js - Accessible Theme Toggle and Dynamic Copyright Year
 * Default Theme: Dark Mode (with Light Mode override)
 */

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const currentYearSpan = document.getElementById('current-year');
  
  // Set copyright year dynamically
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Define helper functions to manage theme
  const getSystemTheme = () => {
    // Check if system explicitly prefers light color scheme
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  };

  const getStoredTheme = () => {
    return localStorage.getItem('theme');
  };

  const setStoredTheme = (theme) => {
    localStorage.setItem('theme', theme);
  };

  const applyTheme = (theme) => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeToggle.setAttribute('aria-pressed', 'true');
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    } else {
      // Dark mode is default, so remove override attribute
      document.documentElement.removeAttribute('data-theme');
      themeToggle.setAttribute('aria-pressed', 'false');
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    }
  };

  // Determine initial theme (default to dark, unless system is light)
  let activeTheme = getStoredTheme();
  
  if (!activeTheme) {
    activeTheme = getSystemTheme();
  }

  applyTheme(activeTheme);

  // Handle manual toggle click
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    applyTheme(newTheme);
    setStoredTheme(newTheme);
  });

  // Listen for system theme changes
  const systemThemeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
  
  const handleSystemThemeChange = (e) => {
    // Only apply if the user hasn't set a manual override
    if (!getStoredTheme()) {
      const newTheme = e.matches ? 'light' : 'dark';
      applyTheme(newTheme);
    }
  };

  if (systemThemeMediaQuery.addEventListener) {
    systemThemeMediaQuery.addEventListener('change', handleSystemThemeChange);
  } else if (systemThemeMediaQuery.addListener) {
    systemThemeMediaQuery.addListener(handleSystemThemeChange);
  }

  // Intersection Observer for scroll-triggered entrance animations
  const observerOptions = {
    root: null, // Defaults to viewport
    threshold: 0.2 // Trigger when 20% of the section is visible
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after activating to trigger animation only once
        sectionObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.snap-section');
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
