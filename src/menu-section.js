import './styles/style.scss';
import AppendElement from './appendElementClass';
import salmon from './images/salmon.jpg';
import steak from './images/steak.jpeg';
import pasta from './images/pasta.jpg';

export default function menu() {
    const content = new AppendElement('.content')
        .append('div')
        .addClass('menu');

    const menuSection = new AppendElement('.menu')
        .append('h2')
        .append('div')
        .addClass('menu-items');

    const menuItemsSection = new AppendElement('.menu-items')
        .append('div')
        .addClass('items')
        .append('div')
        .addClass('items')
        .append('div')
        .addClass('items');

    const items = document.getElementsByClassName('items');
    const itemsArr = Array.from(items);
    const images = [salmon, steak, pasta];
    const imagesAlt = ['salmon', 'steak', 'pasta'];
    const imagesTitle = ['Grilled Salmon', 'Special Steak', 'Pasta Delight'];
    const imagesPrice = [18, 25, 15];
    

    for (let i = 0; i < itemsArr.length; i++) {
        let item = itemsArr[i];
        item = new AppendElement('.items')

        .append('img')
            .imgSrc(images[i], imagesAlt[i])
        .append('h2')
            .addText(imagesTitle[i])
        .append('p')
            .addText(`$${imagesPrice[i]}`);

    }


    // const items = new AppendElement('.items')
    //     .append('img');
        
}