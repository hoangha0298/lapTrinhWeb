// code html của 1 game
var itemGame =
    "                   <div class=\"container-item-game\">\n" +
    "                        <div class=\"item-game game-sale\">\n" +
    "                            <img src=\"https://cdn.images.express.co.uk/img/dynamic/143/590x/PUBG-Mobile-Season-10-1201532.jpg?r=1573153336341\"\n" +
    "                                width=\"100%\" height=\"100%\">\n" +
    "                            <div class=\"item-name-and-price\">\n" +
    "                                <p>Battle</p>\n" +
    "                                <s>450.000</s>" +
    "                                <h4>350.000 VND</h4>\n" +
    "                            </div>\n" +
    "                            <div class=\"item-add\">\n" +
    "                                <i class=\"fas fa-heart\">\n" +
    "                                    <div class=\"item-favorite\">Thêm vào yêu thích</div>\n" +
    "                                </i>\n" +
    "                                <button class=\"content-btn\">Thêm vào giỏ</button>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n";

document.getElementById("list-game").innerHTML = addGame();
document.getElementById("present-view").innerHTML = addPresentView();
document.getElementById("list-game-bottom").innerHTML = addGameBottom();
// thay đổi thuộc tính display cho menu
function menuDropDow(id) {
    var display = document.getElementById(id).style.display;
    console.log(display);
    if (display == 'block') document.getElementById(id).style.display = 'none';
    else document.getElementById(id).style.display = 'block';
}
// thêm các nút 1 2 3 4 ... 17
function addPresentView() {
    var content = "";
    for (var i = 0; i < 4; i++) {
        content += "<li><div class=\"content-btn\">" + i + "</div></li>";
    }
    content += "<li><div>...</div></li>" 
    + "<li><div class=\"content-btn\">" + 17 + "</div></li>"
    + "<li><div class=\"content-btn\">Next</div></li>";

    return content;
}
// thêm danh sách game
function addGameBottom() {
    var content = "";
    for (var i = 0; i < 2; i++) {
        content += "<div class=\"row-game\">\n";
        for (var j = 0; j < 3; j++) {
            content += itemGame;
        }
        content += "</div>";
    }
    return content;
}
// thêm danh sách game
function addGame() {
    var content = "";
    for (var i = 1; i < 5; i++) {
        content += "<div class=\"row-game\">\n";
        for (var j = 0; j < 3; j++) {
            content +=  itemGame;
                
        }
        content += "</div>";
    }
    return content;
}



