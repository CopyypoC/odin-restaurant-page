import { elementFromHtml } from "./elementFromHtml.js";

export const home = elementFromHtml(`
<div class="home-container">
    <div class="home-header">
        <h1>Sally's Single Soft Serve</h1>
    </div>
    <section class="home-about">
        Sally's is all about quality over quantity.
        The one special soft serve to rule them all!
        That limited access is exactly what gives this
        experience a unique meaning that you won't forget
        for the rest of your life.
    </section>
    <section class="home-hours">
        <ul>
            <li>Sunday: CLOSED</li>
            <li>Monday: CLOSED</li>
            <li>Tuesday: CLOSED</li>
            <li>Wednesday: 3:30pm - 3:31pm</li>
            <li>Thursday: CLOSED</li>
            <li>Friday: CLOSED</li>
            <li>Saturday: CLOSED</li>
        </ul>
    </section>
    <section class="home-location">
        <p>000 Nowhere Lane, Holy Palace, Vatican City</p>
    </section>
</div>
`);