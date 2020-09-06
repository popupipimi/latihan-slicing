// #btn

const buttonSearch = document.querySelector("button#buttonSearch");
const formSearch = document.querySelector("#formSearch");
console.log(buttonSearch);

buttonSearch.addEventListener("click", function (){
	if(formSearch.classList.contains("open")){
		return formSearch.classList.replace('open', 'closed');	
	}
	formSearch.classList.replace('closed', 'open');
	// else{
	// }
});