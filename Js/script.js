 /*Removing  Box 4*/


 let btnBin = document.getElementsByClassName('btn_bin');
 //  btn_4.onclick = () => {
 //      card_4.style.display = "none";
 //  }
 for (let i = 0; i < btnBin.length; i++) {
     let card_1 = document.getElementById('card_1');
     let card_2 = document.getElementById('card_2');
     let card_3 = document.getElementById('card_3');
     let card_4 = document.getElementById('card_4');
     btnBin[i].onclick = (e) => {
         if (i == 0) {
             card_1.style.display = "none";
         }
         if (i == 1) {
             card_2.style.display = "none";
         }
         if (i == 2) {
             card_3.style.display = "none";
         }
         if (i == 3) {
             card_4.style.display = "none";
         }
     }
 }

 /*Navigate Pagination*/

 let page = document.getElementsByClassName('page');
 for (let i = 0; i < page.length; i++) {
     page[i].onclick = (e) => {
         let current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace("active", "");
         e.currentTarget.className += " active";
     }
 }