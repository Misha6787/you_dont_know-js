'Use strict ';
const   books = document.querySelector('.books'),
        book = document.querySelectorAll('.book'),
        ul = document.querySelectorAll('ul'),
        body = document.querySelector('body'),
        h2 = document.querySelectorAll('h2'),
        adv = document.querySelector('.adv'),
        li = document.querySelectorAll('li');

        
body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";
adv.remove();


books.append(book[1]);
books.append(book[0]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);


h2[4].innerHTML = `<a href="https://github.com/azat-io/you-dont-know-js-ru/blob/master/this%20%26%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes"
               target="_blank">Книга 3. this и Прототипы Объектов</a></h2>`;


ul[0].prepend(li[9]);
ul[0].prepend(li[7]);
ul[0].prepend(li[5]);
ul[0].prepend(li[4]);
ul[0].prepend(li[8]);
ul[0].prepend(li[6]);
ul[0].prepend(li[3]);
ul[0].prepend(li[1]);
ul[0].prepend(li[0]);


ul[5].prepend(li[56]);
ul[5].prepend(li[54]);
ul[5].prepend(li[51]);
ul[5].prepend(li[53]);
ul[5].prepend(li[52]);
ul[5].prepend(li[48]);
ul[5].prepend(li[50]);
ul[5].prepend(li[49]);
ul[5].prepend(li[55]);
ul[5].prepend(li[47]);
ul[5].prepend(li[46]);


ul[2].insertAdjacentHTML('beforeend', `<li>Глава 8: За пределами ES6</li>`);
ul[2].append(li[26]);

