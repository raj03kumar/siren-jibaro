// Get elements from DOM
const modalBtn=document.querySelector('.yt-modal-btn');
const modal=document.querySelector('.modal-bg');

// Add click event to the button
modalBtn.addEventListener('click', ()=>{
    // Add youtube embed to the HTML

    // You can get the embed code by right clcicking any youtube video and selecting 'ember code'

    modal.innerHTML=`<div class="modal">
    <iframe width="892" height="502" src="https://www.youtube.com/embed/hrRvFS1qIAQ" title="Jibaro | Love, Death and Robots" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`;
    // Show the modal
    modal.style.display="flex";
    // Smooth opacity transition
    setTimeout(()=>{
        modal.style.opacity="1";
    },50);
});

// Add click event to the modal bg
modal.addEventListener('click', ()=>{
    // Remove youtube ember to the HTML

    // This is a simple way to stop the video from playing from playing when you close the modal
    modal.innerHTML='';
    // smooth opacity transition
    modal.style.opacity="0";
    setTimeout(()=>{
        // Hide the modal when the transition is done
        modal.style.display="none";
    },450);
});


// disabling inspect element
document.addEventListener("contextmenu", function(e){
    e.preventDefault(); //this prevents right click
});
document.onkeydown=function(e){
    if(event.keycode==123){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="I".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="C".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode=="J".charCodeAt(0)){
        return false;
    }
    if(e.ctrlKey && e.keyCode=="U".charCodeAt(0)){
        return false;
    }
};