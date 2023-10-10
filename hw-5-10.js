// Tạo danh sách tin tức (arrayObject)
// hiển thị all tin tức trên giao diện với các tham số tương ứng

var listNews = [
{
    id: 101,
    img: 'https://gif-baomoi.bmcdn.me/w300_r3x2/2023_10_05_15_47126545/1bf46c6baa2643781a37.gif.webm',
    name: 'News-1',
    content: "Bão Koinu giật cấp 17, sóng biển cao 6-8 m hướng vào Biển Đông",
    update: "3/10/2023" 
},
{
    id: 101,
    img: 'https://photo-baomoi.bmcdn.me/w300_r3x2/2023_10_05_83_47126093/555332c4f4891dd74498.jpg.webp',
    name: 'News-2',
    content: "Được đề cử làm Chủ tịch Hạ viện Mỹ, ông Trump nói gì?",
    update: "4/10/2023" 
},
{
    id: 101,
    img: 'https://photo-baomoi.bmcdn.me/w300_r3x2_sm/2023_10_05_603_47127010/c5738a144c59a507fc48.jpg.webp',
    name: 'News-3',
    content: "FIFA công bố chủ nhà World Cup 2030: Phiên bản chưa từng có kỷ niệm 100 năm",
    update: "5/10/2023" 
}
];

function showNews(number){
    $('#list-News').html('');
    for (let i=0; i<number && i<listNews.length; i++){
            var News = `<div class="col-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${listNews[i].img}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title: ${listNews[i].name}</h5>
                            <p class="card-text">${listNews[i].content}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
            $('#list-News').append(News)
    }    
}


function search(){
    $('#list-News').html('');    
    for (let i=0; i<listNews.length; i++){
        var title =$(".search").val();
        if(listNews[i].name== title){
            var News = `<div class="col-3">
                    <div class="card" style="width: 18rem;">
                        <img src="${listNews[i].img}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Card title: ${listNews[i].name}</h5>
                            <p class="card-text">${listNews[i].content}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`;
            $('#list-News').append(News)
        }
    }    
}
