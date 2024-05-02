// --- Admin Product Management Btns ---
const addProductBtn = document.querySelector("#add-product-menu");
const removeProductBtn = document.querySelector("#remove-product-menu");

// Admin Management Containers
const addContainer = document.querySelector(".add-container");
const removeContainer = document.querySelector(".remove-container");

// Admin Side URL
const firebaseConfig = {
  apiKey: "AIzaSyCDf2vMgsWxm6bThXsEm7O2iakCJ-xce14",
  authDomain: "canteen-management-79cf7.firebaseapp.com",
  databaseURL: "https://canteen-management-79cf7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "canteen-management-79cf7",
  storageBucket: "canteen-management-79cf7.appspot.com",
  messagingSenderId: "339426651479",
  appId: "1:339426651479:web:43de644facd0c61cea6212",
  measurementId: "G-JJZJVDB2K6"
};

// --- Admin Side ---
if (adminSRC === window.location.href) {
  console.log("admin side");
  // Admin Management Btns
  addProductBtn.addEventListener("click", () => {
    addContainer.classList.toggle("show-container");
    removeContainer.classList.remove("show-container");
  });

  // Admin Management Btns
  removeProductBtn.addEventListener("click", () => {
    removeContainer.classList.toggle("show-container");
    addContainer.classList.remove("show-container");
  });
}
