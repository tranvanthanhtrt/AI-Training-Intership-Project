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

window.onload = function () {
    renderCommentList()
}
let user = new User('Khách vãng lai', '123456', 'images/c3.jpg')

function renderCommentList() {
    let listComment = [];
    let time = new Date();
    listComment.push(new Comment(user,
        'Phim này cũng tạm ổn, nội dung khá mới mẻ',
        new Date('Mon Nov 30 2020 11:05:18 GMT+0700 (Indochina Time)')));
    listComment.push(new Comment(user,
        'Phim hay',
        new Date('Mon Nov 30 2020 14:05:18 GMT+0700 (Indochina Time)')));
    listComment.push(new Comment(user,
        'Bộ phim dở nhất từng xem',
        new Date('Mon Nov 30 2020 08:30:18 GMT+0700 (Indochina Time)')));
    listComment.push(new Comment(user,
        'Phim chiéu chậm quá',
        new Date('Mon Nov 30 2020 10:16:18 GMT+0700 (Indochina Time)')));
    let commentsElement = document.getElementById('comment-list');
    for (let comment of listComment) {
        let li = document.createElement("li");
        li.setAttribute('class', 'comment');
        li.innerHTML = '<div class="avatar">\n' +
            `                    <img src="${user.avartar}" alt="Avatar">\n` +
            '                </div>\n' +
            '                <div class="comment-detail">\n' +
            `                    <h4 class="user-name">${user.name}</h4>\n` +
            `                    <span class="comment-content">${comment.content}</span>\n` + '<br>' +
            `                    <span class="create-at">${getDistanceTime(comment.time)} trước</span>\n` +
            `                    <a href=""><span class="">Thích</span></a> \n` +
            `                    <a href=""><span class="">Bình luận</span></a> \n` +

            '                </div>';
        commentsElement.appendChild(li);
    }
}

function getDistanceTime(value) {
    let time = new Date(value);
    let seconds = time.getTime() / 1000;
    let current = new Date();
    let currentSeconds = current.getTime()/1000;
    let distance = currentSeconds - seconds;
    if (distance < 60) {
        return '1 phút'
    }
    if (distance < 60 * 60) {
        return `${parseInt(distance/60)} phút`
    }
    if (distance < 60 * 60 * 24) {
        return `${parseInt(distance /3600)} giờ`;
        // alert('aha')
    }
    return `${parseInt(distance /(60*60*24) )} ngày`
}

function comment() {
    let time = new Date();
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
        `                    <span class="comment-content">${commentContent}</span>\n` + '<br>'+
        `                    <span class="create-at">Vừa xong</span> \n` +
        `                    <a href=""><span class="">Thích</span></a> \n` +
        `                    <a href=""><span class="">Bình luận</span></a> \n` +
        '                </div>';
    comments.appendChild(newComment);
    document.getElementById('new-comment').value = ''
}
