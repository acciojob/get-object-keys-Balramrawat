
const student={
	name:"balram"
	
}

// const myObj={
// 	getKeys: function(obj){
// 		return Object.keys(obj)
// 	}
// }

function getKeys(obj) {
  // return Object.keys(obj);
}

Object.prototype.getKeys=function(){
	return Object.keys(this)
}
// console.log(getKeys(student));

