window.onload = () => {
    loadLinks(createArray());;
}
function createArray() { //didnt want a huge array to be declared when it was mostly the same material 
    var links = [];     // So I just looped thorugh and pushed wach week with the small changes
    for (let i = 1; i < 15; i++) {
        links.push({
            label: "Week" + i + " notes",
            url: "week" + i + "/index.html"
        })
    }
    links.push({ 
        label: "ToDo app",
        url: "./todoApp/toDo.html"});
    return links;
}
function loadLinks(links) {// create each li elemnt and add to a string
    let filledList = '';
    for (let link of links) {
        filledList += "<li>" + link.label + ': ' + "<a href='" + link.url + "'>" + link.url + "</a>" + "</li>";
    } 
    //console.log(filledList);
    document.getElementById('oderList').innerHTML = filledList;
};





