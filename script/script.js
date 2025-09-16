



// automatic showing cards 

const cardload = () => {
   fetch("https://openapi.programming-hero.com/api/plants")
   .then(res => res.json())
   .then(json => displayCards(json.plants) )

}

// display card
const displayCards = (cards) => {
//   1. get container 
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML ="";
   

// 2.get into every card 
 for(let card of cards){
     
   // 3. element create
   const btnDiv = document.createElement("div");
   btnDiv.innerHTML = `
   
   <div>
                 <div class="card bg-base-100  w-96 shadow-sm p-3">
                          <figure>
                           <img class="h-90 w-100  " src="${card.image}"
                            />
                          <!-- for image -->
                            </figure>
                            <!-- for body -->
                            <div class="card-body">
                      <h2 onclick="loadModal('${card.id}')" class="card-title">${card.name}</h2>
                      <p>${card.description}</p>
                        </div>

                        <!-- for price -->

                        <div class="gap-2">
                           <div class="flex justify-between items-center">
                            <div>
                             <p class="bg-[#DCFCE7] rounded-full p-2">${card.category}</p>
                            </div>
                            <div>
                                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${card.price}</p>
                            </div>
                         </div>

                         <div class="pt-3">
                            <button onclick="addToCart('${card.id}', '${card.name}', '${card.price}')"  class="btn  w-full rounded-full bg-[#15803D] text-white hover:bg-[#3cae66]">Add to Cart</button>
                         </div>
                        </div>
                         
                        
                           
                             </div>
            </div>
              </div>
            

             
   `;
   cardContainer.append(btnDiv);
 }
 
  
}

// for modal
const loadModal = (id) => {
   const url = `https://openapi.programming-hero.com/api/plant/${id}`
   
   fetch(url)
   .then(res => res.json())
   .then(data => displayModal(data.plants))
}
 // display modal
const displayModal = (card) => {
   const detailsCard = document.getElementById("details-container")
   detailsCard.innerHTML = `
       <h1 class="font-bold text-2xl">${card.name}</h1>
        <img class="h-90 w-130" src="${card.image}" alt=""> <br>
        <p><span class="font-bold">Catagory: </span>${card.category}</p> <br>
        <p><span class="font-bold">Price:</span> ${card.price}</p> <br>
        <p><span class="font-bold">Description: </span>${card.description}</p>
   `;
   document.getElementById("my_modal_1").showModal();

}



// for catagory section
const loadCatagory = () => {
   fetch("https://openapi.programming-hero.com/api/categories" )
   .then(res => res.json())
   .then(data => displayCatagory(data.categories));
}
   // display category
// const displayCatagory = (catagories) => {
   
//    // 1. get the container 
//     const catagoryContainer = document.getElementById("catagory-container")
//     catagoryContainer.innerHTML = "";

//    //  2.get every catagory
//    for(const catagory of catagories){

//       //  3. create element 
//       const btnLi =  document.createElement("div");
//       btnLi.innerHTML =   `

      

//       <button class="btn w-full mt-2 hover:bg-[#15803D] text-white bg-[#a4beaf]" onclick="loadtrees(${catagory.id})"> ${catagory.category_name} </button>
      
//       `;

       

//       catagoryContainer.append(btnLi);
//    }
// }

const displayCatagory = (catagories) => {
    const catagoryContainer = document.getElementById("catagory-container")
    catagoryContainer.innerHTML = "";

    for(const catagory of catagories){
        const btnLi = document.createElement("div");
        btnLi.innerHTML = `
            <button class="btn w-full mt-2 text-white bg-[#a4beaf] hover:bg-[#15803D]" onclick="activateCategory(this); loadtrees(${catagory.id})">
                ${catagory.category_name}
            </button>
        `;
        catagoryContainer.append(btnLi);
    }
}

