'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

let post1 = new Post('Jim', 'I am Lizard King', '03.06.1971');
console.log(post1);
post1.edit('I am Lizard King I can do anything');
console.log(post1);

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.hightlighted = false;
    }
    makeTextHightlighted() {
        this.hightlighted = true;
    }
}

let post2 = new AttachedPost('Ivan', 'lorem 2', '19.06.2020');
console.log(post2);
post2.makeTextHightlighted();
post2.edit('some edited text');
console.log(post2);