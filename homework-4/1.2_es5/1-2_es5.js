'use strict';

/**
 * функция принимает нижеуказанные параметры и сохраняет их как свойства объекта
 * метод edit принимает текст и записывает его в свойство text объекта
 * @param {string} author 
 * @param {string} text 
 * @param {string} date 
 * @returns {object}
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}
Post.prototype.edit = function(editText) {
    this.text = editText;
}

let post1 = new Post('Jim', 'I am Lizard King', '03.06.1971');
console.log(post1);
post1.edit('I am Lizard King I can do anything');
console.log(post1);

/**
 * функция принимает нижеуказанные параметры и сохраняет их как свойства объекта
 * метод edit принимает текст и записывает его в свойство text объекта
 * свойство highlighted по умолчанию false
 * метод makeTextHighlighted изменяет свойство hightlighted на true
 * @param {string} author 
 * @param {string} text 
 * @param {string} date 
 */
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
	this.highlighted = true;
}

let post2 = new AttachedPost('Ivan', 'lorem 2', '19.06.2020');
console.log(post2);
post2.makeTextHighlighted();
post2.edit('some edited text');
console.log(post2);

