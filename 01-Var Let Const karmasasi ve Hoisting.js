// VAR - LET - CONST Karmasasi

let age = 40;
console.log(age);

age = 42;
console.log(age);
//--------------------

const isim = "Arin";  //baslangic degeri olmali , sonradan degismez
console.log(isim);    

//isim = "Elis";      hata

//------------------------------
//neden ihtiyac var consta? kütüphane ve catilarda const letten daha cok kullanilir.
//Let özel olarak degismesini istedigimiz ifadeler icin kullaniriz.
//array(array de nesnedir) ve nesnelerin degeri degil, referansi degismez, icerigi degistirebilirsin.

let str = "";
for ( let i = 0; i < 5; i++) {
    str = str.concat(i);          //concat ekleyerek gidiyor.
    console.log(str);
}

const myArr = [1,2,3];
console.log(myArr);
console.log(myArr.pop());
console.log(myArr);               //icerik degisir; referans/adres/kutunun yeri degismiyor:

const student = {
    isim_ : "Arin",
    age_ : 5
}
student.isim_ = "Elis";
console.log(student);             //degisir! 

//----------------------------------
//hem adres/referanz hem de icerigi degissin istemiyorsam?

const kinder = {
    isim_ : "Arin",
    age_ : 5
}
Object.freeze(kinder);              //freeze yapildigi icin icerik degismiyor!
kinder.isim_ = "Elis";
console.log(kinder);

//----------------------------------
// peki var degiskenini  neden hala görüyoruz?
//VAR -> global scope / functional scope
//LET -> block scope
//CONST -> block scope

var yas = 40;
console.log(age);    //cikti 42 : en son atanan deger neyse o

yas = 42;
console.log(age);    //cikti 42

//----------------------------------

var z = 10 ;
console.log(window.z);  //window property olarak kaydediliyor. let ve const da kaydedilmiyor.


//--------------------------------..
//HOISTING nedir: kelime manasi yukari cekme yükseltme yani....
//yani js kodlari okumaya asladiginda önce degiskenleri aliyor. var x, let y gibi onlari yükseltiyor.
//fakat let ve const daki hoisting, var daki gibi calismiyor.


//var x;
console.log(x);       //undefined

var x = 20;           //aslinda x tanimli degil hatasi vermeli ama alttaki degskeni (var x;) yukari atmis gibi yapiyor.

console.log(x);       //20




