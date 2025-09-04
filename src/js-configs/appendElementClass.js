
export default class AppendElement {
    constructor(containerClassName){
        this.parentDiv = document.querySelector(containerClassName);
        this.childElement;
        this.childElementChild;
    };

    // for direct child
    append(element){
        this.childElement = document.createElement(element);
        this.parentDiv.appendChild(this.childElement);
        return this;
    };

    addClass(className){
        this.childElement.classList.add(className);
        this.childElement.id = className;
        return this;
    };

    addText(text){
        this.childElement.textContent = text;
        return this;
    };

    addAttribute(attribute, value){
        this.childElement.setAttribute(attribute, value);
        return this;
    };

    // for child of child
    appendToThisChild(element, attribute, value){
        this.childElementChild = document.createElement(element);

        if (attribute && value) {
            this.childElementChild.setAttribute(attribute, value)
        };
        
        this.childElement.appendChild(this.childElementChild);
        return this;
    }

    addTextToThisChild(text){
        this.childElementChild.textContent = text;
        return this;
    }
}