var buffer = new ArrayBuffer(8);
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
console.log(view);
view[2] = 20;
console.log(view);



//var buffer = new Buffer('Hello', 'utf8');
//console.log(buffer);
//console.log(buffer.toString());
//console.log(buffer.toJSON());
//console.log(buffer[2]);
//buffer.write('wo');
//console.log(buffer.toString());

