	document.addEventListener('DOMContentLoaded', function(){
		var lightbox = document.querySelector('.lightbox');
		var signup = document.querySelector('#signup');
		var signin = document.querySelector('#signin');
		var cancel = document.querySelector('.cancel');
		
		lightbox.addEventListener('click', function(){
		hide(document.querySelector('.loginmodal'));});
		
		signup.addEventListener('click', function(){
		show(document.querySelector('.loginmodal'));});
		
		signin.addEventListener('click', function(){
		show(document.querySelector('.loginmodal'));});

		cancel.addEventListener('click', function(){
		hide(document.querySelector('.loginmodal'));});
		});


		function hide(element){
		if (element.classlist)
			element.classList.add('hidden');
		else
			element.className += " " + "hidden";
		}

		function show(element){
		if (element.classlist)
			element.classList.remove('hidden');
		else
			element.className = element.className.replace(new RegExp('(^|\\b)' + "hidden".split(' ').join('|') + '(\\b|$)', 'gi'), ' ');			
		}



