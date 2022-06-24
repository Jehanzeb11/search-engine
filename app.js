let img=document.getElementById('img');

let mobiles = {
  apple: {
    iphone13: {
      modelName: "iphone13",
      price: "5000",
      color: "gold",
      cameraFront: "10mp",
      cameraBack: "12mp",
      image: "iphone13.jpeg",
    },
    iphone12: {
      modelName: "iphone12",
      price: "2500",
      color: "black",
      cameraFront: "8mp",
      cameraBack: "10mp",
      image: "iphone-12.png",
      

    },
    iphone11: {
      modelName: "iphone11",
      price: "5000",
      color: "white",
      cameraFront: "10mp",
      cameraBack: "12mp",
      image: "iphone11.webp",
      
   
    },
    iphonex: {
      modelName: "iphonex",
      price: "2500",
      color: "red",
      cameraFront: "8mp",
      cameraBack: "10mp",
      image: "iphone-x.jpg",
      
   

    },
  },
  samsung: {
    s22: {
      modelName: "s22",
      price: "300k",
      color: "white",
      cameraFront: "12mp",
      cameraBack: "18mp",
      image: "s22.jpg",
      
   
    },
    s21: {
      modelName: "s21",
      price: "2.500k",
      color: "black",
      cameraFront: "8mp",
      cameraBack: "12mp",
      image: "s21.webp",
      
   
    },
    a52: {
      modelName: "a52",
      price: "300k",
      color: "white",
      cameraFront: "12mp",
      cameraBack: "18mp",
      image: "a52.jpg",
      
   
    },
    a32: {
      modelName: "a32",
      price: "2.500k",
      color: "black",
      cameraFront: "8mp",
      cameraBack: "12mp",
      image: "a32.jpg",
      
   
    },
  },
  oppo: {
    f19: {
      modelName: "f19",
      price: "1200",
      color: "red",
      cameraFront: "12mp",
      cameraBack: "24mp",
      image: "f19.jpg",
      
   
    },
    f17: {
      modelName: "f17",
      price: "2000",
      color: "blue",
      cameraFront: "5mp",
      cameraBack: "5mp",
      image: "f17.png"
      
   
    },
    reno6: {
      modelName: "reno6",
      price: "2000",
      color: "golden",
      cameraFront: "5mp",
      cameraBack: "5mp",
      image: "reno6.jpg",
      
   
    },
    reno5: {
      modelName: "reno5",
      price: "2000",
      color: "pink",
      cameraFront: "5mp",
      cameraBack: "5mp",
      image: "reno5.webp",
      
   
    },
  },

};


let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');



function submit() {


  let brand = inp1.value;
  let mobile = inp2.value;



  if (mobiles[brand]) {

    if (mobiles[brand][mobile]) {

      console.log(mobiles[brand][mobile]);
      console.log(mobiles[brand][mobile].image);
      img.src = mobiles[brand][mobile].image
      img.style.display = 'block';
    }
  } else {

    console.log("Data not found");

  }
}
