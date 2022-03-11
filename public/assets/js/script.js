const width=window.innerWidth

const height=window.innerHeight
a=width*5.65/100*0.0545 //5
ab=width*5.65/100 //95
abc=width*5.65/100*1.95 //185
abcd=width*5.65/100*2.9 //275
abcde=width*5.65/100*3.84 //365
function setsize(){
    var lastWidth = $(window).width();

    $(window).resize(function(){
       
       if($(window).width()!=lastWidth){
           
          location.reload(true)
          lastWidth = $(window).width();
       }
    })    
        
    
var image1=document.getElementById('a')
image1.style.width=(width*5.65/100*1.21).toString()+"px"
var image2=document.getElementById('b')
image2.style.width=(width*5.65/100*1.21).toString()+"px"
var image3=document.getElementById('c')
image3.style.width=(width*5.65/100*1.32).toString()+"px"
var image4=document.getElementById('d')
image4.style.width=(width*5.65/100*1.21).toString()+"px"
var image5=document.getElementById('e')
image5.style.width=(width*5.65/100*1.21).toString()+"px"
var image6=document.getElementById('f')
image6.style.width=(width*5.65/100*1.21).toString()+"px"
var image7=document.getElementById('g')
image7.style.width=(width*5.65/100*1.21).toString()+"px"
var image8=document.getElementById('h')
image8.style.width=(width*5.65/100*1.21).toString()+"px"
var image9=document.getElementById('i')
image9.style.width=(width*5.65/100*1.21).toString()+"px"
var image10=document.getElementById('j')
image10.style.width=(width*5.65/100*1.158).toString()+"px"
var image11=document.getElementById('k')
image11.style.width=(width*5.65/100*1.158).toString()+"px"
var image12=document.getElementById('l')
image12.style.width=(width*5.65/100*1.21).toString()+"px"
var image13=document.getElementById('m')
image13.style.width=(width*5.65/100*1.21).toString()+"px"
$('.a').css('top',a.toString()+"px")
$('.a').css('left',a.toString()+"px")
$('.b').css('top',ab.toString()+"px")
$('.b').css('left',ab.toString()+"px")
$('.c').css('top',a.toString()+"px")
$('.c').css('left',ab.toString()+"px")
$('.d').css('top',a.toString()+"px")
$('.d').css('left',abcd.toString()+"px")
$('.e').css('top',ab.toString()+"px")
$('.e').css('left',abcd.toString()+"px")
$('.f').css('top',abcd.toString()+"px")
$('.f').css('left',ab.toString()+"px")
$('.g').css('top',abcd.toString()+"px")
$('.g').css('left',abc.toString()+"px")
$('.h').css('top',abcd.toString()+"px")
$('.h').css('left',abcd.toString()+"px")
$('.i').css('top',abc.toString()+"px")
$('.i').css('left',a.toString()+"px")
$('.j').css('top',abcd.toString()+"px")
$('.j').css('left',a.toString()+"px")
$('.k').css('top',abcde.toString()+"px")
$('.k').css('left',a.toString()+"px")
$('.l').css('top',abc.toString()+"px")
$('.l').css('left',ab.toString()+"px")
$('.m').css('top',abc.toString()+"px")
$('.m').css('left',abc.toString()+"px")
}
function animateDivb(){
    var newq = [[ab,ab],[ab,ab],[ab,abc],[ab,abcd],[a,abcd],[a,abc],[a,abcd]];
        for(var i=0;i<newq.length;i++){
            
                $('.b').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
              );
            
            }
}
       
