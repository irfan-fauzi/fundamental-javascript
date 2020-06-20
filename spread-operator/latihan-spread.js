const container = document.querySelector('.container');
const text = document.querySelector('.heru');
const iterebleString = "heru";
const arraytext = [...iterebleString];
const [h, e, r, u] = arraytext;
// 
for (let i = 0; i < arraytext.length; i++) {
    const span = document.createElement('span');
    text.appendChild(span);
}
const decSpan = document.querySelectorAll('span');
for (el of decSpan) {
    el.classList.add('sp');
}
const [span1, span2, span3, span4] = decSpan;
span1.textContent = h;
span2.textContent = e;
span3.textContent = r;
span4.textContent = u;

container.addEventListener('click', function (e) {
    if (e.target.className == 'sp') {
        if (e.target.textContent == h) {
            span1.classList.toggle('zoom');
        }
    }
});



