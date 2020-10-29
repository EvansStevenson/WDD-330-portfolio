export default class Comment{
    constructor(hike, content){
       this.comment = {};
       this.commentList=[];
    }

    getAllComments(){
        let allComments = JSON.parse(window.localStorage.getItem('commentList'));
        return allComments;
    }

    renderCommnetList(){
        let filterComments = this.filterCommentsByName();
    }

    renderOneHike(hikeName){
        let filterComments = this.filterCommentsByName();
        //console.log(filterComments);
        let display = "";
        if (hikeName === "Bechler Falls"){
            for (let comment of filterComments.bechkerFalls){
                display += "<p>" + comment.content + "</p><p>" + comment.Date + "</p><br>";
            }
        }
        else if(hikeName === "Teton Canyon"){
            for (let comment of filterComments.tetonCanyon){
                display += "<p>" + comment.content + "</p><p>" + comment.Date + "</p>";
            }
        }
        else if(hikeName === "Denanda Falls"){
            for (let comment of filterComments.denandaFalls){
                display += "<p>" + comment.content + "</p><p>" + comment.Date + "</p>";
            }
        }
        document.getElementById('oneHikeCommnets').innerHTML = display;
    }

    filterCommentsByName(){
        let allComments = this.getAllComments();
        let bechkerFalls = [];
        let tetonCanyon = [];
        let denandaFalls = [];
        //console.log(allComments);
        if (allComments !== null) {
            for (let comment of allComments){
                if (comment.name === "Bechler Falls"){
                    bechkerFalls.push(comment);
                }
                else if(comment.name === "Teton Canyon"){
                    tetonCanyon.push(comment);
                }
                else if(comment.name === "Denanda Falls"){
                    denandaFalls.push(comment);
                }
            }
        }
        return {bechkerFalls: bechkerFalls, tetonCanyon: tetonCanyon, denandaFalls: denandaFalls};
    }

    

    addComment(hike, content){
        this.comment = {
            name: hike,
            Date: new Date().toLocaleTimeString(),
            content: content
        }
        this.commentList.push(this.comment);
        window.localStorage.setItem('commentList', JSON.stringify(this.commentList));
    }
}