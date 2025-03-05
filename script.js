
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
console.log(myObj.getKeys(student));
window.getKeys = getKeys;