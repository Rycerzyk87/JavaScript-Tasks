const menu = $(".menu a");
this.websites = ['onet', 'wp', 'facebook', 'google', 'interia'];
const App = function () {

    this.links = [];
}


App.prototype.generateLinks = (array) => {
    this.websites.forEach((link, i, array) => {
        const url = `https://${link}.pl`;
        this.links.push(url);
    });
};

let app = new App();
app.generateLinks(websites);
// console.log(app.links);

for (let i = 0; i < menu.length; i++) {
    menu.eq(i).attr("href", app.links);
}
