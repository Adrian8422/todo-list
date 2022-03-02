class TypeText extends HTMLElement {
  shadow: ShadowRoot;
  tags: string[] = ["h1", "h2", "p"];
  tag: string = "p";
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    if (this.tags.includes(this.getAttribute("tag"))) {
      this.tag = this.getAttribute("tag") || this.tag;
    }
    console.log(this.tag);
    this.render();
  }
  render() {
    const tagText = document.createElement(this.tag);
    tagText.textContent = this.textContent;
    this.shadow.appendChild(tagText);
  }
}
customElements.define("text-type", TypeText);
