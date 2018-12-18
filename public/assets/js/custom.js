/*==============================================
                    Smooth Scrolling
================================================*/

//nicer easeout effect for smooth scrolling

$(function () {

    $("a.smooth-scroll").click(function (event) {
       event.preventDefault();
 
       var section = $(this).attr("href")
 
       $("html, body").animate({
          scrollTop: $(section).offset().top - 63
       }, 1200, "easeInOutExpo");
 
    });
 
 });


 /*==============================================
                    Carousel
================================================*/

 $(function () {
   $("#exchanges-all").owlCarousel({
      items: 4,
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
      responsive: {
         // breakpoint from 0 up
         0: {
            items: 1,
         },
         // breakpoint from 480 up
         480: {
            items: 2,
         },
         // breakpoint from 768 up
         768: {
            items: 4,
         }
      }
   });
});



/*==============================================
                    PopUp
================================================*/

$(function () {
	var $content = $('#jsonContent');
	var data = {
		rss_url: 'https://medium.com/feed/@solarisxlr'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function (k, item) {
				var visibleSm;
				if(k < 2){
					visibleSm = '';
				 } else {
					 visibleSm = ' visible-sm';
				 }
				output += '<div class="col-sm-4 col-md-4' + visibleSm + '">';
            output += '<div class="blog-post"><header>';
				var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
				var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
				var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
				var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
				var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
				output += '<div class="blog-element"><a href="'+ item.link + '"><img class="img-responsive" src="' + src + '" width="520px" height="400px"></div></header></a>';
				output += '<div class="blog-content"><h4><a href="'+ item.link + '">' + item.title + '</a></h4>';
				output += '<div class="post-meta"><span>By ' + item.author + '</span></div>';
				var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
				output += '</div></div></div>';
				return k < 2;
			});
			$content.html(output);
		}
	});
});

