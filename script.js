// owlCarousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:2000,
    // autoplayHoverPause:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

// Sidebar Menu
function showSidebar(){
    const sidebar = document.querySelector(".sidebar")

    sidebar.style.display = "flex";
}

function closeSidebar(){
    const sidebar = document.querySelector(".sidebar")

    sidebar.style.display = "none";
}


// GSAP

function page1Animation(){
    var tl = gsap.timeline()

// Nav
tl.from("nav h1, nav h4, nav button",{
    y: -40,
    opacity:0,
    delay:0.5,
    duration:0.7,
    stagger:0.15
})

// Navigating Section
tl.from(".center-left h1",{
    x: -200,
    opacity:0,
    duration:0.5,
},"-=0.3")

tl.from(".center-left p",{
    x: -100,
    opacity:0,
    duration:0.4,
})

tl.from(".center-left button",{
    opacity:0,
    duration:0.4
})

tl.from(".center-right img",{
    opacity:0,
    duration:0.5,
    x:200
},"-=0.7")

tl.from(".section1-btm img",{
    opacity:0,
    y:30,
    stagger:0.15,
    duration:0.6
})
}

// Sevices section

function page2Animation(){

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {

    
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:".services",
           
            scroller:"body",
            start:"top 80%",
            end:"top 40%",
            scrub:2
        }
    })
    
    tl2.from(".services",{
        y:30,
        opacity:0,
        duration:0.5 
    })
    
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    
    
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
    
})
    
}


// Case study section

function page3Animation(){

    let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {

    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:".sec3-top",
            scroller:"body",
            // markers:true,
           start:"top 80%",
            end:"top 0%",
            scrub:2
        }
    })
    
    tl3.from(".center2-left h1",{
        x:-200,
        opacity:0,
        duration:0.5 
    })
    
    tl3.from(".center2-left p",{
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl3.from(".center2-left button",{
        opacity:0,
        duration:0.5 
    })
    
    tl3.from(".center2-right",{
        x:300,
        opacity:0,
        duration:0.5 
    })
    
    tl3.from(".case-study",{
        y:-30,
        duration:0.5,
        
    })
    tl3.from(".case-study-btm",{
        x:-1200,
        duration:0.5,
        
    })
})
}




page1Animation()
page2Animation()
page3Animation()


