// Project data
const projects = [
    {
        title: ' A Data Acquisition System (DAQ)',
        description: 'Description of your first project. This can be multiple lines long and will expand when clicked.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        link: 'https://github.com/yourusername/project-one'
    },
    // Add more projects here
];

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

const container = document.querySelector('.about-me-container');
const button = document.querySelector('.about-me-button');
const content = document.querySelector('.about-me-content');
let isAnimating = false;

function toggleAboutMe(event) {
    event.stopPropagation();
    
    if (isAnimating) return;
    isAnimating = true;

    if (container.classList.contains('open')) {
        // Closing animation
        container.classList.remove('open');
        
        // Wait for the FULL closing animation to finish before showing button
        setTimeout(() => {
            // Only restore button visibility after content is fully closed
            button.style.visibility = 'visible';
            button.style.opacity = '1';
            isAnimating = false;
        }, 500); // Match this to your CSS transition time
    } else {
        // Opening animation
        button.style.visibility = 'hidden'; // Immediately hide button when opening
        button.style.opacity = '0';
        container.classList.add('open');
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
}

button.addEventListener('click', toggleAboutMe);
content.addEventListener('click', toggleAboutMe);

// Close when clicking outside
document.addEventListener('click', (event) => {
    if (!container.contains(event.target) && container.classList.contains('open')) {
        toggleAboutMe(event);
    }
});