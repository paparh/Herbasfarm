///////////////////////// display modal
const links = document.querySelectorAll('.work-item__icon');

console.dir(links)
links.forEach(function(item){
    item.addEventListener('click',function(event){
        showModal(event)
        
    })
})
// hide modal
document.querySelector('.work-modal__close').addEventListener('click',function(){
    closeModal()
})

// show modal
showModal = function(event){
    event.preventDefault();
    if (event.target.parentElement.classList.contains('work-item__icon'));
    
    let id = event.target.parentElement.dataset.id;
    const modal = document.querySelector('.work-modal');
    const modalItem = document.querySelector('.work-modal__item');

    modal.classList.add('work-modal--show');
    modalItem.style.backgroundImage = `url(../images/work-${id}.jpg)`;
}
// hide modal
closeModal = function(){
    document.querySelector('.work-modal').classList.remove('work-modal--show')
}
