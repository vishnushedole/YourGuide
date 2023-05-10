import GetNews from './Components/getNews.js'
document.getElementById('srchbtn').addEventListener("click", src);
function src()
{
    console.log('hi')
    let key = document.getElementById('search').value;
    GetNews.search(key);
}