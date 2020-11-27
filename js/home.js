window.onload = function () {
    class FilmItem {
        constructor(name, image, content) {
            this.name = name;
            this.image = image;
            this.content = content;
        }
    }

    let listFilm = [];
    listFilm.push(new FilmItem('Lorem ipsum dolor sit amet consector dapster', '1.jpg', 'Một bộ phim mới của hãng phim supremeTech'));
    listFilm.push(new FilmItem('Lorem ipsum dolor sit amet consector dapster', '2.jpg', 'Một bộ phim mới của hãng phim supremeTech'));
    listFilm.push(new FilmItem('Lorem ipsum dolor sit amet consector dapster', '3.jpg', 'Một bộ phim mới của hãng phim supremeTech'));
    listFilm.push(new FilmItem('Lorem ipsum dolor sit amet consector dapster', 'article1.jpg', 'Một bộ phim mới của hãng phim supremeTech'));
    listFilm.push(new FilmItem('Lorem ipsum dolor sit amet consector dapster', 'article3.jpg', 'Một bộ phim mới của hãng phim supremeTech'));
    let films = document.getElementById('list-film');
    for (let film of listFilm) {
        let li = document.createElement("li");
        li.setAttribute('class', 'banner-aside-item');
        li.innerHTML = "<div class='banner-item-bgr'>" + "\n" +
            "<img src='./images/" + film.image + "' alt=''>" + "\n" +
            "</div>" + "\n" +
            "<div class='banner-item-content'>" + "\n" +
            "<h3><a href='./comment.html'>" + film.name + "</a></h3>" + "\n" +
            "<span>" + film.content + "</span>" + "\n" +
            "</div>";
        films.appendChild(li);
    }
}
