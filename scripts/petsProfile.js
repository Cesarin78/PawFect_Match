let images = [
    "/images/dog.jpeg",
    "/images/dog2.jpeg",
];

let index = 0;

function showImage(){
    document.getElementById("productImage").src = images[index];
}

function nextImage(){
    index++;

    if(index >= images.length){
        index = 0;
    }

    showImage();
}

function prevImage(){
    index--;

    if(index < 0){
        index = images.length - 1;
    }

    showImage();
}