// New function to handle active button styling
function activateCategory(button) {
    const buttons = document.querySelectorAll("#catagory-container button");
    buttons.forEach(btn => {
        btn.classList.remove("bg-[#15803D]"); // remove active bg
        btn.classList.add("bg-[#a4beaf]");    // restore normal bg
    });

    // set active style
    button.classList.remove("bg-[#a4beaf]");
    button.classList.add("bg-[#15803D]");
}



// for clicking catagories

const loadtrees = (id) => {

   const spinner = document.getElementById("spinner");
    spinner.classList.remove("hidden"); // show spinner
   // console.log(id);
   const url = `https://openapi.programming-hero.com/api/category/${id}`
   // console.log(url);
   fetch(url)
   .then(res => res.json())
   .then(data => 
      {
         displaytree(data.plants)
         spinner.classList.add("hidden"); // hide spinner after loading
      })


}

// display catagory specifically
const displaytree = (cards) => {

   //   1. get container 
    const newCard = document.getElementById("cardContainer");
    newCard.innerHTML ="";
   

// 2.get into every card 
 for(let card of cards){
     
   // 3. element create
   const btnCat = document.createElement("div");
   btnCat.innerHTML = `
   
   <div>
                 <div class="card bg-base-100 w-96 shadow-sm p-3">
                          <figure>
                           <img class="h-90 w-100  " src="${card.image}"
                            />
                          <!-- for image -->
                            </figure>
                            <!-- for body -->
                            <div class="card-body">
                      <h2 onclick="loadModal('${card.id}')" class="card-title">${card.name}</h2>
                      <p>${card.description}</p>
                        </div>

                        <!-- for price -->

                        <div class="gap-2">
                           <div class="flex justify-between items-center">
                            <div>
                             <p class="bg-[#DCFCE7] rounded-full p-2">${card.category}</p>
                            </div>
                            <div>
                                <p><i class="fa-solid fa-bangladeshi-taka-sign"></i>${card.price}</p>
                            </div>
                         </div>

                         <div class="pt-3">
                            <button onclick="addToCart('${card.id}', '${card.name}', '${card.price}')"  class="btn  w-full rounded-full bg-[#15803D] text-white hover:bg-[#3cae66]">Add to Cart</button>
                         </div>
                        </div>
                         
                        
                           
                             </div>
            </div>
              </div>
            

             
   `;
   newCard.append(btnCat);
 }
   

}

// for cart 
let totalPrice = 0; // total price track
const cartContainer = document.getElementById("cart-container");

const addToCart = (id, name, price) => {
    const priceNum = parseFloat(price);

    // create cart item div
    const itemDiv = document.createElement("div");
    itemDiv.className = "flex justify-between items-center bg-white p-2 rounded shadow";

    itemDiv.innerHTML = `
        <div>
            <h3 class="font-semibold">${name}</h3>
            <p class="text-sm text-gray-600">Price: ${priceNum}৳</p>
        </div>
        <button class="text-red-500 hover:text-red-700 text-xl font-bold">✖</button>
    `;

    // remove button
    itemDiv.querySelector("button").addEventListener("click", () => {
        itemDiv.remove();
        totalPrice -= priceNum;
        updateTotal();
    });

    // add item to cart
    cartContainer.appendChild(itemDiv);

    // update total
    totalPrice += priceNum;
    updateTotal();
};

// total update function
function updateTotal() {
    // check if total element exists
    let totalPriceElement = document.getElementById("total-price");
    
    if(totalPrice > 0){
        if(!totalPriceElement){
            totalPriceElement = document.createElement("p");
            totalPriceElement.id = "total-price";
            totalPriceElement.className = "font-bold mt-4";
            cartContainer.parentElement.appendChild(totalPriceElement);
        }
        totalPriceElement.innerHTML = `Total: ${totalPrice} <i class="fa-solid fa-bangladeshi-taka-sign"></i>`;

    } else {
        if(totalPriceElement) totalPriceElement.remove(); // remove total if cart empty
    }
}



// for card
cardload();

// for catagory
loadCatagory();