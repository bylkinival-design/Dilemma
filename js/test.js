var sum = 0;
function but(html) {
    sum++;
    html.innerHTML = sum;
    console.log(html.getAttribute('onclick'));
    html.setAttribute('onclick', 'mouse(this)')
    console.log(html.getAttribute('onclick'));

}
function mouse(html) {
    console.log(html.value.includes(' hello ')?'AYE':'dolabeb');
}
