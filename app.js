const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 67;

const currentFrame = (index) => `./Animation/${(index + 1).toString()}.jpg`;
const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

gsap.to(ball, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: "canvas",
        end: "400%",
    },
    onUpdate: render,
})

gsap.fromTo(".descriptionb", { opacity: 1, }, {
    opacity: 1,
    scrollTrigger: {
        scrub: true,
        start: '-0%',
        end: '2%',
    },
    onComplete: () => {
        gsap.to(".descriptionb", {
            opacity: 0,
        });
    }
});
gsap.fromTo(".descriptionb", { y: 0, }, {
    y: "0%",
    scrollTrigger: {
        scrub: true,
        start: '0%',
        end: '2%',
    },
    onComplete: () => {
        gsap.to(".descriptionb", {
            y: 100
        });
    }
});

gsap.fromTo(".descriptiona", { opacity: 0, }, {
    opacity: 1,
    scrollTrigger: {
        scrub: true,
        start: '0%',
        end: '60%',
    },
    onComplete: () => {
        gsap.to(".descriptiona", {
            opacity: 0,
        });
    }
});
gsap.fromTo(".descriptiona", { x: -2200, }, {
    x: "-5%",
    scrollTrigger: {
        scrub: true,
        start: '-10%',
        end: '40%',
    },
    onComplete: () => {
        gsap.to(".descriptiona", {
            x: -2200
        });
    }
});


gsap.fromTo(".description", { opacity: 0,}, {
    opacity: 1,
    scrollTrigger: {
        scrub: true,
        start: '35%',
        end: '50%',
    },
    onComplete: () => {
        gsap.to(".description", {
            opacity: 0,
        });
    }
});
gsap.fromTo(".description", {x: 2000, }, {
    x: "5%",
    scrollTrigger: {
        scrub: true,
        start: '0%',
        end: '50%',
    },
    onComplete: () => {
        gsap.to(".description", {
            x: 2000
        });
    }
});



gsap.fromTo(".descriptionc", { opacity: 0, }, {
    opacity: 1,
    scrollTrigger: {
        scrub: true,
        start: '40%',
        end: '73%',
    },
    onComplete: () => {
        gsap.to(".descriptionc", {
            opacity: 0,
        });
    }
});
gsap.fromTo(".descriptionc", { y: -2200, }, {
    y: "-15%",
    scrollTrigger: {
        scrub: true,
        start: '40%',
        end: '73%',
    },
    onComplete: () => {
        gsap.to(".descriptionc", {
            y: -2200
        });
    }
});


images[0].onload = render;

function render() {

    context.canvas.width = images[0].width;
    context.canvas.height = images[0].height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[ball.frame], 0, 0);
}
