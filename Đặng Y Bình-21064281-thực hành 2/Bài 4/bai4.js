function calculateBMI() {
    var canNang = parseFloat(document.getElementById('weight').value);
    var chieuCao = parseFloat(document.getElementById('height').value);
    var doTuoi = document.getElementById('age').value;
    var myLabel = document.getElementById("content-result");
    var ketQua = "";
    var khuyenNghi ="";
    if (!isNaN(canNang) && !isNaN(chieuCao)) {
        var chiSoBMI = canNang / ((chieuCao / 100) * (chieuCao / 100));
        if (chiSoBMI < 18.5) {
            ketQua = "dưới chuẩn";
        } else if (chiSoBMI >=18.5 && chiSoBMI<=24.9) {
            ketQua = "Bình thường";
        } else if (chiSoBMI >=25.0 && chiSoBMI <=29.9) {
            ketQua = "Thừa cân";
        } else if (chiSoBMI>=30.0&& chiSoBMI<=34.9) {
            ketQua = "Béo phì cấp độ I";
        } else if (chiSoBMI>=35.0 && chiSoBMI<=39.9 ){
            ketQua="Béo phì cấp độ II"
        } else {
            ketQua= "Béo phì cấp độ III"
        }
        if(doTuoi =="trungNien"){
            khuyenNghi = "Khám định kỳ";
        }
        else if (doTuoi=="trungNienLonTuoi"){
            khuyenNghi = "Tập thể dục thường xuyên";
        }
        else{
            khuyenNghi ="Hạn chế ăn mỡ động vật";
        }
        myLabel.innerHTML = ketQua +" "+khuyenNghi;

    } else {
        alert("Vui lòng nhập thông tin đúng định dạng số!");
    }
};