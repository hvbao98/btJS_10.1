function diem(name, score) {
    var ket_qua;
        switch (true) {
            case score > 90:
            ket_qua = "Xuất xắc";
                    break;
            case score > 80:  
            ket_qua = "Giỏi";
                break;
            case score > 60:
            ket_qua = "Khá ";
                break;
            case score > 50:
            ket_qua = "Trung bình "; 
                break;
            case score < 50:
            ket_qua = "Yếu ";
                break;
            default:
            alert("Hãy nhập lại số điểm từ 0 đến 100 !");
                break;
            }     
            document.getElementById("kq").innerHTML =
              name + "" + " đạt được học sinh <b>" + ket_qua + "</b><br>";
}