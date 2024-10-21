const backgroundImages = [
    '../images/pexels-pavel-danilyuk-7108392.jpg',
    '../images/pexels-tima-miroshnichenko-8376321.jpg',
    '../images/pexels-tara-winstead-7722913.jpg',
    '../images/pexels-tara-winstead-7722680.jpg',
    '../images/pexels-pixabay-415779.jpg'
];

const images = [];
    
    backgroundImages.forEach((url, index) => {
        const img = new Image();
        img.src = url;
        images[index] = img;
    });

    let currentImageIndex = 0;
    const bgImages = document.querySelectorAll('.hero .bg-image');
    
    function changeBackgroundImage() {
        bgImages[currentImageIndex].classList.remove('active');
        
        currentImageIndex = (currentImageIndex + 1) % bgImages.length;
        
        bgImages[currentImageIndex].classList.add('active');
    }

    bgImages[currentImageIndex].classList.add('active');
    
    setInterval(changeBackgroundImage, 7000);