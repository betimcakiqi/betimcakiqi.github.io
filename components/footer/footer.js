class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
        <link rel="stylesheet" href="./components/footer/footer.css">
        <footer>
            <div class="social-media">
                <a href="https://www.linkedin.com/in/betim-cakiqi-60919b217/" target="_blank" rel="noopener noreferrer"><img
                        src="./assets/icons/social-media-icons/linkedin-icon.svg" alt="LinkedIn"></a>
                <a href="https://www.instagram.com/betimcakiqii/" target="_blank" rel="noopener noreferrer"><img
                        src="./assets/icons/social-media-icons/instagram-icon.svg" alt="Instagram"></a>
                <a href="https://www.facebook.com/betimcakiqii/" target="_blank" rel="noopener noreferrer"><img
                        src="./assets/icons/social-media-icons/facebook-icon.svg" alt="Facebook"></a>
                <a href="https://x.com/betiimc" target="_blank" rel="noopener noreferrer"><img
                        src="./assets/icons/social-media-icons/twitter-icon.svg" alt="Twitter"></a>
            </div>
            <span>
                © 2024 <strong>Betim Cakiqi</strong>. All rights reserved. Design inspired by <a
                    href="https://www.figma.com/@amansinghbhogal"><strong>Aman Singh Bhogal</strong></a> on Figma
            </span>
        </footer>
            `
    }
}
customElements.define('custom-footer', FooterComponent)