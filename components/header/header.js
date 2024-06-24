// Header start

class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
    <link rel="stylesheet" href="./components/header/header.css">
    <header>
        <nav class="navigation-bar">
            <div class="logo-and-navbar">
                <div class="logo">
                    <h1 class="logo-title">
                        <a href="https://bigbutaa.github.io/">~BE:TIM~</a>
                    </h1>
                </div>
                <div class="navbar">
                    <ul id="menuList">
                        <li><a class="nav-link nav-link-border" href="#home">Home</a></li>
                        <li><a class="nav-link nav-link-border" href="#about">About</a></li>
                        <li><a class="nav-link nav-link-border" href="#projects">Projects</a></li>
                        <li id="contact-link"><a class="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div id="burgerMenu" onclick="handleBurgerMenuAction()">
                <div id="menuIcon">
                    <img src="./assets/icons/header-menu/burger-menu-icon.svg" alt="">
                </div>
                <div id="closeIcon">
                    <img src="./assets/icons/header-menu/burger-menu-close-icon.svg" alt="">
                </div>
            </div>
        </nav>
    </header>
        `
    }
}
customElements.define('custom-header', HeaderComponent)

// Header end
// Header responsive menu start


const menuListElement = document.getElementById('menuList');
const menuIconElement = document.getElementById('menuIcon');
const closeIconElement = document.getElementById('closeIcon');

const handleBurgerMenuAction = () => {
    const menuListElement = document.getElementById('menuList');
    const menuIconElement = document.getElementById('menuIcon');
    const closeIconElement = document.getElementById('closeIcon');
    
    const isBurgerMenuOpened = menuListElement.style.maxHeight === '290px';
    const isMenuIconVisible = window.matchMedia("(max-width: 1166px)").matches;

    if (isBurgerMenuOpened) {
        menuListElement.style.maxHeight = '0px';
        if (isMenuIconVisible) {
            menuIconElement.style.transform = 'translateX(0%) scale(1) rotateY(0deg)';
            menuIconElement.style.opacity = '1';
            closeIconElement.style.transform = 'translateX(0%) scale(0) rotateY(180deg)';
            closeIconElement.style.opacity = '0';
        }
    } else {
        menuListElement.style.maxHeight = '290px';
        if (isMenuIconVisible) {
            menuIconElement.style.transform = 'translateX(0%) scale(0) rotateY(180deg)';
            menuIconElement.style.opacity = '0';
            closeIconElement.style.transform = 'translateX(0%) scale(0.8) rotateY(0deg)';
            closeIconElement.style.opacity = '1';
        }
    }
};

// Header responsive menu end