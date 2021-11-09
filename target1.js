$(document).ready(function () {
    console.log("Document ready");

    // url to pull data from
    url = "https://jsonplaceholder.typicode.com/photos"

    // get request 
    $.get(url, function (data) {
        // creating an object for each location and adding the location name and some data
        harringtonObj = { Title: "Harrington", data: data.slice(0, 5) };
        cornwallObj = { Title: "Cornwall", data: data.slice(5, 10) }
        southwellObj = { Title: "Southwell", data: data.slice(10, 15) }
        mewsObj = { Title: "Mews", data: data.slice(15, 20) }
        kensingtonObj = { Title: "Kensington", data: data.slice(20, 25) }
        touristObj = { Title: "Tourist", data: data.slice(25, 30) };
        appartmentsObj = { Title: "Apartments", data: data.slice(30, 35) };

        // adding all the above objects to one one array
        combinedArr = [harringtonObj, cornwallObj, southwellObj, mewsObj, kensingtonObj, touristObj, appartmentsObj]

        // passing this large array to the createCarousel function
        createCarousel(combinedArr);
    })
});

function createCarousel(combinedArr) {

    // looping through each element in the combined array(7 elements)
    for (var j = 0; j < combinedArr.length; j++) {
        var carouselName = combinedArr[j].Title;
        console.log(combinedArr[j].data[0].url);

        //creating a title for each carousel
        var carTitle = "<h3>" + carouselName + "</h3>"

        // < !---------------- Carousel Main Div--------------------------->
        var slidesDiv = "";
        //looping through the data in each object + displaying the images on the dom
        for (var i = 0; i < combinedArr[j].data.length; i++) {
            if (i == 0) {
                slidesDiv += "<div class=\"carousel-item active\"><img src=\"" + combinedArr[j].data[i].url + "\" class=\"d-block w-100\" ><div class=\"carousel-caption d-none d-md-block\"></div> <div class=\"carousel-caption\"><h3>" + combinedArr[j].data[i].title + "</h3></div></div>";
            }
            else {
                slidesDiv += "<div class=\"carousel-item\"><img src=\"" + combinedArr[j].data[i].url + "\" class=\"d-block w-100\"><div class=\"carousel-caption d-none d-md-block\"></div> <div class=\"carousel-caption\"><h3>" + combinedArr[j].data[i].title + "</h3></div></div>";
            }
        }
        var slidesMainDiv = "<div class=\"carousel-inner\">" + slidesDiv + "</div>";


        // < !---------------- Carousel Controls----------------------->  
        var controls = "" +
            "<button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#" + carouselName + "\" data-bs-slide=\"prev\">" +
            "     <span class=\"carousel-control-prev-icon\" ></span>" +
            "     <span>Previous</span>" +
            "</button> " +

            "<button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#" + carouselName + "\" data-bs-slide=\"next\">" +
            "     <span class=\"carousel-control-next-icon\" ></span>" +
            "    <span>Next</span>" +
            " </button> ";

        // adding all these components to the inner carousel
        innerCarousel = carTitle + slidesMainDiv + controls;

        //adding the inner carousel variable to the relevant carousel in the dom
        document.getElementById(carouselName).innerHTML = innerCarousel;
    }
}


