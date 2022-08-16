$(document).ready(function(){
  // toggler btn
$('.navbar-toggler').click(function(){

  $('.navbar-toggler').toggleClass('change')
})
// sticky navbar less padding
$(window).scroll(function () {

  let position = $(this).scrollTop();
  
  if (position >= 518) {
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  } else {
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
  }
})


//back to the top
$(window).scroll(function () {

  let position = $(this).scrollTop();
  
  if (position >= 518) {
    $('#back-to-top').addClass('scrollTop');
  
  } else {
    $('#back-to-top').removeClass('scrollTop');
  }
})
















  // ripples
    $("header, .info").ripples({
        dropRadius: 100,
        perturbance: 0.005,
        
      });
// magnific pop-up
$('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery:{
        enabled:true
    }
    // other options
  });

});





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
    modalItem.style.backgroundImage = `url(../images/work-${id}.jpeg)`;
}
// hide modal
closeModal = function(){
    document.querySelector('.work-modal').classList.remove('work-modal--show')
}









/////////////////////// sign up section(submit the form)



// document.querySelector('.drink-form').addEventListener('submit',function(event){
//   event.preventDefault();
//   const name = document.querySelector('.input-name').value;
//   const lastName = document.querySelector('.input-lastname').value;
//   const email = document.querySelector('.input-email').value;
//   const message = document.querySelector('.input-message').value;

//  checkEmpty = function(name, lastName, email, message){
//       let result;
//       if(name === '' || lastName === '' || email === '' || message === ''){
//            return false;
//       } else {
//           return true;
//       }
//       return result;
//   }

//   let value = checkEmpty(name, lastName, email, message)
  
//   if(value){
// let customer = new Customer(name,lastName,email,message);

//       addCustomer(customer)
//       showFeedback('costumer added to list','success')
//       clearFields()
//   } else {
//       showFeedback('some form values empty','error')
//   }
// // info collector
//   function Customer (name, lastname, email, message){
//       this.name = name,
//       this.lastname = lastname,
//       this.email = email,
//       this.message = message;
  
//   }


// })
// /////////////////////////////////////////////

// showFeedback = function(text,type){
//   if(type === 'success'){
//       let feedback = document.querySelector('.drink-form__feedback');
//       feedback.classList.add('success');
//       feedback.innerText = text;
//       this.removeAlert('success')
//   } else if(type === 'error'){
//       let feedback = document.querySelector('.drink-form__feedback');
//       feedback.classList.add('error');
//       feedback.innerText = text;
//       this.removeAlert('error')
//   }
// }
// // remove alert
// removeAlert = function(type){
//   setTimeout(function () {
//       document.querySelector('.drink-form__feedback').classList.remove(type)
//   },5000)
// }
// // add customer
// addCustomer = function(customer){
//   const div = document.createElement('div');
//   div.classList.add('person');
//   div.innerHTML = ` <img src="../images/farm_garden1.png" alt="person photo" class="person__thumbnail">
//   <h4 class="person__name">${customer.name}</h4>
//   <h4 class="person__last-name">${customer.lastname}</h4>`
//   document.querySelector('.drink-card__list').appendChild(div)
// }

// // clear field
// clearFields = function(){
//   document.querySelector('.input-name').value = '';
//   document.querySelector('.input-lastname').value = '';
//   document.querySelector('.input-email').value = '';
//   document.querySelector('.input-message').value = '';
// }
// // trial






