class Header extends HTMLElement {
  shadow: ShadowRoot;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }
  render() {
    const style = document.createElement("style");
    style.innerHTML = `

    .root{
        display: flex;
        height: 80px;
        width: 100%;
        background-color: #9cbbe9;
        justify-content: center;
        align-items: center;
        
    }
    .title-header{
        
        font-size: 18px;
        color: blue;


    }

    
    `;
    this.shadow.appendChild(style);
    const header = document.createElement("header");
    header.innerHTML = `
    
    <header class="root">
    <h2 class="title-header">Header ?¡?¡?</h2>
    </header>
    
    `;
    this.shadow.appendChild(header);
  }
}
customElements.define("header-element", Header);
