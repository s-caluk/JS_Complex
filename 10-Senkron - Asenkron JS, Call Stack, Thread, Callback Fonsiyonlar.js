/*

1)JS Single Thread´dir ve 
2)JS Senkron calisir! 
ne demek istiyorz????????????
Thread: JS sadece tek bir kod parcacigi calistirir. process sırasında yapılan iş parçaçığı (o an çalışan kod parçaçığı)
Senkron: ve bu is parcaciklarini sirali bir sekilde yapar!

Senkron islemler bazen hatali sonuca sebebiyet verebiliyor, Asenkron islem acariz.
1)yani ayni anda birden fazla islem yapiyor gibi görünmek isteriz 
2)ve sonradan kullanacagimiz verilere sahipmiyiz emin olmak isteriz! 

call stack: programlarin calisma sirasidir! "call stack" ve "call back" functionlari ayirt edebil.
promis,call back, async, await... bunlar calisma sirasini manupile ediyor.
'Event Loop':call stackta ki işlemler bittikten sonra, call backa bakıyo.
önce normal fonsiyonlar "call stack",  sonra "call back" calisir.
callback e hangi islemler atiliyor, hangi fonksiyonlar atiliyor dikkat etmek lazim.

callback tüm islemlerimizi cözmedigi icin async await yapilari devreye giriyor.


*/

const funcA = () =>{
	console.log('Func A Console log 1');
	console.log('Func A Console log 2');
	//alert ('Alert Message');   //alerti onaylamadan func2 yi calistirmiyor.
}
const funcB = () => {
  console.log('Func B Console log 1');
  console.log('Func B Console log 2');
}
funcA();
funcB(); 

//-----------------------------------------------------
//yani senkron calisirken veri almada gecikme olursa ,sonuc/veri yanlis cikiyor.
//1)senkron calisirken programin bloklanmasi, yavas calismasi tehlikesi var
//2)aldigimiz verilerin yanlis cikma riski var.
//bu 2 sorunu yasamamak icin JS de Asenkron islemlere ihtiyac duyariz


let x = 10;
console.log('1.gelen veri...',x);

setTimeout(()=>{  // senkron olarak sirasiyla basarili kod ilerliyor.
	x = x + 5;    // o 1 sn beklemiyor, diger islemleri yapiyor.
},1000);          // işlem gerçekleşmemiş output:10 datasını alıyoruz

console.log('2.gelen veri...',x);
x = x + 5;
console.log('3.gelen veri...',x);
 

//Call Stack------------------------------------------------------------
//Fonksiyonların Çalışma Sırasını gösterir. single thread dedikleri bu; tek islem yapiyor.

function func1(){
	console.log('Ben birinciyim...');
	func2();
	console.log('Ben tekrar birinciyim...');
}
function func2(){
	console.log('Ben ikinciyim...');
	func3();
	console.log('Ben tekrar ikinciyim...');
}
function func3() {
	console.log('Ben üçüncüyüm...');
	
}
func1(); 

//cdn.javascripttuturiol.net ; https://www.codespot.org/---------- 

function add(z,y){
	return z + y; 
}
function average(z ,y){
	return add(z , y)/2;
}
let z = average(6,8);
console.log(z);

//------------------------------------------------------------

function task (message){
	let n = 1000000000;
	while(n > 0){
		n--;
	}
	console.log(message);
}
console.log('1');

setTimeout(() =>{          //callback e atiyor!önce normal fonsiyonlar sonra callback calisir.
	console.log('2');
},1000)                    //bu process tamamlanmış oldugu icin, task biter bitmez yazdırıyor

console.log('3');

console.log('4');

task('İşlem tamamlandı 1..');//call stackta ki işlemler bittikten sonra call backa bakıyor. Bununla ilgilenen komut 'Event Loop'

setTimeout(() =>{          //callbacke atiyor! 
	console.log('5');
},1000);

task('İşlem tamamlandı 2 ..'); //son functiondan sonra, callback queuesine sira gelir.

//OUTPUT: 1, 3, 4, işlem tamamlandı, İşlem tamamlandı2,  2, 5 */
//CALLBACK : geri çağırma bir bildirim fonksiyonudur
//js nin asyc çalışma için bulduğu yöntem

//----------------------------------------------------------------------------------------------------------
/*
bir fonc. bir baska fonctiona arguman olarak geliyorsa bu callback fonc.dur.
myNAme bir callback fonksiyondur! alternatif yazimi asagida.

const myName = ()=> {     
	console.log('Benim Adım SEVDA...');
}
setTimeout(myName,3000); 
*/


setTimeout(()=> {
	console.log('Benim Adım SEVDA...');
},3000);


//------------------------------------------------------------------
/*
const btn = document.querySelector('buton');

btn.addEventListener('click', () => {
	alert('You clicked me!');           //burasi call back

	let pElem = document.createElement('p');
	pElem.textContent = 'This is a newly-added pragraph';
	document.body.appendChild(pElem);

});*/

//-------------------------------------------------------
//önce addNewbook() calisir. önce push ediliyor.
//oradan callback fonc ile listbooks() fonc calistirilir.
//eski liste + yeni eklenen kitap consola yazdirilir.
//amac önce kitap ekleyecegiz, sonra listeleyecegiz.


const books= [
	{name: 'Pinbal 1973', author:'Haruki Maruki'},
	{name: 'Özgürlük', author:'Haruki Maruki'},
	{name: 'Türkiye de çağdaşlaşama', author:'Niyazi Berkay'}
]
const listBooks = () => {
	books.map ((book,index) => {
		console.log(book, index);
	})
}

//listBooks();

const addNewBook = (newBook , callback) =>{ //callbackle eski listeyide dahil ediyoruz.
	books.push(newBook);
	callback();             //=listbooks();
}

addNewBook({name:'Berlin Hatıraları',author:'Hüsrev Gerede'},listBooks);


