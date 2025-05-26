function filterGallery(category){
    const items=document.querySelectorAll('.gallery_items');
    items.forEach(item=>{
        item.style.display=category==='all' || item.classList.contains(category) ? 'block' : 'none';
    });
}

function openFullScreen(element){
    const imgSrc=element.querySelector('img').src;
    const fullScreen=document.getElementById('fullScreen');
    document.getElementById('fullScreen_img').src=imgSrc;
    fullScreen.style.display='flex';
}

function closeFullScreen(){
    document.getElementById('fullScreen').style.display='none';
}