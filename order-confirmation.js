// Declaring variables
const pay = document.getElementById("pay")
const customerName = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const address = document.getElementById("address").value;
const city = document.getElementById("city").value;
const postalCode = document.getElementById("postal-code").value;
const cardNumber = document.getElementById("card-number").value;
const expiryDate = document.getElementById("expiry-date").value;
const cvv = document.getElementById("cvv").value;

// Adding Event Listeners.
pay.addEventListener("click", displayMessage)

// Function
function displayMessage() {
    // Get the latest values inside the function
    const customerName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postalCode = document.getElementById("postal-code").value;
    const cardNumber = document.getElementById("card-number").value;
    const expiryDate = document.getElementById("expiry-date").value;
    const cvv = document.getElementById("cvv").value;

    if (customerName && email && phone && address && city && postalCode && cardNumber && expiryDate && cvv) {
        const deliveryDate = new Date();
        deliveryDate.setDate(deliveryDate.getDate() + 2); // Assuming delivery in 2 days
        alert(`Thank you for your purchase, ${customerName}! Your delivery date is ${deliveryDate.toDateString()}`);
    } else {
        alert("Please fill in all fields correctly.");
    }
}