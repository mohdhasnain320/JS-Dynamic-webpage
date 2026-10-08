// ============================================
// WEEK 4 - JAVASCRIPT ADVANCED
// ============================================


// ============================================
// 1. LOCAL STORAGE
// ============================================

const usernameInput = document.getElementById("username");
const saveNameBtn = document.getElementById("saveNameBtn");
const displayName = document.getElementById("displayName");


// Save username
saveNameBtn.addEventListener("click", () => {

    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("username", username);

    displayUserName();
});


// Display username
const displayUserName = () => {

    const savedName = localStorage.getItem("username");

    if (savedName) {
        displayName.textContent = `Welcome, ${savedName}!`;
    }
};


// Display saved name when page loads
displayUserName();


// ============================================
// 2. EMAIL VALIDATION
// ============================================

const emailInput = document.getElementById("email");
const validateEmailBtn =
    document.getElementById("validateEmailBtn");

const emailMessage =
    document.getElementById("emailMessage");


validateEmailBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (emailPattern.test(email)) {

        emailMessage.textContent =
            "✓ Valid email address";

        emailMessage.className = "success";

    } else {

        emailMessage.textContent =
            "✗ Invalid email address";

        emailMessage.className = "error";
    }
});


// ============================================
// 3. FETCH DATA FROM FREE API
// ============================================

const quoteBtn = document.getElementById("quoteBtn");
const quote = document.getElementById("quote");


quoteBtn.addEventListener("click", async () => {

    quote.textContent = "Loading...";

    try {

        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quote.textContent =
            `"${data.quote}" — ${data.author}`;

    } catch (error) {

        quote.textContent =
            "Unable to fetch quote. Please try again.";

        console.error(error);
    }
});


// ============================================
// 4. ARROW FUNCTION + FILTER
// ============================================

const numbers = [
    10,
    25,
    40,
    55,
    60,
    75,
    80,
    30,
    90,
    100
];


const originalArray =
    document.getElementById("originalArray");

const filteredArray =
    document.getElementById("filteredArray");

const filterBtn =
    document.getElementById("filterBtn");


originalArray.textContent =
    numbers.join(", ");


filterBtn.addEventListener("click", () => {

    // Arrow function
    const result =
        numbers.filter(number => number > 50);

    filteredArray.textContent =
        result.join(", ");
});