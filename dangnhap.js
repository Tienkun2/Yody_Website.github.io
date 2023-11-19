function showPass() {
    if (document.getElementById("ShowPassWord").checked == true) {
        document.getElementById("LoginPassword").type = "text";
    } else {
        document.getElementById("LoginPassword").type = "password";
    }
}

function dangNhap() {
    var loginEmail = document.getElementById("LoginEmail").value;
    var loginPassword = document.getElementById("LoginPassword").value;
    var sampleAccount = { email: 'binhtien032@gmail.com', password: 'binhtien'};
    if (loginEmail === sampleAccount.email && loginPassword === sampleAccount.password) {
        alert("Đăng nhập thành công");
        window.location.href = "YodyWeb.html";
        var info = "Email: " + loginEmail;
        document.getElementById("ShowThongTinLogin").innerHTML = info;
    } else {
        alert("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.");
    }
}
