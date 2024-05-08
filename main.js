let arrow=document.querySelector('#arrow');


arrow.onclick=()=>{
	scroll(0,0);
}
window.onscroll=()=>{
	if(scrollY>400){
		arrow.classList.remove('hide');
	}
	else{
		
		arrow.classList.add('hide');
	}
}