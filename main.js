let a = prompt('enter the 1st number')
let b = prompt('enter the 2nd number')
const sub = (a, b) => {
	if (b == 0) {
		return a
	}
	return sub(a ^ b, (~a & b) << 1)
}
document.write("given number a= " + a + "<br><br>")
document.write("given number b= " + b + "<br><br>")
document.write("subtract is= " + sub(a, b))