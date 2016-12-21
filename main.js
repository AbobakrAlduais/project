var restAr1={name:"Sufra Restaurant",address:"Amman, Rainbow Street",tel:"+962 6 461 1468",type:"Arabic"}
var restAr2={name:"Hashem",address:"Amman,Al-Amir Mohammed St Downtown",tel:"+962 6 463 6440",type:"Arabic"}
var restAr3={name:"Tawaheen al-Hawa",address:"Amman,Wasfi al-Tal Rd",tel:"+962 6 534 9986",type:"Arabic"}
var restAr4={name:"Al-Quds Restaurant",address:"Amman,Downtown",tel:"4630168",type:"Arabic"}
var restAr5={name:"Bab al-Yemen",address:"Amman, University Street",tel:"+962 6 534 0834",type:"Arabic"}
var arabic = [restAr1,restAr2,restAr3,restAr4,restAr5];
/////
var restAsian1={name:"Oishi‬",address:"Amman,Taj Mall‬ | Prince Hashim Bin Al Hussein 693",tel:"+962 7 9779 0999",type:"Asian"};
var restAsian2={name:"‪China Town‬",address:"Amman,Queen Noor Street",tel:"+962 6 569 6511",type:"Asian"};
var restAsian3={name:"‪Ishi Noodles and Rice‬",address: "Amman, Ali Nasuh Al Tahir 62‬",tel:"+962 6 585 2234",type:"Asian"};
var restAsian4={name:"Islamic Chinese Food",address:"Amman,  Swelieh",tel:"+962 6 569 6555",type:"Asian"};
var restAsian5={name:"Yoshi",address:"Amman, Methaqal Al Fayez Street",tel:"+962 6 464 0903",type:"Asian"};
var asian=[restAsian1,restAsian2,restAsian3,restAsian4,restAsian5];
///

var restWestern1={name:"Brisket",address:"Amman, Shmisani, Next to Abella Superstores",tel:"+962 7 9950 6020",type:"Western"};
var restWestern2={name:"Chestnut Restaurant & Pub",address:"Amman, Salma Bin Khalal Street ",tel: "+962 7 7500 0075",type:"Western"};
var restWestern3={name:"Blue Fig",address:"Amman, Prince Hashem bin al-Hussein St, Abdoun",tel:"5928800",type:"Western"};
var restWestern4={name:"Fatty Dab's Burger Shack",address:"Amman, Abdoun | Next to Abdoun Mall",tel:"+962 0 9950 6020",type:"Western"};
var restWestern5={name:"Firefly Burger",address:"Amman, Rainbow St",tel:"+962 6 585 1134",type:"Western"};
var western=[restWestern1,restWestern2,restWestern3,restWestern4,restWestern5];


function MainFun(){
	obj={};
	obj.display=display;

	return obj;
}

 function display(){
	for(var i=0;i<arabic.length;i++){
		$('body').append("<p id= "name">"+arabic[i]['name']+"</p>"+"");
		
	}

}













$("#head").css("color","green");
$("#wilcome").css("color","white");

// function choose(){
//         var x = document.getElementsByTagName("img")
//         x[0].src = "http://images.clipartpanda.com/cat-clipart-e30835d217bb89a72f2c7cd5bcd3a7fc.jpg";
//      }
//      var button=document.getElementById("mybutton");
//      button.onclick=function(){
//     var x = document.getElementsByTagName("img")
//      x[0].src = "http://images.clipartpanda.com/cat-clipart-e30835d217bb89a72f2c7cd5bcd3a7fc.jpg";
//      }