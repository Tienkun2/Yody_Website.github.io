function showPass() {
    if (document.getElementById("ShowPassWord").checked == true) {
        document.getElementById("PassWord").type = "text";
        document.getElementById("XacNhanMatKhau").type = "text";
    } else {
        document.getElementById("PassWord").type = "password";
        document.getElementById("XacNhanMatKhau").type = "password";
    }
}
function CheckThongTin() {
        var name = document.getElementById("HoTen").value;
        var nameRegex = /^[a-zA-Z\sàáạảãăắằẳẵặâấầẩẫậèéẹẻẽêếềểễệđìíịỉĩòóọỏõôốồổỗộơớờởỡợùúụủũưứừửữựỳýỵỷỹ]+$/;
        var phone = document.getElementById("SoDienThoai").value;
        var phoneRegex = /^(?:\+84|0)[1-9]\d{8}$/;
        var email = document.getElementById("Email").value;
        var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var pass = document.getElementById("PassWord").value;
        var confirmPass = document.getElementById("XacNhanMatKhau").value;
        if (name === "" || !nameRegex.test(name)) {
            alert("Họ tên không được rỗng và chỉ được chứa kí tự");
        } else if (!phoneRegex.test(phone)) {
            alert("Định dạng số điện thoại không hợp lệ");
        } else if (email === "" || !testEmail.test(email)) {
            alert("Định dạng email sai");
        } else if (pass === "" || pass.includes(" ")) {
            alert("Mật khẩu không được để trống hoặc chứa khoảng trắng");
        } else if (confirmPass === "" || confirmPass !== pass) {
            alert("Xác nhận mật khẩu không khớp");
        } else {
            alert("Đăng ký thành công");
            window.location.href = "dangnhap.html" ;
        }
}

