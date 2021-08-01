console.log("working")
var slide_imgs=document.querySelector('.slide-img');//selector to get pics

// var images =['/images/pic1.png','/images/pic2.png','/images/pic3.png','/images/pic4.png','/images/pic5.png']
// var images =['/images/pic1.png','/images/pic2.png','/images/pic3.png','/images/pic4.png','/images/pic5.png','/images/cincinnati-museaum.jpg','/images/niagara-falls-blue.jpg','/images/Rainbow Bridge.jpg'];
var myImages=['./images/Rainbow Bridge.jpg', './images/roberto-motoi-amvDOVI9BiQ-unsplash.jpg','./images/robin-davidson-w_7z6Ga03lo-unsplash.jpg','./images/thomas-despeyroux-YELKk7PUeUY-unsplash.jpg',
'./images/shutterstock_316978307.jpg','./images/niagara-falls-blue.jpg','./images/harry-gillen-idPidnuXiaM-unsplash.jpg'];

var i = 0;//first picture index

//attempt to use ES6 syntax for function in javascript-UGHHH!!
// var changePicture =(x) => {
//     currentPic += x
    
//     if(currentPic > images.length + 1){
//             currentPic = 0

//             if(currentPic <= 0){
//                 currentPic = images.length -1
//     }
//      document.getElementById("img").src= images[currentPic]
       

    // }
    function changePictureP(){

        if(i <= 0)
            i = myImages.length;
            i--;
            return getPicture();

    }

    function changePictureN(){
        if(i >= images.length-1) i = -1;
            i++;
            return getPicture();
        console.log('in changePictureF');
    }

    function getPicture(){
        return slide_imgs.setAttribute('src', ".images/"+myImages[i]);
        console.log('getpicture function');
    }
