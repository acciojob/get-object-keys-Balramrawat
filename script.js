
const student={
	name:"balram",
	age:24,
	city:"palwal"
}

function getKeys(obj) {
  return Object.keys(obj);
}

window.getKeys=getKeys;
window.student=student;

console.log(getKeys(student));