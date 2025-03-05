
const student={
	name:"balram",
	age:24,
	city:"palwal"
}

const myObj={
	getKeys: function(obj){
		return Object.keys(obj)
	}
}
window.myObj=myObj
console.log(myObj.getKeys(student));