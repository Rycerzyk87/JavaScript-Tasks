const menu = $(".menu a");
this.websites = ['onet', 'wp', 'facebook'];
const App = function () {

    this.links = [];
}


App.prototype.generateLinks = function (array) {
    this.websites.forEach((a, i, array) => {
        const url = `https://${a}.pl`;
        this.links.push(url);
    });
};




let app = new App();
app.generateLinks(websites);
console.log(app.links);

for (let i = 0; i < menu.length; i++) {
    menu.eq(i).attr("href", app.links);
}
