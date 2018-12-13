// Write a function that accepts a string and returns the reverse of that string.

const reverse = str => {
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
};

console.log(reverse('weclome'));