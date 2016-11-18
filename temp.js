/*
pictures : [{ url, x, y }]
x : Number
y : Number
radius : Number

return [{ url, x, y }]
*/
function getPicturesWithin(pictures, x, y, radius) {
	let result = [];

	for(let i = 0; i < pictures.length; i++){
		let p = pictures[i]
		let a = p.x - x
		let b = p.y - y
		let d = Math.sqrt(a*a + b*b)
		if(d < radius){
			result.push(p);
		}
	}
	return result;
}

let getPicturesWithin = (pictures, x, y, r) =>
	pictures.filter(p => {
		let a = p.x - x
		let b = p.y - y
		return Math.sqrt(a * a + b * b) < r
	})

let input = [{
	url: 'abc.jpg',
	x: 5,
	y: 6
}, {
	url: 'xyz.jpg',
	x: 70,
	y: 50
}]

let output = getPicturesWithin(input, 60, 60, 0)

console.log(output);
