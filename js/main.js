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
];

// Blog posts data
const posts = [
    {
        id: 'post-1',
        title: 'First Blog Post Title',
        description: 'A brief description of what this post is about. This will appear in the preview card.',
        date: 'January 15, 2024',
        url: '/posts/post-1.html'
    },
    {
        id: 'post-2',
        title: 'Second Blog Post Title',
        description: 'Another interesting post description that will grab readers attention.',
        date: 'January 20, 2024',
        url: '/posts/post-2.html'
    },
    {
        id: 'post-3',
        title: 'Third Blog Post Title',
        description: 'Yet another fascinating topic to explore in this blog post.',
        date: 'January 25, 2024',
        url: '/posts/post-3.html'
    }
];

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
    
    // Add expanded class by default
    card.classList.add('expanded');

    return card;
}

// Function to create post cards
function createPostCard(post) {
    const card = document.createElement('a');
    card.href = post.url;
    card.className = 'post-card';
    
    card.innerHTML = `
        <h3 class="post-title">${post.title}</h3>
        <p class="post-description">${post.description}</p>
    `;
    
    return card;
}

// Initialize project grid
function initializeProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projects.forEach(project => {
            projectsGrid.appendChild(createProjectCard(project));
        });
    }
}

// Initialize writing section
function initializeWriting() {
    const postsList = document.querySelector('.posts-list');
    if (postsList) {
        posts.forEach(post => {
            postsList.appendChild(createPostCard(post));
        });
    }
}

// existing typing animation code
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
        aboutMeContainer.classList.add('visible-content');
        aboutMeContainer.querySelector('.about-me-text').style.visibility = 'visible';
        aboutMeContainer.querySelector('.about-me-text').style.opacity = '1';
        aboutMeContainer.querySelector('.about-me-image').style.visibility = 'visible';
        aboutMeContainer.querySelector('.about-me-image').style.opacity = '1';
        
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
    initializeProjects();
    initializeWriting();
});