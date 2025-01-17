/*
Маленькая девочка считает от 1 до N на пальцах одной руки следующим образом:
Она начинает с большого пальца - говорит 1.
Потом 2 - это Указательный.
Потом 3 - это Средний.
Потом 4 - это Безымянный.
Потом 5 - это Мизинец.
И продолжает в обратную сторону: безымянный — 6, средний — 7, указательный — 8, большой — 9.
Потом указательный — 10 и так далее.
Если она продолжит считать таким образом N шагов, то на каком пальце она закончит?
Пусть N = 1000.
*/

var fingers = ['большой','указательный','средний','безымянный','мизинец'];

$('button').click( function () {
	let num = $('#text').val();
	let result = get_result(parseInt(num));
	alert('finger - ' + String(result) + '\n' + fingers[result-1]);
});

function get_result(n) {
	if ((n<1) || (n>2000)) {
		return 'введённое значение не может быть обработано';
	}
	else {
		i = 1; pos = 1; shift = 1;
		while (i<n) {
			i++;
			if (pos == 5) {
				shift = -1;
			}
			if (pos == 1) {
				shift = +1;
			}
			pos += shift;
		}
		return pos;
	}
}