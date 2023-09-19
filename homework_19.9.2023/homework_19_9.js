//Btap: Biện luận PT bậc hai một ẩn: axx+bx+c=0
var a=1;
var b=5;
var c=6;
var denta=b*b-4*a*c;
if(a==0){
    if(b==0){
        if(c==0){
            console.log("Phuong trinh vo so nghiem.");
        }
        else{
            console.log("Phuong trinh vo nghiem.");
        }
    }
    else{
        console.log("Phuong trinh co nghiem duy nhat: x = ", -c/b);
    }
}
else{
    if(denta==0){
        console.log("Phuong trinh co nghiem kep: x1 = x2 = ", -b/(2*a));
    }
    else if(denta<0){
        console.log("Phuong trinh vo nghiem.");
    }
    else{
        console.log("Phuong trinh co 2 nghiem phan biet: x1 = ",(-b+Math.sqrt(denta))/(2*a),", x2 = ",(-b-Math.sqrt(denta))/(2*a));
    }
}



//Btap: Khởi tạo mảng bất kỳ và:
    // 1. Tính tích tất cả các phần tử (convert về số)
    // 2. Tính tổng và tích các phần tử ở vị trí chẵn

var random=[2,7,0,5,"2003"];
//Tích các phần tử:
    var tich=1;
    for(var i=0; i<random.length; i++){
        tich=parseInt(tich)*parseInt(random[i]);
    }
    console.log("Tích của mảng đã tạo là: ", tich);

// Tổng các phần tử ở vị trí chẵn:
    var sumChan=0;
    for(var i=0; i<random.length; i++){
        if(i%2==0){
            sumChan=parseInt(sumChan)+parseInt(random[i]);
        }
    }
    console.log("Tổng phần tử ở vị trí chẵn của mảng đã tạo là: ", sumChan);

// Tích các phần tử ở vị trí chẵn: 
    var tichChan=1;    
    for(var i=0; i<random.length; i++){
        if(i%2==0){
            tichChan=parseInt(tichChan)*parseInt(random[i]);
        }
    }
    console.log("Tích phần tử ở vị trí chẵn của mảng đã tạo là: ", tichChan);



//Btvn: Triển khai ví dụ về switch-case/if-else 
//      Nhập vào năm/tháng và cho biết số ngày trong năm/tháng đó

var testnhuan=2023;
if(testnhuan%4==0){
    console.log(testnhuan, " là năm nhuận. ");
}
else{
    console.log(testnhuan, " không là năm nhuận.");
}
