document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let location = document.getElementById("location").value;
    let details = document.getElementById("details").value;

    let message =
`🎬 NEW BOOKING - CINEGRAPHS STUDIOZ

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Date: ${date}
Location: ${location}

Project Details:
${details}`;

    let whatsappNumber = "2348168820441";

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});