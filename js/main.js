// Project data
const projects = [
    {
        title: ' A Data Acquisition System (DAQ)',
        description: `A modular sensor integration and data acquisition platform 
                    capable of real-time monitoring, processing, and logging of multiple 
                    environmental and motion parameters.`,
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/andresgumu/daq-system'
    },

    {
        title: "Large Field Electromagnetic Inductor",
        description: 'Description of your first project. This can be multiple lines long and will expand when clicked.',
        technologies: ['Python', 'Arduino v2.3.3', 'C++'],
        link: 'https://github.com/yourusername/project-one'
    }
    // Add more projects here
];


document.addEventListener('DOMContentLoaded', () => {
    const finalText = "hey, I'm ";
    const name = "Andrés Gumucio";
    const typingText = document.querySelector('.typing-text');
    let index = 0;
    
    typingText.innerHTML = ''; // Clear initial content

    function type() {
        if (index < finalText.length + name.length) {
            if (index < finalText.length) {
                // Typing the first part
                typingText.innerHTML += finalText.charAt(index);
            } else {
                // Typing the name
                if (index === finalText.length) {
                    // Add span when starting the name
                    typingText.innerHTML += '<span class="highlight">';
                }
                typingText.querySelector('.highlight').innerHTML += name.charAt(index - finalText.length);
            }
            index++;
            setTimeout(type, 70); // Adjust speed here
        } else {
            // Remove the cursor animation after typing is complete
            typingText.style.borderRight = 'none';
            index = 0;
        }
    }

    // Start typing animation after a small delay
    setTimeout(type, 1000);
});


// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <h3>${project.title}</h3>
        <div class="project-description" style="display: none;">
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    // Add click event to toggle description
    card.addEventListener('click', () => {
        const description = card.querySelector('.project-description');
        const isExpanded = description.style.display !== 'none';
        
        // Toggle description
        description.style.display = isExpanded ? 'none' : 'block';
        card.classList.toggle('expanded');
    });

    return card;
}

// Initialize project grid
function initializeProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        projectsGrid.appendChild(createProjectCard(project));
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeProjects();
});

// js for the "about me" button
const container = document.querySelector('.about-me-container');
const button = document.querySelector('.about-me-button');
const content = document.querySelector('.about-me-content');
const projectSection = document.querySelector('#projects');
let isAnimating = false;

function toggleAboutMe(event) {
    if(event) event.stopPropagation();
    
    if (isAnimating) return;
    isAnimating = true;

    const ANIMATION_DURATION = 300; // 300ms = 0.3s to match our CSS

    if (container.classList.contains('open')) {
        // Closing animation
        container.classList.remove('open');
        
        setTimeout(() => {
            button.style.visibility = 'visible';
            button.style.opacity = '1';
            isAnimating = false;
        }, ANIMATION_DURATION);
    } else {
        // Opening animation
        container.classList.add('open');
        button.style.opacity = '0';
        button.style.visibility = 'hidden';
        
        setTimeout(() => {
            isAnimating = false;
        }, ANIMATION_DURATION);
    }
}

// Auto-open when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        toggleAboutMe();
    }, 500); // Small delay after page load before opening
});

// Keep only the click handlers
button.addEventListener('click', toggleAboutMe);
content.addEventListener('click', toggleAboutMe);

// Modified click-outside handler
document.addEventListener('click', (event) => {
    // Only close if:
    // 1. Click is outside the about-me container
    // 2. Click is NOT inside the projects section
    // 3. Container is currently open
    if (!container.contains(event.target) && 
        !projectsSection.contains(event.target) && 
        container.classList.contains('open')) {
        toggleAboutMe(event);
    }
});
