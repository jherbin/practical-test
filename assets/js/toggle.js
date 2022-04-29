// /view?image=2
// /view.html?zoom=0.88&x=-16&y=11
// http://127.0.0.1:5500/view?image=1.html?zoom=0.88&x=-16&y=11

const images = ['B1_1.jpg', 'B1_2.jpg', 'B1_3.jpg'];

const URL = window.location.href;
console.log(URL);
imageIndex = URL.match(/view\?image=\d+/);
console.log(imageIndex);
