import { elementFromHtml } from "./elementFromHtml.js";

export const contactUs = elementFromHtml(`
<div class="contact-container">
    <div class="contact-header">
        <h1>Contact Us</h1>
    </div>
    <div class="contact-info">
        <h2>Sally</h2>
        <p>Owner</p>
        <p>000-000-0001</p>
        <p>sally@sallysoftserve.com</p>
    </div>
    <div class="contact-info">
        <h2>Dalton, The Blessed One</h2>
        <p>Chef / Golden Retriever</p>
        <p>123-123-1234</p>
        <p>pup@sallysoftserve.com</p>
    </div>
</div>
`);
