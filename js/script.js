'Use strict ';
const   books = document.querySelector('.books'),
        book = document.querySelectorAll('.book'),
        ul = document.querySelectorAll('ul'),
        body = document.querySelector('body'),
        h2 = document.querySelectorAll('h2'),
        adv = document.querySelector('.adv'),
        li0 = ul[0].querySelectorAll('li'),
        li1 = ul[1].querySelectorAll('li'),
        li2 = ul[2].querySelectorAll('li'),
        li3 = ul[3].querySelectorAll('li'),
        li4 = ul[4].querySelectorAll('li'),
        li5 = ul[5].querySelectorAll('li');

body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
adv.remove();

ul[3].prepend(li3[1])

books.append(book[1]);
books.append(book[0]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);


h2[4].innerHTML = `<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"
               target="_blank">Книга 3. this и Прототипы Объектов</a></h2>`;


ul[0].prepend(li0[9]);
ul[0].prepend(li0[7]);
ul[0].prepend(li0[5]);
ul[0].prepend(li0[4]);
ul[0].prepend(li0[8]);
ul[0].prepend(li0[6]);
ul[0].prepend(li0[3]);
ul[0].prepend(li0[1]);
ul[0].prepend(li0[0]);


ul[5].prepend(li5[10]);
ul[5].prepend(li5[8]);
ul[5].prepend(li5[5]);
ul[5].prepend(li5[7]);
ul[5].prepend(li5[6]);
ul[5].prepend(li5[2]);
ul[5].prepend(li5[4]);
ul[5].prepend(li5[3]);
ul[5].prepend(li5[9]);
ul[5].prepend(li5[1]);
ul[5].prepend(li5[0]);


ul[2].insertAdjacentHTML('beforeend', `<li>Глава 8: За пределами ES6</li>`);
ul[2].append(li2[9]);

