/**
 * CV Website JavaScript functionality
 * Handles transitions, current year display, and other interactive elements
 * @author Samuel Varano
 */

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    setCurrentYear();
    
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
 * Add hover effects to various elements
 */
function addHoverEffects() {
    // Add a subtle hover effect to certificate items
    const certificates = document.querySelectorAll('.certificate');
    if (certificates.length > 0) {
        certificates.forEach(cert => {
            cert.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
                this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            });
            
            cert.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // Add hover effect to additional items
    const additionalItems = document.querySelectorAll('.additional-item');
    if (additionalItems.length > 0) {
        additionalItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'transform 0.3s ease';
                this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
            });
        });
    }
}