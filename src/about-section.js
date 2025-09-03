import './styles/style.scss';
import AppendElement from './appendElementClass';
import chefImage from './images/cookin-like-a.jpg';

export default function about () {
    const contentSection = new AppendElement('.content')
    .append('div')
    .addClass('about');

    const aboutSection = new AppendElement('.about')
        .append('div')
        .addClass('about-us')
        .append('div')
        .addClass('about-us-chef');

    const aboutUsSection = new AppendElement('.about-us')
        .append('h2')
        .addText('About Us')
        .append('p')
        .addText(
            "At MyRestaurant, we believe that great food brings people together. Our menu is crafted with fresh, locally sourced ingredients and inspired by both timeless recipes and modern flavors. From the moment you step through our doors, you’ll be welcomed with warm hospitality, a cozy atmosphere, and dishes prepared with care. Whether you’re here for a quick bite, a family gathering, or a special celebration, our goal is to make every meal memorable."
        );

    const aboutUsChefSection = new AppendElement('.about-us-chef')
        .append('img')
        .imgSrc(chefImage, 'chef');
}
