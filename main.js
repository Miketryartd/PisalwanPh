/*function of sliding ads*/
var images = ['imgcard/frag.jpg', 'imgcard/ABOUT-US1.jpg', 'imgcard/ww.jpg', 'imgcard/Apple_Macbook_Pro_2021_10_19_17_09_32.jpg', 'imgcard/gh-best-skincare-products-6557978b58b57.png', ];
var imageElement = document.getElementById('image');
var nextBtn = document.getElementById('nad');
let currentimg = 0;
function updateImage(){
    imageElement.src = images[currentimg];
}
function nextads(){
    currentimg++;

    if (currentimg >= images.length){
        currentimg = 0;
    }

    updateImage();
}

function backads() {
    currentimg--;

    if (currentimg < 0) {
        currentimg = images.length - 1;
    }

    updateImage();
}
/*function of slidingads-close*/

// menu function //
function menufunction(){
    var menuContainer = document.getElementById('menucon');

    if (menuContainer.style.visibility === 'visible'){
        menuContainer.style.visibility = 'hidden';
    } else{
        menuContainer.style.visibility = 'visible';
    }
}
//menufunctuin-close/
//featured 1//
function featured1(){
    
}
// featured1//
  
// function of cart function //

function cartFunction(){
    var cartContainer = document.getElementById('cartcon');
    if(cartContainer.style.display === 'block'){
        cartContainer.style.display = 'none';
    } else {
        cartContainer.style.display = 'block';
    }
}

//function of cart function//
// featured1//

    var images1 = ['imgcard/ph-11134207-7qukx-lgnjnjg8t7mub4.jpg', 'imgcard/swat1.jpg', 'imgcard/swat2.jpg', 'imgcard/swat3.jpg', 'imgcard/swat4.jpg', ];
    var imageElement1 = document.getElementById('image1');
    var nextarrow1 = document.getElementById('f1arrow');
    let currentImg1 = 0;

function updateImage1(){
  imageElement1.src = images1[currentImg1];
}
function f1arrow() {
    currentImg1++;
    if (currentImg1 >= images1.length) {
        currentImg1 = 0;
    }
    updateImage1();
}

function f1arrowback(){
    currentImg1--;
    if (currentImg1 < 0){
        currentImg1 = images1.length - 1;
    }
    updateImage1();
}








function featured1(){
    var featured1 = document.getElementById('featured1');
    var overflow = document.getElementById('overflow');

    if (overflow.style.display === 'block'){
        overflow.style.display = 'none';
    } else {
        overflow.style.display = 'block';
    }

    if (featured1.style.display === 'none'){
        featured1.style.display = 'block';
    } else {
        featured1.style.display = 'block';
    }
}

function cancelfeatured1(){
    var featured1 = document.getElementById('featured1');
   var overflow = document.getElementById('overflow');
    featured1.style.display = 'none';
    overflow.style.display = 'none';
}

// ffeatured1-close//


//fetch////
fetch('https://dummyjson.com/products')
.then(response => response.json())
.then(data => {
    var products = data.products;


    var mainshopContainer = document.getElementById('mainshopContainer');

    products.forEach(product => {
        var productDiv = document.createElement('div');
        productDiv.className = 'mainshopimgbox';
        productDiv.classList.add('product');
         var mainshopdescription = document.createElement('div');
         mainshopdescription.className = 'mainshopdescription';
        productDiv.innerHTML = `<div class="mainshopdescription"><h1>${product.title}</h1>
        <p>Price: ₱${product.price}</p></div>
        <img src="${product.thumbnail}" alt="${product.title}">`;
        productDiv.appendChild(mainshopdescription);
        
    mainshopContainer.appendChild(productDiv);
    });

    
    
})
.catch(error => {
    console.error('Error fetching data: ', error);
});





//fetch--end//
// fetch categories//

fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(categories => {
        // Assuming categories is an array of category names
        categories.forEach(category => {
            // Display each category, you can modify this part as needed
            const categoryElement = document.createElement('div');
            categoryElement.textContent = category;
            document.getElementById('categoriesContainer').appendChild(categoryElement);

            // Attach a click event listener to each category element
            categoryElement.addEventListener('click', () => {
                // Fetch items for the selected category
                fetchItems(category);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching categories:', error);
    });
//fetch categories//


//feth product category//
function fetchItems(category){
    fetch(`https://dummyjson.com/products/category/${category}`)
    .then(response => response.json())
    .then(data => {
        if(Array.isArray(data)){
            displayItems(data);
        } else {
            console.error(`Items data is not an array for category '${category} :`, data);

        }
    })
    .catch(error => {
        console.error('Error fetching items:', error);
    });
}
function displayItems(products) {
    const mainshopContainer = document.getElementById('mainshopContainer');

    if (!mainshopContainer) {
        console.error('Main shop container not found');
        return;
    }

    mainshopContainer.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'mainshopimgbox';

        const mainshopdescription = document.createElement('div');
        mainshopdescription.className = 'mainshopdescription';
        mainshopdescription.innerHTML = `<h1>${product.title}</h1>
            <p>Price: ₱${product.price}</p>`;

        const productImage = document.createElement('img');
        productImage.src = product.thumbnail;
        productImage.alt = product.title;

        productDiv.appendChild(mainshopdescription);
        productDiv.appendChild(productImage);

        mainshopContainer.appendChild(productDiv);
    });
}


fetchItems('smartphones');


//fgetch product category//


// more categories function//
function more(){
    var hiddenbtns = document.getElementById('hiddenbtns');
     if (hiddenbtns.style.display === 'block'){
        hiddenbtns.style.display = 'none';
     } else {
        hiddenbtns.style.display = 'block';
     }

}


// more categories function//





