const toggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const toggleDiv = document.querySelector('.toggleDiv');
const logo = document.querySelector('.logo');

function toggleMenu() {
	
	if (menu.classList.contains("active")){
		menu.classList.remove("active");
		toggleDiv.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>"
		logo.style.display = 'block';
		document.querySelector('.social-nav').style.visibility = 'visible';
	}else {
		menu.classList.add("active");
		toggleDiv.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
		logo.style.display = 'none';
		document.querySelector('.social-nav').style.visibility = 'hidden';
	}

}

toggle.addEventListener('click', toggleMenu, false);