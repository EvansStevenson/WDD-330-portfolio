import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
//cosnt comments = new Comment();
window.addEventListener('load', () => {
  myHikes.showHikeList();
});
