const selectClass = (pathname) => {
    switch (pathname) {
        case "/cakes": {
            return "cake";
        }
        case "/coffees": {
            return "coffees";
        }
        case "/drinks": {
            return "drinks";
        }
        case "/about-us": {
            return "about-us";
        }
        case "/": {
            return null;
        }
    }
};

const selectStyle = (pathname) => {
    switch (pathname) {
        case "/cakes": {
            return { left: "26%" };
        }
        case "/coffees": {
            return { left: "24%" };
        }
        case "/drinks": {
            return { left: "22%" };
        }
        case "/about-us": {
            return { left: "18%" };
        }
    }
};
export { selectClass, selectStyle }