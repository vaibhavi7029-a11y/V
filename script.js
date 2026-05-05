
// Scroll animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        let top = sec.getBoundingClientRect().top;
        let screen = window.innerHeight;

        if(top < screen - 100){
            sec.classList.add("show");
        }
    });
});

// Theme toggle
function toggleTheme(){
    document.body.classList.toggle("light");
}

// Scroll to contact
function scrollToContact(){
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
}

// Form
document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("msg").innerHTML="Message Sent ✅";
});
