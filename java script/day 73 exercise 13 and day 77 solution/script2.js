function createcard(title,cname,views,monthld,duration,tumbnail) {
let html= `<div class="card">
            <div class="image">
                <img src="${tumbnail}" alt="">
                <div class="duration">${duration}</div>
            </div>
            <div class="text">
                <h2>${title}</h2>
                <p>${cname} • ${views} views • ${monthld} ago</p>
            </div>
        </div>`   
        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML+html
}
createcard("hi my name frontend development","lathish with harry",590,7,"50:00","hqdefault.avif")
createcard("hi my name frontend development","lathish with harry",590,7,"50:00","hqdefault.avif")