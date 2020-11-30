class User {
    constructor(name, password, avatar) {
        this.name = name;
        this.password = password;
        this.avartar = avatar;

    }

}

class Comment {
    constructor(user, content, time) {
        this.user = user;
        this.content = content;
        this.time = time;
    }
}

let user = new User('Khách vãng lai', '123456', 'images/c2.jpg')

function renderCommentList() {
    let listComment = [];
    let time = new Date('Mon Nov 30 2020 14:05:18 GMT+0700 (Indochina Time)');
    alert(time);
    listComment.push(new Comment(user,
        'Phim này cũng tạm ổn, nội dung khá mới mẻ',
        new Date('Mon Nov 30 2020 11:05:18 GMT+0700 (Indochina Time)')));
    listComment.push(new Comment(user,
        'Phim này cũng tạm ổn, nội dung khá mới mẻ',
        new Date('Mon Nov 30 2020 14:05:18 GMT+0700 (Indochina Time)')));
    listComment.push(new Comment(user,
        'Phim này cũng tạm ổn, nội dung khá mới mẻ',
        new Date('Mon Nov 30 2020 08:30:18 GMT+0700 (Indochina Time)')));
    listComment.push(new Comment(user,
        'Phim này cũng tạm ổn, nội dung khá mới mẻ',
        new Date('Mon Nov 30 2020 10:16:18 GMT+0700 (Indochina Time)')))
}
function getDistanceTime(value) {
    let time = new Date(value);
    let seconds = time.getTime()/1000;
    let currentSeconds = new Date().getTime()/1000;
    let distance = currentSeconds - seconds;
    if (distance<60){
        return '1 phút'
    }
    if (distance<3600){
        return  distance/60 +'phút'
    }
    return distance/3600 + 'giờ'

}
function comment() {
    let time = new Date();
    alert(time.getFullYear());
    let commentContent = document.getElementById('new-comment').value
    if (commentContent === '') {
        return;
    }
    let comments = document.getElementById('comment-list');
    let newComment = document.createElement('li');
    newComment.setAttribute('class', 'comment');
    newComment.innerHTML = '<div class="avatar">\n' +
        `                    <img src="${user.avartar}" alt="Avatar">\n` +
        '                </div>\n' +
        '                <div class="comment-detail">\n' +
        `                    <h4 class="user-name">${user.name}</h4>\n` +
        `                    <span class="comment-content">${commentContent}</span>\n` +
        `                    <p class="create-at">Vừa xong</p>\n` +
        '                </div>';
    comments.appendChild(newComment);
    document.getElementById('new-comment').value = ''
}
