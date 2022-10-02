

class Person{
    constructor (name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ['Ela','Rüzgar'];
    }
    fullName () {
        return this.name + " "+ this.surname;
    };
    static showName = "Person";                   //static´ler nesneye degil classa bagli
    static showMethod(){
        console.log("Static Method Çalışıyor..");
    }
}

console.log(typeof Person);                       //function

const arin = new Person ('Arin' , 'Cekic' , 5);
const elis = new Person ('Elis' , 'Cekic' , 7);

console.log(arin);
console.log(arin instanceof Person);              //true 
console.log(arin.fullName());
console.log(elis.fullName());

/*console.log(Person.fullName());                 //hata verir. 
Person clasina bagli fullName metodu cagirilmaz. bir nesneye bagli cagrilir.
bazen metodlari() ya da özellikleri nesneye degil de yalnizca o classa baglamak isteriz.
classa bagladiklarimiza "static metod" yada "statik özellik" denir.
*/

//console.log(arin.showName);        //Undefined, çünkü arin için öyle bir özellik tanımlı değil.
//console.log(arin.showMethod());    //hata veriyor

console.log(Person.showMethod());    //"Static Method Çalışıyor.." , altindaki undefined kafani karistirmasin.
console.log(Person.showName);        //Person

//------------------------------------------------------------------
/* classa neden ihtiyac hissediyoruz? function constr. ile zaten classdaki herseyi olusturabiliyoruz
neden class? 
-OOP/nesne yönelimli programlama ; problemi mümkün oldugunca parcalara ayirir.
-classlar instance´lerin(nesnelerin) bir sablonu gibi görev görür.
-örnegin kütüphane programini tek dosya icinde yazabilirsin fakat sonradan problem cikariyor
bunun yerine kitaplari bir nesne, kitap alicilari ayri bir nesne gibi tasarlarsan kolaylasir.
bu nesneleri birbiri ile modüler olarak iliskilendirmek daha kolay olur.

peki Inheritance(miras) nedir ?
*/

class Mensch{
	constructor (name, surname, age){
	
		this.name = name;
		this.surname = surname;
		this.age = age;
	}
	fullName () {
		return this.name + " "+ this.surname;
	};
} 

//inheritance
class Engineer extends Mensch{             //Subclass
	constructor(name, surname,age,job){
		super(name, surname,age);          //javada parametre almaya gerek yok js de var
		this.job= job;
	}
	getMoney(){
		console.log('para kazan');
	}
};

const sevda =new Engineer('Sevda' ,' Baran',20,'Engineer');   //protosu Menschdir.
const elis2 = new Mensch ('Elis' , 'Cekic' , 7);              //protosu Object
console.log(sevda);
console.log(elis2);
console.log(sevda instanceof Mensch);          //true
console.log(elis2 instanceof Engineer);        //false
console.log(sevda.getMoney());                 //para kazan
//console.log(elis2.getMoney());               // hata alınıyor elis2 engineer classın bi üyesi değil

//OBJE + (name, surname, age) => Mensch
//Person + job + getMoney()  => Engineer
//Engineer --> Subclass(Child) 
//Mensch --> Superclass(Parent)


//-----------------------------------------------------------------
// subclassin this. anahtari superclass tarafindan olusturuluyor.
//var olan referans veri tiplerini extends edebilir miyiz ???

class ExtendedArr extends Array{
	shuffle(){                             //array elemanlarini karistirir
		this.sort(() => Math.random()- 0.5);
	}
}
let myArr = new ExtendedArr(1,2,3,4,5);
console.log(myArr instanceof ExtendedArr);//true
console.log(myArr instanceof Array);      //true
console.log(myArr);                       //[1, 2, 3, 4, 5]               
myArr.shuffle();                          //karistiriyor
console.log(myArr);                       //[2, 4, 3, 5, 1]