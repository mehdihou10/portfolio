// start header 

let logo = document.querySelector("header img");
logo.addEventListener("click",()=>window.scroll(0,0));



let env = document.querySelector("header i");
env.onclick = function(){
    window.scroll(0,10000);
}

let liAct = document.querySelectorAll("header ul li a");

liAct.forEach(function(e){
    e.onclick = function(){
        liAct.forEach((ex)=>{
        if(ex.classList.item("0") === "active"){
            ex.classList.remove("active");
        }
        });
        e.classList.add("active");

    };

});


window.onscroll = function(){


if(window.innerWidth < 500){

    if(window.scrollY < 790){
    liAct.forEach((e)=>{
        if(e.classList.item("0") === "active"){
            e.classList.remove("active");
        }
    });
    liAct[0].classList.add("active");
    }


    if(window.scrollY >= 790 && window.scrollY < 1800){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[1].classList.add("active");

    }


    if(window.scrollY >= 1800 && window.scrollY < 2790){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[2].classList.add("active");

    }

    if(window.scrollY >= 2790 && window.scrollY < 6851){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[3].classList.add("active");

    }


    if(window.scrollY >= 6851 && window.scrollY < 8990){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[4].classList.add("active");

    }


    if(window.scrollY >= 8990){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[5].classList.add("active");

    }
}



if(window.innerWidth>=500 && window.innerWidth < 600){

    if(window.scrollY < 918){
    liAct.forEach((e)=>{
        if(e.classList.item("0") === "active"){
            e.classList.remove("active");
        }
    });
    liAct[0].classList.add("active");
    }


    if(window.scrollY >= 918 && window.scrollY < 2070){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[1].classList.add("active");

    }


    if(window.scrollY >= 2070 && window.scrollY < 3006){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[2].classList.add("active");

    }

    if(window.scrollY >= 3006 && window.scrollY < 6788){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[3].classList.add("active");

    }


    if(window.scrollY >= 6788 && window.scrollY < 8988){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[4].classList.add("active");

    }


    if(window.scrollY >= 8988){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[5].classList.add("active");

    }
}


if(window.innerWidth >= 600 && window.innerWidth <= 767){

    if(window.scrollY < 850){
    liAct.forEach((e)=>{
        if(e.classList.item("0") === "active"){
            e.classList.remove("active");
        }
    });
    liAct[0].classList.add("active");
    }


    if(window.scrollY >= 850 && window.scrollY < 2000){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[1].classList.add("active");

    }


    if(window.scrollY >= 2000 && window.scrollY < 2700){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[2].classList.add("active");

    }

    if(window.scrollY >= 2700 && window.scrollY < 6500){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[3].classList.add("active");

    }


    if(window.scrollY >= 6500 && window.scrollY < 8600){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[4].classList.add("active");

    }


    if(window.scrollY >= 8600){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[5].classList.add("active");

    }
}



if(window.innerWidth > 767 && window.innerWidth <=991){

    if(window.scrollY < 415){
    liAct.forEach((e)=>{
        if(e.classList.item("0") === "active"){
            e.classList.remove("active");
        }
    });
    liAct[0].classList.add("active");
    }


    if(window.scrollY >= 415 && window.scrollY < 1283){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[1].classList.add("active");

    }


    if(window.scrollY >= 1143 && window.scrollY < 1800){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[2].classList.add("active");

    }

    if(window.scrollY >= 1800 && window.scrollY < 4250){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[3].classList.add("active");

    }


    if(window.scrollY >= 4250 && window.scrollY < 5854){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[4].classList.add("active");

    }


    if(window.scrollY >= 5854){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[5].classList.add("active");

    }
}




if(window.innerWidth >=992 && window.innerWidth <=1199){

    if(window.scrollY < 415){
    liAct.forEach((e)=>{
        if(e.classList.item("0") === "active"){
            e.classList.remove("active");
        }
    });
    liAct[0].classList.add("active");
    }


    if(window.scrollY >= 415 && window.scrollY < 1283){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[1].classList.add("active");

    }


    if(window.scrollY >= 1143 && window.scrollY < 1700){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[2].classList.add("active");

    }

    if(window.scrollY >= 1700 && window.scrollY < 4250){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[3].classList.add("active");

    }


    if(window.scrollY >= 4250 && window.scrollY < 5854){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[4].classList.add("active");

    }


    if(window.scrollY >= 5854){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[5].classList.add("active");

    }
}




if(window.innerWidth >= 1200){

    if(window.scrollY < 472){
    liAct.forEach((e)=>{
        if(e.classList.item("0") === "active"){
            e.classList.remove("active");
        }
    });
    liAct[0].classList.add("active");
    }


    if(window.scrollY >= 472 && window.scrollY < 1302){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[1].classList.add("active");

    }


    if(window.scrollY >= 1302 && window.scrollY < 1700){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[2].classList.add("active");

    }

    if(window.scrollY >= 1700 && window.scrollY < 3600){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[3].classList.add("active");

    }


    if(window.scrollY >= 3600 && window.scrollY < 4500){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[4].classList.add("active");

    }


    if(window.scrollY >= 4500){
      
        liAct.forEach((e)=>{
            if(e.classList.item("0") === "active"){
                e.classList.remove("active");
            }
        });
        liAct[5].classList.add("active");

    }
}

};


// end header 

