document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("YOUR_USER_ID"); // ضع معرف المستخدم الخاص بك من EmailJS

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const templateParams = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
        };

        emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
            .then(function (response) {
                alert("تم إرسال الطلب بنجاح!");
            }, function (error) {
                alert("حدث خطأ أثناء الإرسال!");
            });
    });
});
