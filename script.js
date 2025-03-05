
const student={
	name:"balram",
	age:24,
	city:"palwal"
}

window.myObj = {
	getKeys: function(obj){
		return Object.keys(obj)
	}
}

console.log(window.myObj.getKeys(student));

// const myObj={
// 	getKeys: function(obj){
// 		return Object.keys(obj)
// 	}
// }
// window.myObj=myObj

// console.log(myObj.getKeys(student));