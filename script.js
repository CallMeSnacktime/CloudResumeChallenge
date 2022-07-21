var count = localStorage.getItem('counter');

if (count == null) {
    count = 1;
} else {
	count++;
}
localStorage.setItem("counter", count);

document.getElementById('counter').innerHTML = count;