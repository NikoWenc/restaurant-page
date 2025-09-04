import '../styles/style.scss';
import AppendElement from './appendElementClass';
import salmon from '../images/salmon.jpg';
import steak from '../images/steak.jpeg';
import pasta from '../images/pasta.jpg';

export default function menu() {

    const content = new AppendElement('.content')
        .append('div')
        .addClass('menu');

    const menuSection = new AppendElement('.menu')
        .append('h2')
        .addText('Our Menu')
        .append('div')
        .addClass('menu-items');

    const menuItemsSection = new AppendElement('.menu-items')

        .append('div')
        .addClass('items')
        .appendToThisChild('img', 'src', salmon)
        .appendToThisChild('h2')
        .addTextToThisChild('Grilled Salmon')
        .appendToThisChild('p')
        .addTextToThisChild('$18')

        .append('div')
        .addClass('items')
        .appendToThisChild('img', 'src', steak)
        .appendToThisChild('h2')
        .addTextToThisChild('Special Steak')
        .appendToThisChild('p')
        .addTextToThisChild('$25')

        .append('div')
        .addClass('items')
        .appendToThisChild('img', 'src', pasta)
        .appendToThisChild('h2')
        .addTextToThisChild('Pasta Delight')
        .appendToThisChild('p')
        .addTextToThisChild('$15');
        
}