function animateDiva(){
    var newq = [[a,a],[a,a],[a,ab],[a,abc],[ab,abc],[ab,abcd],[abc,abcd]];
        for(var i=0;i<newq.length;i++){
            
                $('.a').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
              );
            
            }
            
}
function animateDivc(){
    var newq = [[a,ab],[a,ab],[a,abc],[ab,abc],[abc,abc],[ab,abc],[ab,abcd]];
        for(var i=0;i<newq.length;i++){
            
                $('.c').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivd(){
    var newq = [[a,abcd],[a,abcd],[ab,abcd],[abc,abcd],[abcd,abcd],[abcd,abcde],[abcd,abcd]];
        for(var i=0;i<newq.length;i++){
            
                $('.d').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDive(){
    var newq = [[ab,abcd],[ab,abcd],[abcd,abcd],[abcde,abcd],[abcde,abc],[abcde,ab],[abcde,abc]];
        for(var i=0;i<newq.length;i++){
            
                $('.e').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivf(){
    var newq = [[abcd,ab],[abcd,ab],[abcd,a],[abc,a],[ab,a],[ab,ab],[ab,a]];
        for(var i=0;i<newq.length;i++){
            
                $('.f').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivg(){
    var newq = [[abcd,abc],[abcd,abc],[abcde,abc],[abcde,ab],[abcde,a],[abcd,a],[abcd,ab]];
        for(var i=0;i<newq.length;i++){
            
                $('.g').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivh(){
    var newq = [[abcd,abcd],[abcd,abcd],[abcd,abc],[abcd,ab],[abcde,ab],[abcd,ab],[abcde,ab]];
        for(var i=0;i<newq.length;i++){
            
                $('.h').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivi(){
    var newq = [[abc,a],[abc,ab],[abcd,ab],[abcd,a],[abc,a],[ab,a],[abc,a]];
        for(var i=0;i<newq.length;i++){
            
                $('.i').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivj(){
    var newq = [[abcd,a],[ab,a],[ab,ab],[ab,ab],[abc,ab],[abc,abc],[ab,abc]];
        for(var i=0;i<newq.length;i++){
            
                $('.j').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivk(){
    var newq = [[abcde,a],[abc,a],[ab,a],[ab,a],[ab,ab],[abc,ab],[abc,ab]];
        for(var i=0;i<newq.length;i++){
            
                $('.k').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivl(){
    var newq = [[abc,ab],[abc,abc],[abc,abcd],[abc,abc],[abcd,abc],[abcd,abcd],[abcd,abc]];
        for(var i=0;i<newq.length;i++){
            
                $('.l').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}
function animateDivm(){
    var newq = [[abc,abc],[ab,abc],[abc,abc],[abc,ab],[abcd,ab],[abcd,abc],[abc,abc]];
        for(var i=0;i<newq.length;i++){
            
                $('.m').animate({ top: newq[i][0], left: newq[i][1] }, 1000       
                );
            
            }
}

setInterval(function(){
    setsize()
    
    
},200)
setInterval(function(){
    animateDiva()
    
    
},200)
setInterval(function(){
    animateDivb()
},200)   
setInterval(function(){
    animateDivc()
},200)    
setInterval(function(){
    animateDivd()
},200)   
setInterval(function(){
    animateDive()
},200)    
setInterval(function(){
    animateDivf()
},200)       
setInterval(function(){
    animateDivg()
},200)    
setInterval(function(){
    animateDivh()
},200)    
setInterval(function(){
    animateDivi()
},200)  
setInterval(function(){
    animateDivj()
},200)  
setInterval(function(){
    animateDivk()
},200) 
setInterval(function(){
    animateDivl()
},200) 
setInterval(function(){
    animateDivm()
},200) 


   
gsap.to('.card-a', {scrollTrigger:{
    trigger:'.card-a',
    
    toggleActions: "restart none none none"
} , y: -50, opacity:1, duration: 1,})
gsap.to('.card-b', {scrollTrigger:{
    trigger:'.card-b',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('.card-c', {scrollTrigger:{
    trigger:'.card-c',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1})
gsap.to('.card-d', {scrollTrigger:{
    trigger:'.card-d',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('#aboutus', {scrollTrigger:{
    trigger:'#aboutus',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('#gallery', {scrollTrigger:{
    trigger:'#gallery',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('.gallery', {scrollTrigger:{
    trigger:'#gallery',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('.footer>.container', {scrollTrigger:{
    trigger:'.footer',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('#teamheading', {scrollTrigger:{
    trigger:'#teamheading',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('.team', {scrollTrigger:{
    trigger:'#teamheading',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('.team-small-device-only', {scrollTrigger:{
    trigger:'#teamheading',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})
gsap.to('.contact', {scrollTrigger:{
    trigger:'.contact',
    toggleActions: "restart none none none"
}, y: -50, opacity:1, duration: 1,})


