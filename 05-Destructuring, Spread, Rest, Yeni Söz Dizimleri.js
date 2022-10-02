// NEW OBJECT SYNTAX


//-------------------------------------------------------------
//1 - Shorthand Properties
//nerde kullaniliyor? bsp sitede veriyi aldigin yer, ve datenbankta kaydettigin yer ayni ise.

let name = 'arin' , age = 5;

const myObj = {
  name: name,              //yukardaki name=arin degerine esitliyor.
  age : age
} 

const myObj_ayni = {       //yukarıda ki tanımlama ile aynı mantık
	name ,
	age                    //isim : deger ayniysa kisayol yazilabiliyor.
  }

console.log(myObj.age);
console.log(myObj.name);
console.log(myObj_ayni.age);
console.log(myObj_ayni.name);
 


//---------------------------------------------------------------
//2 - Computed Property Names
// yani degiskeni property gibi yazdirma.

let prop1 = 'name';
let myObj2 = {}           //Önce bos nesneyi oluşturmamız lazım
myObj2[prop1]= 'Arin';    //es5 ile böyle yapiliyormus:bracked notation ile nesneye properties ekleme
console.log(myObj2);      

 
let prop2 = 'name';
let myObj3 = {            // es6 da bir değişkeni, nesneyi oluştururken atayabiliriz 
	[prop2]:'Arin2'       // bracked[] yaparsan deger:deger gibi olyor
}                         // bu özellik kütüphanlerde çok kullanılır
console.log(myObj3);



//---------------------------------------------------------------
//3 - Short Method Syntax
//es6 ile :function kelimesi kaldirildi

const man = {
	name:'xxxxx',
	surname:'wwww',
	age:0,
	fullName : function(){            //eski usul
		return this.name + " " + this.surname;
    }
}

const man2 = {
	name:'xxxxx',
	surname:'wwww',
	age:0,
	fullName() {                       //yeni usul
		return this.name + " " + this.surname;
	}
}
console.log(man.fullName());       
console.log(man2.fullName());       //iki metod ayni calisir. 


//-------------------------------------------------------------------
//4 - Object "Destructuring"

const person = {
	name:'xxxxx',
	surname:'wwww',
	age:40,
    boy:1.50,
	fullName (){
		return this.name + " " + this.surname;
	}
}

let myVar1 = person.name;
console.log(myVar1);                 //xxxxx

let myVar2 = person.age;
console.log(myVar2);                 //40


//cok fazla property olsaydi ne yapardik? ayrı ayrı oluşturmak yerine tek satırda yazabiliriz. 
//nesnelerin istedigimiz propertylerini destruct edebiliriz/konsola yazdirabiliriz
/*
let{name: myVar3, age: myVar4} = person;
console.log(myVar3);
console.log(myVar4); 

let{name: name, age: age} = person;     
console.log(name);
console.log(age); */

let{surname, boy} = person; // en pratik bu, yukarıdaki olay kendini tekrarladığı için bu şekilde kullanırız
console.log(surname);       // 3 alternatif de ayni!
console.log(boy); 



//------------------------------------------------------------------
//5 - Spread Operator in Object Literals(...)
// yukarıdan objemizi alıyoruz (tanımladığımız person)

const person2 = {...person};   //1.tüm özellikleri kopyalayabiliriz
console.log(person2);

const person1 = {            
	gender:'girl', 
	job:'Computer Engineer',
}
const arin = {...person,country:'Turkey', ...person1}
console.log(arin);             //2.Nesneleri birleştirmede kullanır



//------------------------------------------------------------------
//6 - REST Operator in Object Literals
//rest yerine başka isimler de kullanabilriz
//Kalan özellikleri başka obj çekme islemi

const kisi2 = {
	ad:'ayse',
	soyad:'duran',
    is : "student"	
    	
}

/*
const {ad, soyad} = kisi2;
console.log(ad + " " + soyad); */

const {ad, ...rest} = kisi2;
console.log(rest);                    //{soyad: 'duran', is: 'student'}

//--------------------------------------------------------------------
 //7 - Object Values - Object Entries

console.log(Object.keys(kisi2));         //['ad', 'soyad', 'is']
console.log(Object.values(kisi2));       //['ayse', 'duran', 'student']
console.log(Object.entries(kisi2));      //[Array(2), Array(2), Array(2)]

console.log(Object.keys(person));        //['name', 'surname', 'age', 'boy', 'fullName'] 
console.log(Object.values(person));      
console.log(Object.entries(person));