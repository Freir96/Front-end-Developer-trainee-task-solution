window.onload = initForm;
var data=[ 
	{
    "id": 1,
    "firstName": "Jan",
    "lastName": "Kowalski",
    "dateOfBirth": "1.7.1990 11:35",
    "company": "XSolve",
    "note": 90
  },
  {
    "id": 4,
    "firstName": "Justyna",
    "lastName": "Kowalska",
    "dateOfBirth": "4.02.1976 14:37",
    "company": "XSolve",
    "note": 91
  },
  {
    "id": 2,
    "firstName": "Krzysztof",
    "lastName": "Krawczyk",
    "dateOfBirth": "28.10.1950 2:15",
    "company": "Chilid",
    "note": 27
  },
  {
    "id": 3,
    "firstName": "Bogusław",
    "lastName": "Linda",
    "dateOfBirth": "03.01.1963 23:10",
    "company": "XSolve",
    "note": 50
  },
  {
    "id": 5,
    "firstName": "Krzysztof",
    "lastName": "Kononowicz",
    "dateOfBirth": "10.10.1910 18:00",
    "company": "Chilid",
    "note": 77
  },
  {
    "id": 6,
    "firstName": "Maryla",
    "lastName": "Rodowicz",
    "dateOfBirth": "29.02.1936 11:35",
    "company": "XSolve",
    "note": 8
  }
]
var pageFlag=1;
var fname=false,lname=false,idsort=true,datesort=false,companysort=false,notesort=false;
function negate(){
	fname=false;
	lname=false;
	idsort=false;
	datesort=false;
	companysort=false;
	notesort=false;
}
function sortFirstName(){
	if(fname){
		data.reverse();
	}
	else{
		negate();
		fname=true;
		data.sort(function(a, b) {
			var titleA = a.firstName.toLowerCase(), titleB = b.firstName.toLowerCase();
			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;
			return 0;
		});
	}
	clearTable()
	myCreateFunction();
}
function sortLastName(){
	if(lname){
		data.reverse();
	}
	else{
		negate();
		lname=true;
		data.sort(function(a, b) {
			var titleA = a.lastName.toLowerCase(), titleB = b.lastName.toLowerCase();
			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;
			return 0;
		});
	}
	clearTable()
	myCreateFunction();
}
function sortDate(){
	if(datesort){
		data.reverse();
	}
	else{
		negate();
		datesort=true;
		data.sort(function(a, b) {
			var dateA = new Date(a.dateOfBirth), dateB = new Date(b.dateOfBirth);
			return dateA - dateB;
		});
	}
	clearTable()
	myCreateFunction();
}
function sortId(){
	if(idsort){
		data.reverse();
	}
	else{
		negate();
		idsort=true;
		data.sort(function(a, b) {
			return a.id - b.id;
		});
	}
	clearTable()
	myCreateFunction();
}
function sortCompany(){
	if(companysort){
		data.reverse();
	}
	else{
		negate();
		companysort=true;
		data.sort(function(a, b) {
			var titleA = a.company.toLowerCase(), titleB = b.company.toLowerCase();
			if (titleA < titleB) return -1;
			if (titleA > titleB) return 1;
			return 0;
		});
	}
	clearTable()
	myCreateFunction();
}
function sortNote(){
	if(notesort){
		data.reverse();
	}
	else{
		negate();
		notesort=true;
		data.sort(function(a, b) {
			return a.note - b.note;
		});
	}
	clearTable()
	myCreateFunction();
}
function clearTable(){
	for(i=0;i<limit();i++){
		document.getElementById("myTable").deleteRow(1);
	}
}
function previousPage(){
	if(pageFlag>1){
		clearTable();
		
		pageFlag--;
		myCreateFunction();
		
	}
}


function nextPage(){
	if((Object.keys(data).length)>(pageFlag*5)){
		clearTable();
		pageFlag++;
		
		myCreateFunction();
	}
}
function initForm(){
	data.sort(function(a, b){return a.id - b.id});
	myCreateFunction();
}

