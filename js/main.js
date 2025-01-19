// Project data
const projects = [
    {
        title: 'Project One',
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