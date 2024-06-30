/*
 * © Copyright (c) Betim Cakiqi 2024. All rights reserved.
 * This code is the property of Betim Cakiqi. The design elements are the property of Figma.
 * You may not reproduce, distribute, modify, or use this code without permission.
 */
class ProjectsComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <link rel="stylesheet" href="./components/projects/projects.css">
            <section id="projects" class="section">
                <div class="dev-projects-container">
                    <div class="dev-projects-title">
                        <span>Projects</span>
                    </div>
                    <hr id="seperator-project">
                    <div id="project-grid" class="project-img-info"></div>
                </div>
            </section>
        `;
        this.loadProjects();
    }

    loadProjects() {
        const projectData = [
            {
                imgSrc: "./assets/projects-images/project-1.png",
                title: "Marble Properties",
                description: "Designed and developed to showcase properties with elegance and functionality, the Real Estate Marble Properties Web offers a seamless user experience. The design, inspired by @tomaszubrik's Figma template, emphasizes clean aesthetics and intuitive navigation, ensuring prospective clients can explore listings effortlessly.",
                techStack: ["./assets/icons/projects-techstack/html5.svg", "./assets/icons/projects-techstack/css3.svg", "./assets/icons/projects-techstack/js.svg"],
                projectLink: "https://betimcakiqi.github.io/marble_properties/"
            },
            {
                imgSrc: "./assets/projects-images/comming soon.jfif",
                title: "In developement",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,",
                techStack: ["./assets/icons/projects-techstack/html5.svg", "./assets/icons/projects-techstack/css3.svg", "./assets/icons/projects-techstack/js.svg"],
                projectLink: "#projects"
            },
        ];

        const projectGrid = this.querySelector('#project-grid');
        projectGrid.innerHTML = projectData.map(project => `
            <projects-sec-div
                img-src="${project.imgSrc}"
                title="${project.title}"
                description="${project.description}"
                tech-stack="${project.techStack.join(',')}"
                project-link="${project.projectLink}">
            </projects-sec-div>
        `).join('');
    }
}

customElements.define('projects-sec', ProjectsComponent);

class ProjectsdivComponent extends HTMLElement {
    static get observedAttributes() {
        return ['img-src', 'title', 'description', 'tech-stack', 'project-link'];
    }

    attributeChangedCallback() {
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const imgSrc = this.getAttribute('img-src');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const techStack = this.getAttribute('tech-stack').split(',');
        const projectLink = this.getAttribute('project-link');

        this.innerHTML = `
            <link rel="stylesheet" href="./components/projects/projects-div.css">
            <div class="project-container">
                <div class="project-img">
                    <a href="${projectLink}">
                        <img src="${imgSrc}" alt="${title}">
                    </a>
                </div>
                <div class="project-title-txt">
                    <div class="project-title">
                        <span>${title}</span>
                    </div>
                    <hr id="project-seperator">
                    <div class="project-text-box">
                        <p>${description}</p>
                    </div>
                    <div class="project-tech-stack-img">
                        ${techStack.map(src => `<img src="${src}" alt="">`).join('')}
                    </div>
                    <div class="project-git-link-img">
                        <a href="https://github.com/betimcakiqi" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/icons/projects-techstack/project-icon-github.svg" alt="">
                        </a>
                        <a href="${projectLink}">
                            <img src="./assets/icons/projects-techstack/project-icon-link-to-web.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('projects-sec-div', ProjectsdivComponent);
