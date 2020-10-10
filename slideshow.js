var images=["c1.jpg",
            "c2.jpg",
             "c3.jpg",
            "c4.jpg",
           " c5.jpg"];
var i=0;
function slideshow()
{
document.getElementById("a").src=images[i];
if(i<images.length-1)
i++;
else
i=0;
 
}
setInterval(slideshow,3000)
