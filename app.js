const hero = document.querySelector(".hero")
const text= hero.querySelector("h1")
const walk = 100;
function shadow(e){
const width = hero.offsetWidth
const height = hero.offsetHeight
if(e.targetTouches){
    var x =  e.targetTouches[0].clientX
    var y = e.targetTouches[0].clientY
 }else{
     var x = e.offsetX
     var y = e.offsetY
 }
if(this !== e.target){
    if(e.targetTouches){
        x = x + e.targetTouches[0].clientX
        y= y + e.targetTouches[0].clientY
    }else {
        x = x+ e.target.offsetX
        y = y + e.target.offset
    }

}

// let  {offsetX: x, offsetY: y} = e;
// if(this !== e.target){
// x = x+ e.target.offsetX
// y = y + e.target.offset
// }
console.log(e)
const xWalk = Math.round((x / width * walk) - (walk /2))
const yWalk = Math.round((y / height * walk) - (walk /2))
text.style.textShadow = `
${xWalk}px ${yWalk}px 0 rgba(255,0,225,0.7),
${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,255,225,0.7),
${xWalk * -1}px ${yWalk}px 0 rgba(0,255,0,0.7),
${xWalk}px ${yWalk * -1}px 0 rgba(0,0,255,0.7)



`
}
hero.addEventListener("mousemove", shadow)
hero.addEventListener("touchmove", shadow)