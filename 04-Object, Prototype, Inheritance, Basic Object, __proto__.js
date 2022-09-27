

//PROTOTYPE--------------------------------------------------------------
//JS de Tüm nesneler baska bir nesneden türetilerek olusturulur.
//yeni nesne kendinin ata nesnesinden olusturulur = prototype
//Object->Person->arin   Person arinin prototype i oluyor.



const person = {                  //static
	name:'Sherlock',
	surname:'Holmes',
	age:40,
	fullName : function(){
		return this.name + " " + this.surname;
	}
}

console.log(person);
console.log(person.job);               //undefined
console.log(person.toString());        //[object Object]  bu prototypeden geliyor.
console.log(person.hasOwnProperty('age'));  //true


const myObj = {};                      //Object tüm nesnelerin en üst atasi
console.log(myObj)
console.log(myObj.toString());


//-------------------------------------------------------------
// OBJECT+ name, surname, age, fullName() ---> =Person +job ---> arin

function Person(name, surname, age){   //dinamik parametrelerdir.
    
	this.name= name;
	this.surname= surname;
	this.age= age;
    this.fullName= function(){
	 return this.name + " "+ this.surname;  
    }
};

const arin =  new Person('arin','cekic',21);
console.log(arin);
arin.job = "student";
console.log(arin.hasOwnProperty('name'));    //true , Object den inherit yapti
console.log(arin.__proto__);                 //{constructor: ƒ}
 

const toprak =  new Person('toprak','cekic',11);
toprak.boy= 1.50;
console.log(toprak);
console.log(toprak.toString());             //[object Object]
toprak.toString = function () {             //prototype da var olan metodun üzerine yazilir!
	return 'toString metodunu değiştirdim'  
	
}
console.log(toprak.toString());           //toString metodunu değiştirdim
 
//-----------------------------------------------------
// ortak fonksiyonlari Constructordan siliyoruz, prototype yaziyoruz!
//fullName() ve surname leri ayni. prototype ekliyoruz
//prototype yazdigin 1 kez yazilir, her nesne ortak kullanir.
//construktora yazdigin her nesne icin ayri ayri olusturulur!


function Person2(name, age){               //construktor: en özelleri biriktiriyor.
	this.name= name;
	this.age= age;
};

Person2.prototype.fullName =function(){    //prototype: ortaklari biriktiriyor.
	return this.name + " "+ this.surname;
}
Person2.prototype.surname ='Çekiç';

const talha =  new Person2('Talha',12);   //sadeece iki parametre alıyor ama menüyü açınca ortak protype olarak kullanılır
const ömer =  new Person2('Ömer',11);
console.log(talha);
console.log(ömer); 
console.log(talha.fullName());            //Talha Çekiç


//-----------------------------------------------------
//INHERITANCE: bir nesnenin özelliginin, farkli nesneler tarafindan kullanmasina denir.
//farkli programlama dillerinde classlar arasi iliskide kullanilir.
//JS de "prototype inheritance" olarak kullanilir, yani proto.sundan aliyor!
//js de ayriyeten classlar kavrami da var.

const mensch = {             //Object Literal yöntemi ile nesne bir olusturduk
	name:'xxxxx',
	surname:'wwww',
	age:0,
	fullName : function(){
		return this.name + " " + this.surname;
	}
}
const alex = Object.create(mensch);   //olan nesneden yeni nesne üretiyoruz
console.log(alex);           // boş {} , degerler prototype de duruyor
console.log(alex.name);      // xxxxx  , degeri prototype den aldi
alex.name = 'Arin';
console.log(alex);           //{name: 'Arin'} 
alex.age = 5;
 console.log(alex);          //{name: 'Arin', age: 5}

console.log(alex.hasOwnProperty('age'));       //true çünkü kendimiz atadık
console.log(alex.hasOwnProperty('surname'));   //false çünkü prototypedan alıyor
console.log('surname' in alex);                //true  döner 




