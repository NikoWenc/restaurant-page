
export default class AppendElement {
    constructor(containerClassName){
        this.parentDiv = document.querySelector(containerClassName);
        this.childElement;
    };

    append(element){
        this.childElement = document.createElement(element);
        this.parentDiv.appendChild(this.childElement);
        return this;
    };

    addClass(className){
        this.childElement.classList.add(className);
        return this;
    };

    addText(text){
        this.childElement.textContent = text;
        return this;
    };

    imgSrc(src, alt){
        this.childElement.src = src;
        this.childElement.alt = alt;
        return this;
    };
}