

/*
ARROW FUNCTION

Tricks: 
Function Expressionda fonksiyonu tanımlamamadan çağıramayız. HOİSTED DEGIL!
Function Declaration´de çağırabiliriz. HOISTEDDIR 
Arrow func. kullanmamizin sebebi sade yazmak degil, this ile iliskisindendir.
Arrow func. this ile windowsa baglaniyor, objeye degil.
yazilimcilar callback func.lari arrow => yazmayi tercih ediyor. nesneye bagli olani normal yaziyorlar.
Arrow func. constructor func olamaz, this ile iliskisinden dolayi.
CALL:Bir fonksiyonu veya methodu ilgili olduğu nesneden farklı bir nesne de kullanmamızı sağlar
*/


//Func Dec.---------------------------------------------------

console.log(square(3));   //hoisteddir, hata vermez!

function square( num){
	return (num*num);
}

 
//Fun Exp-------------------------------------------------------
const square2 = function(num){
	return (num*num);
}
console.log(square2(4));  //hoisted degildir. önce func yazilmali.


//Arrow Fun. Expression-------------------------------------------- 
const square3 = (num) => {return (num*num);}
console.log(square3(5));

const square4 = num =>  (num*num);    //en sade hali
console.log(square4(6));
 

//Arrow Func. - This----------------------------------------------- 

window.name = 'arin';
function tellName(){
	console.log(this);         //Window   
	console.log(this.name);    //arin
}

tellName();

const human ={                    //simdi func. objeye baglayalim. 
	name:'Elis',
	tellName: function(){
		console.log(this);        //{name: 'Elis', tellName: ƒ}  yani this person.
		console.log(this.name);   //Elis
	}
}

human.tellName(); 

//--------------------------------------------------------------
//normal functionu arrow functiona cevirirsek ne oluyor?

window.name = 'arin2';
const tellName2 = () => {
	console.log(this);         //Window
	console.log(this.name);    //arin2
}
tellName2();

const human2 ={
	name:'Elis2',
	tellName:()  => {
		console.log(this);       //Window ! this objeye baglanmiyor.
		console.log(this.name);  //arin2 gösteriyor!
	}
}
human2.tellName();

//--------------------------------------------------------------
//Normal fonksiyonlarda this ilgili olduğu bloga gösterir
//Arrow func kendine ait dizini olmadığı için globale göre alıyor 


window.name = 'arin3';

const human3 ={
	name:'Elis',
	tellName3: function(){
		console.log(this);         //{name: 'Elis', tellName3: ƒ}
		console.log(this.name);    //Elis

		setTimeout(function () {
		 console.log(this);        //Window
		 console.log(this.name);   //Arin3 yeni bambaşka fonk. olduğu için thisi window alıyor			
		},2000)
	}
}
human3.tellName3();

//---------------------------------------------------------------
//arrow yaparsak this nasil olacak?  -window´a baglanacak

window.name = 'arin4';

const human4 ={
	name:'Elis',
	tellName4: () => {
		console.log(this);       //Window
		console.log(this.name);  //Arin4

		setTimeout( () => {       
		 console.log(this);       //Window
		 console.log(this.name);  //Arin4 kendine ait this yok her iki arrow için			
		},2000)
	}
}
human4.tellName4(); 


//---------------------------------------------------------------------

window.year=2022;

const myObj = {
	year:2021,
	showYear: function(){
		console.log(this.year,this);             //2021 
	},
	showYear2: () => console.log(this.year,this) //2022 
}
myObj.showYear();
myObj.showYear2(); 

//CALL,APPLI,BIND  in arraw fonksiyonla iliskisi.
//Bir fonksiyonu veya methodu ilgili olduğu nesneden farklı bir nesne de kullanmamızı sağlar

window.name= 'Gurcan';
window.grade= 100;

const student={

    //examResult: function() {...} olursa cikti: Arin 60, Elis 70
    
	examResult:  () =>{                       //arrow oldugu icin windowsdakini aliyor
		return this.name + " "+ this.grade;   //Gurcan 100 
	}
}
const student1={
	name :'Arin',
	grade:60
}
const student2={
	name : 'Elis',
	grade:70
}
 
console.log(student.examResult.call(student1));  // Arin 60
console.log(student.examResult.call(student2));  // Elis 70 