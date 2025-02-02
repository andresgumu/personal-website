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
    const titleText = "hey, I'm ";
    const name = "Andrés Gumucio";
    const subtitleText = "I am an engineering student at Texas A&M.";
    const typingTitle = document.querySelector('.typing-text');
    const typingSubtitle = document.querySelector('.typing-subtitle');
    const nav = document.querySelector('nav');
    const aboutMeContainer = document.querySelector('.about-me-container');
    const projectsSection = document.querySelector('#projects');
    const footer = document.querySelector('footer');
    let index = 0;
    
    typingTitle.innerHTML = '';
    typingSubtitle.innerHTML = '';

    function showElements() {
        // Show about me container and its contents
        aboutMeContainer.classList.add('visible-content');
        aboutMeContainer.querySelector('.about-me-text').style.visibility = 'visible';
        aboutMeContainer.querySelector('.about-me-text').style.opacity = '1';
        aboutMeContainer.querySelector('.about-me-image').style.visibility = 'visible';
        aboutMeContainer.querySelector('.about-me-image').style.opacity = '1';
        
        // Then show other elements
        setTimeout(() => {
            nav.classList.add('nav-visible');
            
            setTimeout(() => {
                projectsSection.classList.add('projects-visible');
                
                setTimeout(() => {
                    footer.classList.add('footer-visible');
                }, 500);
            }, 500);
        }, 500);
    }

    function typeSubtitle() {
        if (index < subtitleText.length) {
            typingSubtitle.innerHTML += subtitleText.charAt(index);
            index++;
            setTimeout(typeSubtitle, 30);
        } else {
            typingSubtitle.style.borderRight = 'none';
            setTimeout(showElements, 500); 
        }
    }

    function typeTitle() {
        if (index < titleText.length + name.length) {
            if (index < titleText.length) {
                typingTitle.innerHTML += titleText.charAt(index);
            } else {
                if (index === titleText.length) {
                    typingTitle.innerHTML += '<span class="highlight">';
                }
                typingTitle.querySelector('.highlight').innerHTML += name.charAt(index - titleText.length);
            }
            index++;
            setTimeout(typeTitle, 30);
        } else {
            typingTitle.style.borderRight = 'none';
            index = 0;
            setTimeout(typeSubtitle, 500);
        }
    }

    typeTitle();
});


// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <h3>${project.title}</h3>
        <div class="project-description">
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;


    card.classList.add('expanded');

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
    const projectsSection = document.querySelector('#projects');
    const footer = document.querySelector('footer');

    if (container.classList.contains('open')) {
        // Closing animation
        container.classList.remove('open');
        projectsSection.classList.remove('visible-content');
        footer.classList.remove('visible-content');
        
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
            projectsSection.classList.add('visible-content');
            footer.classList.add('visible-content');
            isAnimating = false;
        }, ANIMATION_DURATION);
    }
}


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
