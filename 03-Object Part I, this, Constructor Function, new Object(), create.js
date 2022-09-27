// Ders 4 
//OBJECTS PART 2
//bir nesne ile iliskili functiona ; method denir. fullName methoddur.


//--------------------------------------------------
//Object Literal yöntemi ile nesneyi yazma
//en kolay nesne yapma yöntemi bu.

const person = {                  //static
	name:'Sherlock',
	surname:'Holmes',
	age:40,
	fullName : function(){
		return this.name + " " + this.surname;
	}
}

person.job = "Student";           //disaridan ekledik
console.log(person);
console.log(person[`name`]);      //bracket notation
console.log(person.name);         //dot notation
console.log(person.fullName());
console.log(person['fullName']());
console.log(person.job);
console.log(person.toString());


//func--------------------------------------------
/*CConstractor ile nesne yazma! constructor neden var? diyelim 10 farkli kisi/nesne olusturacaksin.
hepsini tek tek elle girmen (yukaridaki gibi) pratik degil.
funtionlar da bir nesnedir!
this: üzerinde islem yapilan nesne ne ise onu refere eder, onu gösterir.
*/


function Person(name, surname, age){   //dinamik parametrelerdir.
    console.log(this);                 //Person {} bos cikar.

	this.name= name;
	this.surname= surname;
	this.age= age;
    this.fullName= function(){
	 return this.name + " "+ this.surname;  
    }
    console.log(this)
};

const person1 = new Person("john", "doe", 40);    //new: yeni bir bos nesne olusturur.
console.log(person1.fullName());
const person2 = new Person("Alex", "doe", 37);


//OBJECT Constructor------------------------------------------
//bu da 3. obje/nesne olusturma yöntemidir.

const kisi1 = new Object();
kisi1.name = 'Talha';
kisi1.surname = 'Holmes';
kisi1.age = 40;
kisi1.fullName = function(){
		return this.name + " " + this.surname;
	}

console.log(kisi1);
console.log(kisi1.fullName());

//-------------------------------------------------------
//4.yöntem Object.create() ile nesne olusturmak
//temel mantik yeni nesneyi olustururken eski nesneyi kullaniyoruz.

const mensch = {                  //static , object literalle olusturulmus nesne
	name:'Ömer',
	surname:'Holmes',
	age:40,
	fullName : function(){
		return this.name + " " + this.surname;
	}
}

console.log(mensch);

const flo = Object.create(mensch)    //aralarinda inherince/kalitim var.
flo.name = "Florian";
flo.surname = "Back";
flo.age = 12;

console.log(flo);
console.log(flo.fullName());    //yazmamistik ama menschden aliyor.


/* peki JS de neden class yok? baska dillerde nesneleri classlardan örneklendirerek olusturuyorduk? - var


