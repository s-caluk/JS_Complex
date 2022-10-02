

//JS CLASSES

/*contructor daki funksionlar her nesne ile tekrar tekrar olusturulacagi icin 
hafizada cok yer kaplar. o yüzden fonksiyonu ya globale yada prototype tasiyorlar.
globalde daginik duran onlarca function yine unordentlich. en iyi prototype yazmak.
referans veri tipleri kulllanildiginda prototype de yine problem oluyor.
neden? prototypeden gelen özellikler tüm Person nesneleri icin ayni.
oysa 2 nesnenin farkli arkadas/friends grubu var.
*/

function Person(name, surname, age){      //constructor function
	this.name = name;
	this.surname = surname;
	this.age = age;
    /*this.fullName = function(){              
        return this.name + " "+ this.surname;
    } ;*/
    //this.fullName = fullName;            //globaldeki fullName referanstir
}; 

/*
function fullName(){                        //burda function globalde
	return this.name + " "+ this.surname;
} */

Person.prototype.fullName = function() {
	return this.name + " "+ this.surname;
}

Person.prototype.friends = ["roman","flo"]

 
const arin = new Person ('Arin', 'Cekic' ,5);
const elis = new Person ('Elis', 'Cekic' ,3);
console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());
console.log(arin.friends);
console.log(elis.friends);

arin.friends.push('Lorenz');
console.log(arin.friends);       
console.log(elis.friends);        //Lorenz ikisine de eklendi

//Prototype dan çıkartıp constructora ekleyebeilirz ama karmaşıklaşır BURADA DEVREYE CLASS GİRİYOR....
//class dedigimiz sey özel bir fonksiyondur. nesneleri constr.dan olusturuyorduk
//simdi nesneleri class dan olusturmaya calisacagiz.
//-------------------------------------------------------------------


/* function Person(name, surname, age){  
	this.name= name;
	this.surname= surname;
	this.age= age;
   this.fullName=fullName;
};
 */

/*classi yukaridaki constructordan türettik. bir nesne olusturuldugunda classin icindeki
constructor metodu otomatik calisir. diger functionlar ihtiyaca binaen cagrilir ve prototype kaydedilir.
eee yukarida zaten bunu yapabiliyorduk. fakat class sablonuyla hem okunurlugu arttiriyoruuz hem de
OOP sablonuna uyarlamis oluyoruz.
Class EXPRESSION ne demek?  const Person = class {...aynisi...}
*/

class PersonClass {                           //Class DECLARATION
    constructor(name, surname, age){
        this.name= name;
        this.surname= surname;
        this.age= age;
        this.friends= ["flo", "alex"]         //ikisininde arkadasi
    }

    fullName() {                        
        return this.name + " "+ this.surname
    }
}

const arin2 = new PersonClass ('Arin', 'Cekic' ,5);
const elis2 = new PersonClass ('Elis', 'Cekic' ,3);
console.log(arin2);
console.log(elis2);
console.log(arin2.fullName());
console.log(elis2.fullName());

arin2.friends.push("Cinar");            // Elisin arkadası olmuyor
console.log(arin2.friends);             //['flo', 'alex', 'Cinar']
console.log(elis2.friends);             //['flo', 'alex']
console.log(PersonClass);
console.log(typeof PersonClass);        //function