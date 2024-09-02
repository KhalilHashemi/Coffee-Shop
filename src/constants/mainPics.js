const selectFirstImage = (pathname) => {
    switch (pathname) {
        case "/cakes": {
            return "../../public/images/caramel_shortbread_tray_bake_banner_cover.webp";
        }
        case "/coffees": {
            return "../../public/images/arabica-coffee-paris-france-519.jpg";
        }
        case "/drinks": {
            return "../../public/images/how-ot-make-coffee-shop-style-drinks-at-home-header-800x450-1.jpg";
        }
        case "/about-us": {
            return "../../public/images/Coffee-Shop-1024x765.jpg";
        }
        case "/": {
            return "../../public/images/card-1.jpg";
        }
    }
};
const selectSecondImage = (pathname) => {
    switch (pathname) {
        case "/cakes": {
            return "../../public/images/cake-main-f2de8b7.jpg";
        }
        case "/coffees": {
            return "../../public/images/iced-coffee.jpg";
        }
        case "/drinks": {
            return "../../public/images/peppermint-tea-on-teacup-1417945-1200x826.jpg.webp";
        }
        case "/about-us": {
            return "../../public/images/PXL_20220830_183956022.PORTRAIT.0.jpg";
        }
        case "/": {
            return "../../public/images/top-view-cup-coffee-with-roasted-beans_52683-32340.avif";
        }
    }
};
const selectBackgroundImage = (pathname) => {
    switch (pathname) {
        case "/cakes": {
            return "../../public/images/1007_mark_weinberg_20140620_IMG_8781.0.jpg";
        }
        case "/coffees": {
            return "../../public/images/Background-2.jpg";
        }
        case "/drinks": {
            return "../../public/images/the-cup-of-latte-coffee-with-heart-shaped-latte-art-and-ai-generated-free-photo.jpg";
        }
        case "/about-us": {
            return "../../public/images/pngtree-an-old-coffee-shop-with-very-dark-walls-picture-image_2652909.jpg";
        }
        case "/": {
            return "../../public/images/Background-3.jpg";
        }
    }
};

export { selectFirstImage, selectSecondImage, selectBackgroundImage }
