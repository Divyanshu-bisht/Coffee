// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Track each section as the user scrolls
const sections = document.querySelectorAll('section'); // Select all sections

// Set up ScrollTrigger for each section
sections.forEach((section) => {
    ScrollTrigger.create({
        trigger: section, // The section that is being triggered
        start: 'top center', // When the top of the section hits the center of the viewport
        end: 'bottom center', // When the bottom of the section hits the center
        onEnter: () => setActiveLink(section.id), // Trigger when entering the section
        onLeave: () => removeActiveLink(section.id), // Trigger when leaving the section
        onEnterBack: () => setActiveLink(section.id), // Trigger when entering the section from below
        onLeaveBack: () => removeActiveLink(section.id), // Trigger when leaving the section upwards
        markers: false // Turn off for production, turn on for debugging
    });
});

// Function to highlight the active link and update the URL
function setActiveLink(id) {
    // Update the URL without reloading the page
    history.pushState(null, null, `#${id}`);

    // Update active link
    document.querySelectorAll('nav ul a').forEach((link) => {
        link.classList.remove('active'); // Remove 'active' from all links
    });

    const activeLink = document.querySelector(`nav ul a[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.add('active'); // Add 'active' to the current link
    }
}

// Function to remove the 'active' class from links
function removeActiveLink(id) {
    const activeLink = document.querySelector(`nav ul a[href="#${id}"]`);
    if (activeLink) {
        activeLink.classList.remove('active');
    }
}

// Ensure the page always reloads and starts from the home section
window.addEventListener('load', () => {
    // Clear any hash in the URL to ensure it reloads to home
    if (window.location.hash !== '#home') {
        window.location.hash = '#home'; // Set the hash to #home if it's not already
    }

    // Scroll to the home section after a slight delay to let the page load
    setTimeout(() => {
        const homeSection = document.querySelector('#home');
        if (homeSection) {
            // Ensure the page is scrolled to the #home section
            homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100); // Delay of 100ms to ensure the DOM is fully loaded
});



let tl=gsap.timeline()

tl.from(".front",{
    y:1000,
    duration:1

})
tl.from("#coffe",{
    y:800,
    duration:1,
    scale:2

})     
tl.from(".front h1",{
    y:1000,
    duration:1

})   
tl.from("#coffeebean1",{
    y:800,
    duration:1,
    scale:1

})
tl.from("#coffeebean2",{
    y:800,
    duration:1,
    scale:3

})   
tl.from("#coffeebean3",{
    y:800,
    duration:1,
    scale:3

})   
tl.from("#coffeebean4",{
    y:800,
    duration:.9,
    scale:2

})   
tl.from("#coffeebean5",{
    y:800,
    duration:.9,
    scale:2

})     
let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        scrub:2,
        markers:false,
        start:"0% 90%",
        end:"50% 50%"
    }
})

tl2.to("#coffe",{
    top:770,
    left:90, 
    
},"hi")

tl2.to("#coffeebean1",{
    top:710,
    left:253, 
    rotate:142,
    scale:0.9
},"hi")
  
let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:"#menu",
        scroller:"body",
        scrub:2,
        markers:false,
        start:"0% 90%",
        end:"50% 50%"
    }
})

gsap.to("#menu", {
    "--color": "black",
    scrollTrigger: {
      trigger:"#menu",
      start: 0,
      end: "max",
      scrub: true
    }
  });

tl3.to("#coffe",{
    top:1470,
    left:590, 
    duration:1
},"hi")
tl3.to("#coffeebean1",{
    top:1500,
    left:760, 
    rotate:23,
    scale:0.9,
    duration:1
},"hi")

tl3.from("#can1",{
    x:-300,
    duration:1
},"hi")

tl3.from("#can2",{
    x:300,
    duration:1
},"hi")

tl3.from("#bean1",{
    x:-300,
    duration:1,
    rotate:200
},"hi")

tl3.from("#bean2",{
    x:300,
    duration:1,
    rotate:200
},"hi")
  
let tl4=gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        scroller:"body",
        scrub:2,
        markers:false,
        start:"0% 90%",
        end:"50% 50%"
    }
})
tl4.to("#coffe",{
    top:2170,
    left:900, 
    duration:1,
    
},"hi")
// tl4.to("#coffeebean1",{
//     top:2200,
//     left:1050, 
//     rotate:120,
//     scale:0.9,
//     zIndex:3,
//     duration:1  
// },"same")
tl4.to("#can1",{
    top:700,
    left:590,
    duration:1,
    scale:0.9,
    rotate:-16
},"hi")

tl4.to("#can2",{
    top:700,
    left:140,
    duration:1,
    scale:0.9,
    rotate:16
},"hi")
