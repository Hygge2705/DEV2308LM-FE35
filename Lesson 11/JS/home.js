// cú pháp khi sử dụng jquery
// %('các bộ selector như của css').'các action'();

function sumary(){
    debugger;
    var Tong = 0;
    for(let i=0; i<listProduct.length; i++){
        var x=$('.item-'+listProduct[i].id+' .quantity').val();   // .var() là action lấy giá trị 
        // var y=$('.item-price .price').text().replaceAll(".","");   //action .repalceAll() để đổi giá trị
        var p=$('.item-'+listProduct[i].id+' .item-price .price').attr("data-price");       //action .attr("tthuộc tính") dùng để lấy giá trị của thuộc tính
        var sum = parseInt(x)*parseInt(p);
        Tong = Tong + sum;
    }
    $('.sum-products .text-price .all-price').text(Tong);
}

var listProduct =[
    {
        id:1,
        name: "Cookies 1",
        price: 80000,
        cate: "Sweets",
        number: 2
    },
    {
        id:3,
        name: "Cookies 3",
        price: 100000,
        cate: "Sweets",
        number: 1
    },
    {
        id:2,
        name: "Cookies 2",
        price: 20000,
        cate: "Sweets",
        number: 1
    }
];
    
for(let i=0; i<listProduct.length; i++){
    var view = `<div class="item item-${listProduct[i].id}">
                    <div class="item-img">
                        <img class="w-100" src="../img/cok.png" alt="">
                    </div>
                    <div class="item-content">
                        <div class="item-cate">
                            <h3>${listProduct[i].cate}</h3>
                        </div>
                        <div class="item-name">
                            <h4>${listProduct[i].name}</h4>
                        </div>
                        <div class="item-price">
                            <p>
                                <span class="price" data-price="${listProduct[i].price}">${listProduct[i].price}</span>
                                <span class="unit">VNĐ</span>
                            </p>
                        </div>
                    </div>
                    <div class="item-quantity">
                        <input onchange="sumary()" type="number" class="quantity" name="quantity" value="${listProduct[i].number}/>
                    </div>
                </div>`;
    $('.list-item').append(view);
}


