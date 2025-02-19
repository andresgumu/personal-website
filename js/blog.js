// Configure marked options for Markdown parsing
marked.setOptions({
    breaks: true,     // Converts single line breaks to <br>
    gfm: true,        // Enables GitHub Flavored Markdown
    highlight: function(code, lang) {
        // Handle code syntax highlighting
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return hljs.highlightAuto(code).value;
    }
});

// Function to calculate reading time
function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readingTime} min read`;
}

// Initialize blog post
function initializeBlogPost() {
    const content = document.getElementById('content');
    if (content) {
        // Get and convert Markdown content
        const markdown = content.innerHTML.trim();
        content.innerHTML = marked.parse(markdown);

        // Update reading time
        const readingTimeElement = document.querySelector('.reading-time');
        if (readingTimeElement) {
            readingTimeElement.textContent = calculateReadingTime(markdown);
        }

        // Apply syntax highlighting to code blocks
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeBlogPost);