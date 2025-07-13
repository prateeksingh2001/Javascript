const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   //console.log(key);
}

for (const key in myObject) {
   //console.log(myObject[key]);
}

for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "py", "java", "cpp"]

for (const key in programming) { //print only keys here in arrays
   //console.log(key);
}

for (const key in programming) { //print only keys here in arrays
   //console.log(programming[key]);
}

const map = new Map()   //map is a object that holds key value pairs remembers original order of insertion
map.set('IN', "India")
map.set('FR', "France")
map.set('ENG', "England")
//console.log(map);

for (const key in map) {
    //console.log(key);     ///no output blank
}