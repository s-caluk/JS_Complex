
//FONKSIYONLAR

//Function Decleration/Statement HOISTED olarak calisir! 
//fonc üzerinde console.log(square(3)); yapsan da calisir. yukari atar

console.log(square(3));  //Arguman

function square(num) {   //Parametre
    return (num*num);
}

console.log(square);            //fonsiyonu print ettiriyor.
console.log(square(4));         //() --> invoke , calistirir

//---------------------------------------------------
//Function Expression: Bir fonksiyonu degiskene atama. declerationdan daha cok kullanilir.
//function Expression is not HOISTED!!
//JS de functionlar first-class functiondur, yani degisken gibi davranabiliyorlar

const squaree = function (num) {    
    return (num*num);                
};

console.log(squaree);          
console.log(squaree(5)); 

//--------------------------------------------------

const myArr = [6, "hello", function () {console.log("Selam array")}];
myArr[2]();

const myObj = {
    age : 5,
    name : "arin",
    func : function () {console.log("Selam obje")}
}
myObj.func();

console.log(20 + (function() {return 10; })() )  //IIEF  () calistirmazsan sonuc 30 olmaz

//---------------------------------------------------

const myFunc = function (num) {
    return function toDouble() {
        console.log(2 * num);
    }
}
myFunc(2)();             //() her funktion icin invoke kullanilmali

const result = myFunc(7);
result();   


//---------------------------------------------------
//IIFE yapilarina neden ihtiyac duyariz! sayfa güncellerken tek seferde...

(function() {
    console.log(5 + 3);
})();

//son bomba: funktionlar bir nesnedir. nesnelerin property leri olur. func da var.

function squareee(num1, num2) {   
    return (num1 * num2);
}

console.log(squareee.name);   //yada squareee.length  bunlar propertysidir.