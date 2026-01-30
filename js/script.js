/**
 * CV Website JavaScript functionality
 * Handles transitions, current year display, language switching, and other interactive elements
 * @author Samuel Varano
 */

document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    setCurrentYear();

    // Initialize language system
    initializeLanguage();

    // Add page transition effects
    addPageTransitions();
});

/**
 * Sets the current year in the footer copyright text
 */
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Adds smooth page transition effects to all pages
 */
function addPageTransitions() {
    // Add a fade-in effect to the main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        // Start with opacity 0
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.5s ease-in-out';

        // Trigger reflow for the transition to work
        void mainContent.offsetWidth;

        // Set opacity to 1 to trigger the fade-in
        mainContent.style.opacity = '1';
    }

    // Add hover effects to elements that don't have them in CSS
    addHoverEffects();
}

/**
 * Initialize language switching system
 */
function initializeLanguage() {
    // Get saved language from localStorage or default to 'en'
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    
    // Set the language switcher to the saved language
    const languageSwitcher = document.getElementById('language-switcher');
    if (languageSwitcher) {
        languageSwitcher.value = savedLanguage;
        // Load the saved language
        loadLanguageFile(savedLanguage);
    }
    
    // Add event listener to language switcher
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', function () {
            const lang = this.value;
            loadLanguageFile(lang);
            // Save language preference
            localStorage.setItem('selectedLanguage', lang);
        });
    }
}

/**
 * Load language file and apply translations
 * @param {string} lang - Language code (en, it, es)
 */
function loadLanguageFile(lang) {
    const filePath = `/languages/${lang}.json`;
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load language file: ${filePath}`);
            }
            return response.json();
        })
        .then(data => applyTranslations(data))
        .catch(error => console.error('Error loading language file:', error));
}

/**
 * Apply translations to all elements with data-lang attribute
 * @param {object} translations - Translation object from JSON file
 */
function applyTranslations(translations) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[key]) {
            element.textContent = translations[key];
        } else {
            console.warn(`Translation key not found: ${key}`);
        }
    });
}

/**
 * Add hover effects to various elements
 */
function addHoverEffects() {
    // Add a subtle hover effect to certificate items
    const certificates = document.querySelectorAll('.certificate');
    if (certificates.length > 0) {
        certificates.forEach(cert => {
            cert.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
                this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            });

            cert.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
            });
        });
    }

    // Add hover effect to additional items
    const additionalItems = document.querySelectorAll('.additional-item');
    if (additionalItems.length > 0) {
        additionalItems.forEach(item => {
            item.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
                this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            });

            item.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
            });
        });
    }
}