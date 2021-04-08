function reverse_a_number(n)
{
	var c = n.toString();
	return c.split("").reverse().join("");
}
console.log(reverse_a_number(32246));