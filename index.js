
$(".card-view").on("mouseover",function () {


$(".card-view-details-button").animate({bottom:"30px",opacity:1},300)
$(".card-view-details-num").animate({top:"30px"},300)
})

$(".card-view").on("mouseleave",function () {
    $(".card-view-details-button").animate({bottom:"70px",opacity:0},200)
    $(".card-view-details-num").animate({top:"80px"},200)

})
