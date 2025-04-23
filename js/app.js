let images,
    loadedImage = 0;

const preload = () => {
    images = new Array(
        // list images needed from the assets folder
    );

    images.forEach((imageSrc, i) => {
        const imageObj = new Image();
        imageObj.src = imageSrc;
        imageObj.addEventListener("load", () => iLoad(i), false);
    });
};

const iLoad = () => {
    loadedImage++;
    if (images.length === loadedImage) {
        init();
    }
};

const init = () => {
    main.style.visibility = "visible";
};
