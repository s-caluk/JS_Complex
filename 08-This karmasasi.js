// THİS 


/*Kural:
obj.func() ==> objeye bagli functionlara metod denir. this burda objedir.
func() ==> hem func.declaration hem de func.expression icindeki this globaldeki windowsu gösterir.
cünkü herhangi bir objeye bagli degildir henüz!
this ==> global object ==> window(global) 
Func.declaration HOISTED yapabiliyor, func.expression HOISTED yapamiyor
*/

console.log(this);
console.log(this.location);
console.log(this.location.href);
console.log(window.location.href);
console.log( this === window);           //true


//func declaration---------------------------- 

function func1() {
	this.name="Sevda";               //bunu global nesneye (window) bagliyor
	console.log(this);               //yine window döndü! global degisken.
	console.log(this.location);
	console.log(this.location.href);
	console.log(window.location.href); 
	console.log(this.age);//func2 expres. için "undefined" döndü. func.dec. HOİSTED yapamiyor.
}

//func expression--------------------------

const func2 = function(){
	this.age=20;                      //bunu global nesneye (window) bagliyor
	 console.log(this);
	console.log(this.location);
	console.log(this.location.href);
	console.log(window.location.href); 
	console.log(this.name);	          //
}  

func1();
func2();// bunu da yukarı alırsak, func.exp. hoisted yapabiligini görüyoruz.

//----------------------------------------

const name = "Arin";

console.log(name);       //Arin 
console.log(this.name);  //Sevda  
console.log(this);       //window


//Constructor Function------------------------------------------------

function Person (name , surname, age){
	this.name= name;
	this.age= age;
	this.surname= surname;
	this.fullName = function(){
     return this.name+ " "+ this.surname
	}
}
const toprak =  new Person('Toprak','Baran',10); 
console.log(toprak);                               //Person {name: 'Toprak', age: 10, surname: 'Baran', fullName: ƒ}
console.log(toprak.fullName());                    //Toprak Baran


//class ile  constructor--------------------------------------------

class Person2  {
   constructor (name , surname, age){
	this.name= name;
	this.age= age;
	this.surname= surname;
   }
  fullName = function(){            //this yazmaya gerek yoktur
	    return this.name+ " "+ this.surname
   }
}
const baran =  new Person2('Toprak','Baran',10);
console.log(baran);
console.log(baran.fullName());

//basit nesne, litheral---------------------------------------------------------

const arin = {                     //tek tek olusturulan 
	name: 'arin',
	surname: 'cekic',
	age: 5,
	fullName: function(){ 
	    console.log(this);        //{name: 'arin', surname: 'cekic',...
    },

    mother: {
        name: 'gamze',
        surname: 'cekic',
        age: 40,
        fullName: function(){ 
            console.log(this);     //{name: 'gamze', surname: 'cekic',...
        }
    },
}

console.log(arin);
console.log(arin.fullName());
console.log(arin.mother.fullName());

//BSP----------------------------------------------------

const elis = {
    name : "Elis",
    funcy: function() {
        console.log(this === elis);
        console.log(this === window);
    }
}

console.log(elis);             //{name: 'Elis', funcy: ƒ}
console.log(elis.funcy());     //true(yani this elise esit, nesneye bagli!),  //false

const funcy2 = elis.funcy;
console.log(funcy2());         //false(yani this window oldu, nesneye bagli degil!)  //true


//BSP------------------------------------------------------

const elis2 = {
    name : "Elis",
    funcy: function() {
        console.log(this === elis2);     //true
        console.log(this === window);    //false

        setTimeout(function() {              //burasi kendi basina anonim bir function. objeye bagli degil.
            console.log(this === elis2);     //false
            console.log(this === window);     //true
        }, 2000);
    }
}

console.log(elis2.funcy());


