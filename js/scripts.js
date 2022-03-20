let bodyscroll = document.querySelector("html,body");
let navbar = document.querySelector("navbar");
window.addEventListener("scroll", ()=> {
 bodyscroll.scrollTop >= 200 ? navbar.classList.add("bg-light", "shadow") : navbar.classList.remove("bg-light", "shadow")
    // if (bodyscroll.scrollTop >= 200) {
    //     navbar.classList.add("bg-light" , "shadow")
    // }
    // else {
    //     navbar.classList.remove("bg-light" , "shadow")
    // }
})
let buttom = document.querySelector(".gtn")
window.addEventListener("scroll", ()=> {
    if (bodyscroll.scrollTop >= 200) {
        buttom.classList.remove("gtn")
        buttom.addEventListener("click", () => {
            bodyscroll.scrollTo(0, 0);

        });

        
    }else{
        buttom.classList.add("gtn")
    }
} )