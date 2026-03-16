function confirmSubmit() {
    const form = document.getElementById("adoptionForm");
    const dateInput = document.getElementById("appointment");
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");
    const popupOk = document.getElementById("popup-ok");

    const selectedDate = dateInput.value;
    if (!selectedDate) {
        alert("Please select an appointment date.");
        return false;
    }

    // Convert YYYY-MM-DD → DD/MM/YYYY
    const parts = selectedDate.split("-");
    const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;

    // Use HTML with <br> for line breaks
    popupMessage.innerHTML = `
        <strong>Booking Confirmed!</strong><br>
        PlayDate: ${formattedDate}<br>
        Location: 4821 Paw Print Lane, Houston, TX 77002<br>
        For cancellation, please call: (713) 555-0194<br>
    `;

    popup.style.display = "flex";

    popupOk.onclick = function() {
        popup.style.display = "none";
        form.submit();
    }

    return false;
}