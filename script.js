 // Create stars
 function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random properties
        const size = Math.random() * 3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 5 + Math.random() * 10;
        const opacity = 0.5 + Math.random() * 0.5;
        const delay = Math.random() * 5;
        
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--opacity', opacity);
        star.style.animationDelay = `${delay}s`;
        
        starsContainer.appendChild(star);
    }
}

// Show hidden message
function showMessage() {
    const message = document.getElementById('specialMessage');
    message.style.display = 'block';
    
    // Scroll to message
    message.scrollIntoView({ behavior: 'smooth' });
    
    // Add fireworks effect
    createFireworks();
}

// Simple fireworks effect
function createFireworks() {
    const colors = ['#8e44ad', '#f1c40f', '#e74c3c', '#3498db', '#2ecc71'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const firework = document.createElement('div');
            firework.style.position = 'fixed';
            firework.style.width = '5px';
            firework.style.height = '5px';
            firework.style.borderRadius = '50%';
            firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            firework.style.left = `${10 + Math.random() * 80}%`;
            firework.style.top = `${20 + Math.random() * 60}%`;
            firework.style.boxShadow = `0 0 10px 2px ${colors[Math.floor(Math.random() * colors.length)]}`;
            firework.style.zIndex = '10';
            firework.style.transform = 'scale(0)';
            firework.style.transition = 'all 0.5s ease-out';
            
            document.body.appendChild(firework);
            
            // Animate
            setTimeout(() => {
                firework.style.transform = 'scale(20)';
                firework.style.opacity = '0';
            }, 10);
            
            // Remove after animation
            setTimeout(() => {
                firework.remove();
            }, 1000);
        }, i * 100);
    }
}

// Initialize stars when page loads
window.onload = function() {
    createStars();
    
    // Add floating particles
    createFloatingParticles();
};

// Floating particles (like fireflies)
function createFloatingParticles() {
    const container = document.querySelector('.container');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
        const size = 2 + Math.random() * 3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = 10 + Math.random() * 20;
        const delay = Math.random() * 10;
        const color = `hsl(${Math.random() * 60 + 30}, 100%, 70%)`;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.backgroundColor = color;
        particle.style.boxShadow = `0 0 ${size * 2}px ${size}px ${color}`;
        particle.style.borderRadius = '50%';
        particle.style.position = 'absolute';
        particle.style.opacity = '0.7';
        particle.style.zIndex = '0';
        
        // Animation
        particle.style.animation = `floatParticle ${duration}s linear ${delay}s infinite`;
        
        container.appendChild(particle);
    }
    
    // Add CSS for animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0% { transform: translate(0, 0); opacity: 0; }
            10% { opacity: 0.7; }
            90% { opacity: 0.7; }
            100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}