	document.addEventListener('DOMContentLoaded', function(){
		var lightbox = document.querySelector('.lightbox');
		var signup = document.querySelector('#signup');
		var signin = document.querySelector('#signin');
		var cancel = document.querySelector('.cancel');
		var loginModalToggleAreas = document.querySelectorAll('.lightbox, .login, .cancel');

		/*for (var i=0; i<loginModalToggleAreas.length; i++){
			loginModalToggleAreas[i].addEventListener('click', function(){
			toggle('.loginmodal');
			});
		}
		*/	
		lightbox.addEventListener('click', function(){
		toggle('.loginmodal');});
		
		signup.addEventListener('click', function(){
		toggle(document.querySelector('.loginmodal'));});
		
		signin.addEventListener('click', function(){
		toggle(document.querySelector('.loginmodal'));});

		cancel.addEventListener('click', function(){
		toggle(document.querySelector('.loginmodal'));});
				

		function toggle(element){
		if (element.classList)
		  element.classList.toggle('hidden')
		}
		else {
		var classes = element.className.split(' ');
		var classIndex;
		for (var i=0; i< classes.length; i++;) {
			if (classes[i] === 'hidden')
			existingIndex =i;
		}
		
		if (classIndex)
			classes.splice(classIndex,1);
		else
			classes.psh('hidden');
		element.className = classes.join(' ');
		
		}
		}

		/*
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
		*/
	
