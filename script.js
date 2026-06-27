document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const service = document.querySelector('select').value;
    const date = document.querySelector('input[type="date"]').value;
    const location = document.querySelectorAll('input[type="text"]')[1].value;
    const details = document.querySelector('textarea').value;

    const message =
`*NEW BOOKING - CINEGRAPHS STUDIOZ*

Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}
Date: ${date}
Location: ${location}

Details:
${details}`;

    const whatsappNumber = "2348168820441";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
        "_blank"
    );
});