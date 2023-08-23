const menu = document.querySelector('.menu');
const menu_line1 = document.querySelector('.menu-line-1');
const menu_line2 = document.querySelector('.menu-line-2');

menu.addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((curnt)=>{
        curnt.classList.toggle('change');
        menu_line1.classList.toggle('change');
        menu_line2.classList.toggle('change');

    })
})

document.querySelectorAll('.wrapper').forEach((item)=>{
    item.addEventListener('click',()=>{
        document.querySelectorAll('.target').forEach((curnt)=>{
            curnt.classList.remove('change');
            menu_line1.classList.remove('change');
            menu_line2.classList.remove('change');
            
        })
    })
})


const videos = document.querySelectorAll('.video');

videos.forEach((currentvideo)=>{
    currentvideo.addEventListener('mouseover',()=>{
    currentvideo.play();
    })
})


videos.forEach((currentvideo)=>{
    currentvideo.addEventListener('mouseleave',()=>{
    currentvideo.pause();
    // currentvideo.currentTime = 0;
    })
})