const c_item_width = 459 + 10; //5px margin
let movable = document.getElementById('carousel2');
let total_distance = c_item_width;


let interval_id = setInterval(carousel2_update, 3000);

function carousel2_update(){
    movable.style = 'transform: translateX(-' + total_distance + 'px)';
    let current_items = document.getElementsByClassName('carousel_item2');
    setTimeout(() => {
        let tmp = current_items[0];
        current_items[0].remove();
        movable.appendChild(tmp);
        movable.style.transition = 'none';
        movable.style.transform = 'translateX(0)';
    }, 500);
}

function open_menu(){
    document.querySelector('.hamburger_menu').style = 'display: flex';
}
function close_menu(){
    document.querySelector('.hamburger_menu').style = 'display: none';
}

window.addEventListener('click', (event)=>{
    if(!event.target.closest('.hamburger_menu') && !event.target.closest('.hamburger_button')){
        close_menu();
    }
})