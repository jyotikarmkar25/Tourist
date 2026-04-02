// Store selected data
let selectedPlace = "";
let selectedCost = 0;

// Scroll to booking
function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

// Show place details
function showDetails(place, cost) {
  document.getElementById("details").innerHTML =
    `<h3>${place}</h3>
     <p>Cost: ₹${cost}/person</p>
     <p>This is one of the most beautiful places in Bastar. Perfect for travel & photography.</p>`;
}

// Open booking (IMPORTANT FIX)
function openBooking(event, place, cost) {
  event.stopPropagation();

  selectedPlace = place;
  selectedCost = cost;

  // Show selected place in form
  document.getElementById("total").innerText =
    `Selected: ${selectedPlace} (₹${selectedCost}/person)`;

  // Scroll to booking
  document.getElementById("booking").scrollIntoView({ behavior: "smooth" });
}

// Calculate cost
function calculate() {
  let persons = document.getElementById("persons").value;

  if (selectedCost === 0) {
    document.getElementById("total").innerText =
      "⚠️ Please click 'Book Now' on a place first!";
    return;
  }

  if (persons === "" || persons <= 0) {
    document.getElementById("total").innerText =
      "⚠️ Enter valid number of persons!";
    return;
  }

  let total = persons * selectedCost;

  document.getElementById("total").innerText =
    `📍 ${selectedPlace} | 👥 ${persons} persons | 💰 Total: ₹${total}`;
}

// Confirm booking
function confirmBooking() {
  let persons = document.getElementById("persons").value;

  if (selectedPlace === "") {
    alert("⚠️ Please select a place first!");
    return;
  }

  if (persons === "" || persons <= 0) {
    alert("⚠️ Enter valid number of persons!");
    return;
  }

  alert(`✅ Booking Confirmed!
Place: ${selectedPlace}
Persons: ${persons}

Enjoy your trip 🎉`);
}

// Contact form
function sendMessage() {
  alert("✅ Message Sent! We will contact you soon.");
}