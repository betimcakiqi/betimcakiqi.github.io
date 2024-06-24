class ContactComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML =
            `
    <link rel="stylesheet" href="./components/contact-form/contact.css">
    <section id="contact" class="section">
        <div class="contact-section-container">
            <div class="contact-title">
                <span>Contact</span>
            </div>
            <hr id="contact-seperator">
            <div class="contact-form-container">
                <form action="https://formcarry.com/s/uGLqa5jmEHa" method="post">
                    <div class="contact-form-information-only">
                        <div class="contact-form-information">
                            <p id="input-txtarea-title">Name</p>
                            <input type="text" placeholder="John Doe" required>
                        </div>
                        <div class="contact-form-information">
                            <p id="input-txtarea-title">Email Address</p>
                            <input type="email" placeholder="example@example.com" required>
                        </div>
                    </div>
                    <div class="contact-form-message-submit-only">
                        <div class="contact-form-information">
                            <p id="input-txtarea-title">Your message</p>
                            <textarea name="" id="" placeholder="Enter your message here" maxlength="190" required></textarea>
                        </div>
                        <div class="contact-form-information">
                            <input id="contact-form-submit" type="submit" value="Submit">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
        `
    }
}
customElements.define('contact-form', ContactComponent)