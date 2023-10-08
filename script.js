//////////////////////////////////////////////////////////////////
// SET CURRENT YEAR //////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK 
const btnNavEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click",function(){
    headerEl.classList.toggle("nav-open")
})

//////////////////////////////////////////////////////////////////////
// SMOOTH SCROLLING ANIMATION

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const href = link.getAttribute ("href");

        // SCROLL BACK TO TOP
        if (href === "#") 
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // SCROLL TO OTHER LINKS 
        if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({behavior:"smooth"});
        }

        // CLOSE MOBILE NAVIGATION 
       if (link.classList.contains("main-nav-link"))   
       headerEl.classList.toggle("nav-open");

    });
});

/////////////////////////////////////////////////////////////////////////////
// STICKY NAVIGATION 


