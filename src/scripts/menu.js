import { elementFromHtml } from "./elementFromHtml.js";

export const menu = elementFromHtml(`
<div class="menu-container">
    <div class="menu-header">
        <h1>Menu</h1>
    </div>
    <div class="item-container">
        <h2 class="item-name">Soft Serve</h2>
        <p class="item-price">$420.69</p>
        <p class="item-description">White mint chocolate chip but uses red 40 to dye it pink</p>
        <p class="item-warning">WARNING: Red dye 40 contains benzene, a known cancer-causing substance.</p>
    </div>
</div>
`);