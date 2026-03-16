
function confirmSubmit() {
    // get the date input value
    const selectedDate = document.getElementById("appointment").value;

    if (!selectedDate) {
        alert("Please select an appointment date.");
        return false; // stop form submission if empty
    }

    alert(`Booking Confirmed! \n PlayDate: ${selectedDate} \n Location: 4821 Paw Print Lane
Houston, TX 77002 \n\n for Cancelation please give us a call at: (713) 555-0194`);
    return true; // allow form submission
}

