function validateForm() {
    let isValid = true;

    // إعادة تعيين الأخطاء
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // التحقق من الاسم
    if (name === "") {
    document.getElementById("nameError").innerText = "الرجاء إدخال الاسم";
    isValid = false;
    }

    // التحقق من البريد الإلكتروني
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
    document.getElementById("emailError").innerText = "الرجاء إدخال البريد الإلكتروني";
    isValid = false;
    } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "البريد الإلكتروني غير صالح";
    isValid = false;
    }

    // التحقق من الرسالة
    if (message === "") {
    document.getElementById("messageError").innerText = "الرجاء إدخال الرسالة";
    isValid = false;
    }

    return isValid;
}