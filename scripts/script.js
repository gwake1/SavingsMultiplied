document.addEventListener('DOMContentLoaded', function(){
  var loginModal = document.querySelector('.loginmodal');
  var lightbox = document.querySelector('.lightbox');
  var signIn = document.getElementById('signIn');
  var cancelButton = document.getElementById('cancelButton');

  function hide(element){
    element.style.display="none";
  }

  function show(element){
    element.style.display="block";
  }

  lightbox.addEventListener('click', function(){
   hide(loginModal);
   });

   signIn.addEventListener('click', function(){
   show(loginModal);
   });

   cancelButton.addEventListener('click', function(){
   hide(loginModal);
   });
});
