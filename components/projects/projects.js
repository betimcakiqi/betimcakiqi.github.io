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
                imgSrc: "/assets/projects-images/project-1.png",
                title: "Marble Properties",
                description: "Designed and developed to showcase properties with elegance and functionality, the Real Estate Marble Properties Web offers a seamless user experience. The design, inspired by @tomaszubrik's Figma template, emphasizes clean aesthetics and intuitive navigation, ensuring prospective clients can explore listings effortlessly.",
                techStack: ["./assets/icons/html5.svg", "./assets/icons/css3.svg", "./assets/icons/js.svg"],
                projectLink: "https://betimcakiqi.github.io/marble_properties/"
            },
            {
                imgSrc: "/assets/projects-images/project-1.png",
                title: "Marble Properties",
                description: "Designed and developed to showcase properties with elegance and functionality, the Real Estate Marble Properties Web offers a seamless user experience. The design, inspired by @tomaszubrik's Figma template, emphasizes clean aesthetics and intuitive navigation, ensuring prospective clients can explore listings effortlessly.",
                techStack: ["./assets/icons/html5.svg", "./assets/icons/css3.svg", "./assets/icons/js.svg"],
                projectLink: "https://betimcakiqi.github.io/marble_properties/"
            },
            {
                imgSrc: "/assets/projects-images/project-1.png",
                title: "Marble Properties",
                description: "Designed and developed to showcase properties with elegance and functionality, the Real Estate Marble Properties Web offers a seamless user experience. The design, inspired by @tomaszubrik's Figma template, emphasizes clean aesthetics and intuitive navigation, ensuring prospective clients can explore listings effortlessly.",
                techStack: ["./assets/icons/html5.svg", "./assets/icons/css3.svg", "./assets/icons/js.svg"],
                projectLink: "https://betimcakiqi.github.io/marble_properties/"
            },
            {
                imgSrc: "/assets/projects-images/project-1.png",
                title: "Marble Properties",
                description: "Designed and developed to showcase properties with elegance and functionality, the Real Estate Marble Properties Web offers a seamless user experience. The design, inspired by @tomaszubrik's Figma template, emphasizes clean aesthetics and intuitive navigation, ensuring prospective clients can explore listings effortlessly.",
                techStack: ["./assets/icons/html5.svg", "./assets/icons/css3.svg", "./assets/icons/js.svg"],
                projectLink: "https://betimcakiqi.github.io/marble_properties/"
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
                    <a href="${projectLink}" target="_blank" rel="noopener noreferrer">
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
                            <img src="./assets/icons/project-icon-github.svg" alt="">
                        </a>
                        <a href="${projectLink}" target="_blank" rel="noopener noreferrer">
                            <img src="./assets/icons/project-icon-link-to-web.svg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('projects-sec-div', ProjectsdivComponent);
