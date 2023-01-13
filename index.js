// components for responsible navigation and dropdown pages
let bars = document.querySelector(".bars")
let unorderedList= document.querySelector(".unorderedlist")

let dropMenu = document.querySelector(".droplet")
let dropedMenu = document.querySelector(".droped-menu")

let show = false
let showDropedMenu = false

// Adding click event to responsive navigation dropdown pages
bars.addEventListener("click",()=>{
    if(!show){
        unorderedList.style.display = "flex"
        show = true
    }else{
        unorderedList.style.display = "none"
        show = false
    }
})

dropMenu.addEventListener("click",()=>{
    if(!showDropedMenu){
        dropedMenu.style.display = "flex"
        showDropedMenu = true
    }else{
        dropedMenu.style.display = "none"
        showDropedMenu = false
    }
})

//Play video
let back = document.querySelector("#back")
let videobtn = document.querySelector("#play-video-div")
let video =  document.querySelector(".video")

videobtn.addEventListener("click",()=>{
        video.style.display = "flex"
})

back.addEventListener("click",()=>{
    video.style.display = "none"
})


//product features enabling
let showgps = false;
document.querySelector(".gps").addEventListener("click",()=>{
    if(!showgps){
        document.querySelector(".gps-div").style.display = "flex"
        showgps = true;
    }else{
        document.querySelector(".gps-div").style.display = "none"
        showgps = false;
    }
})

let showwr = false;
document.querySelector(".water-resistant").addEventListener("click",()=>{
    if(!showwr){
        document.querySelector(".wr-div").style.display = "flex"
        showwr = true;
    }else{
        document.querySelector(".wr-div").style.display = "none"
        showwr = false;
    }
})

let showbt = false;
document.querySelector(".bluetooth").addEventListener("click",()=>{
    if(!showbt){
        document.querySelector(".bt-div").style.display = "flex"
        showbt = true;
    }else{
        document.querySelector(".bt-div").style.display = "none"
        showbt = false;
    }
})