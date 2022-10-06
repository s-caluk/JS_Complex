
/*
PROMİSE:asenkron işlemin nihai sonucunu temsil eden bir js nesnesiymiş
Bir yer tutucu işlevi görüyor. yani sana bir söz/promis veriyorum.
Sonra sen sözümü gerceklestirme durumuna göre bana geri dönersin!
PROMİSE STATE´de 3 durum var: pending(bekliyor) (undefined) - fulfilled - rejected
fulfilled ´de veriyi "then" ile aliyoruz
rejected ´de hatayi "catch" ile yakaliyoruz

*/
 

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
const addNewBook = (newBook , callback) =>{
	books.push(newBook);   //önce ekleme sonra listeleme
	callback();//localde yaptığımız için hızlı fakat  rest apı den istesek sıkıntılı bir durum olurdu
}

addNewBook({name:'Berlin Hatıraları',author:'Hüsrev Gerede'},listBooks);  

//listBooks(); buda olurdu! fakat her eklemenin ardinda manuel listeleme yapmak zor. 
//callback:bu sorunu callback ile cözüyorduk! bir islem bittikten sonra cagirdigimiz function.
//diger bir sorunu cözme seklimiz promislerdir!

//-------------------------------------------------------------------------------------------

/*
const promise1 = new Promise(function (resolve,reject){ // ya başarılı oluyor ya da başarısız
	
	resolve('DATA'); 
	//reject('ERROR');
			
});
console.log(promise1); 


promise1.then(function(value){
	console.log(value);           //1)DATA´ya then üzerinden ulastik
}); 

promise1.then((value) =>{         //genelde arrowla yapilir.
	console.log(value);           //2)DATA
}); 

promise1.then(value => console.log(value));//3)DATA-BAŞARILI OLDUĞU DURUMDA THEN İLE ULAŞIYORUZ
//promise1.catch(reason=> console.log(reason));// ERROR BAŞARISIZ OLDUĞU DURUMLARDA

*/

//--------------------------------------------------------------------------


const promise1 = new Promise((resolve,reject) => {
	//resolve();
	reject();
}); 

promise1.catch(() => {              //burasi aslinda CALLBACK gibidir
	console.log('VERILER ALINAMADI')
}) ;

// genel yazımı

/* promise1
   .then( ()=>{
	console.log('VERİLER ALINDI....');
})
  .catch(() =>{
	console.log('VERİLER ALINMADI....');
})
.finally(() =>{
	console.log('ÇALIŞ KÖLEE....'); //HER DURUMDA SONUÇ DÖNSÜN DİYE
}); */

//--------------------------------------------------------------------

const promise2 = new Promise( (resolve,reject) => reject()); 

// iki tane callback then ile yakalanabiliyor.
promise2.then( ()=>{
	console.log('VERİLER ALINDI....');
},()=>{
	console.log('VERİLER ALINMADIIIII....');
})  

//--------------------------------------------------------------------




const books2= [
	{name: 'Pinbal 1973', author:'Haruki Maruki'},
	{name: 'Özgürlük', author:'Haruki Maruki'},
	{name: 'Türkiye de çağdaşlaşama', author:'Niyazi Berkay'}
]

const listBooks2 = () => {
	books2.map ((book,index) => {
		console.log(book, index);

	})
}
/* 
const add_NewBook = (newBook , callback) =>{
	books2.push(newBook);
	callback();          //callback degil promisle nasil yapacagiz?
} */

const add_NewBook = (newBook) => {
	const promiseee = new Promise((resolve , reject) => {
		books2.push(newBook);
		resolve(books);
		reject('EROR');
	});
	return promiseee;//bunu unutma hata alırsın
}

//addNewBook({name:'Berlin Hatıraları',author:'Hüsrev Gerede'},listBooks);  //callback de böyleydi

add_NewBook({name:'Berlin Hatıraları',author:'Hüsrev Gerede'})
.then(() => {
	console.log('yeni liste');
	listBooks2();
})
.catch((reason)=>{
	console.log(reason);
});
