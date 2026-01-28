const carousel = document.getElementById("carousel");
const slides = carousel.children;
let index = 0;

function updateSlide() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlide();
}

//round round carousal

const phoneScroll = document.getElementById("phoneScroll");

function scrollNext() {
  phoneScroll.scrollBy({
    left: 700,
    behavior: "smooth",
  });
}

function scrollPrev() {
  phoneScroll.scrollBy({
    left: -700,
    behavior: "smooth",
  });
}
//squar carousal
const bookScroll = document.getElementById("bookScroll");

function scrollBack() {
  bookScroll.scrollBy({
    left: -700,
    behavior: "smooth",
  });
}

function scrollFront() {
  bookScroll.scrollBy({
    left: 700,
    behavior: "smooth",
  });
}

// mobile carousal
const mobileScroll = document.getElementById("mobileScroll");

function mobilescrollBack() {
  mobileScroll.scrollBy({
    left: -700,
    behavior: "smooth",
  });
}

function mobilescrollFront() {
  mobileScroll.scrollBy({
    left: 700,
    behavior: "smooth",
  });
}

//burger
function openMenu() {
  document.getElementById("sideMenu").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("sideMenu").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

//mobile pagination

const products = [
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 5,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 10,
    price: 614,
    mrp: null,
  },
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 5,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 42,
    price: 614,
    mrp: null,
  },
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 52,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 5,
    price: 614,
    mrp: null,
  },
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 5,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 5,
    price: 614,
    mrp: null,
  },
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 5,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 5,
    price: 614,
    mrp: null,
  },
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 5,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 5,
    price: 614,
    mrp: null,
  },
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 5,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 5,
    price: 614,
    mrp: null,
  },
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 5,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 5,
    price: 614,
    mrp: null,
  },
  {
    title: "Indian Economy – Ramesh Singh",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81eV0exHjuL._AC_UL165_SR165,165_.jpg",
    rating: 4.5,
    reviews: 310,
    percentage: 5,
    price: 399,
    mrp: 725,
  },
  {
    title: "Indian Art & Culture – Nitin Singhania",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91sRItvC8bL._AC_UL165_SR165,165_.jpg",
    rating: 4.6,
    reviews: 35,
    percentage: 5,
    price: 682,
    mrp: null,
  },
  {
    title: "Environment – Shankar IAS",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71I23UM+W8L._AC_UL165_SR165,165_.jpg",
    rating: 4.7,
    reviews: 291,
    percentage: 5,
    price: 614,
    mrp: null,
  },
];

const itemsPerPage = 7;
let currentPage = 1;

function renderProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const visibleProducts = products.slice(start, end);

  visibleProducts.forEach((p) => {
    grid.innerHTML += `
        <div class="text-sm">
           <img src="${p.image}" class="w-full h-40 object-contain mb-2"/>
           <p class="font-medium line-clamp-2">${p.title}</p>

            <div class="text-yellow-500 text-xs">
            ☆☆☆☆☆ ${p.rating} <span class="text-gray-600">(${p.reviews})</span>
            </div>

            <div class="flex items-center gap-2 mt-2">
                <span class="bg-red-600 text-white font-semibold whitespace-nowrap">${p.percentage}% off</span>
                <span class="text-sm text-red-600 font-semibold whitespace-nowrap">Limited time deal</span>
            </div>

            <div class="text-gray-600 text-xs mt-0.5">
                Paperback
            </div>

            <div class="mt-1">
                <span class="font-semibold">₹${p.price}</span>
                ${p.mrp ? `<span class="line-through text-gray-400 ml-1">₹${p.mrp}</span>` : ""}
            </div>

            <div class="text-xs text-gray-500 mt-1">
                FREE Delivery by Amazon
            </div>
        </div>
        
        
        `;
  });
  document.getElementById("currentPage").innerText = currentPage;
  document.getElementById("totalPages").innerText = Math.ceil(
    products.length / itemsPerPage,
  );

  const startOverBtn = document.getElementById("startOverBtn");

  if (currentPage > 1) {
    startOverBtn.classList.remove("hidden");
  } else {
    startOverBtn.classList.add("hidden");
  }
}

function nextPage() {
  if (currentPage < Math.ceil(products.length / itemsPerPage)) {
    currentPage++;
    renderProducts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
  }
}

function startOver() {
  currentPage = 1;
  renderProducts();
}

//first time render products
renderProducts();
