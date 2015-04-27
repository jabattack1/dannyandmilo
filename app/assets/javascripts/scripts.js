console.log('danny');

var guts = "<p class='animated fadeIn' id='guts'>dsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjsdsfafdjk;faj;jkflas afsk;dsaj;fajkdfads jkfadjk;fadjkdaf;dfas; afdjka;fakds;fadkjs</p>"
var paul = "<img src=\"http://i1301.photobucket.com/albums/ag119/jabattack1/headshotpaul_zpsimr55qvg.jpg\" id='paul' class='animated fadeIn'></img>";
var name = "<p class='animated fadeIn' id='name'>Paul Ethan Hahn</p>"
var aboutPaul = "<p class='animated fadeIn' id='aboutPaul'>Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.Got a crap load of issues.</p>"
var image1 = "<img src=\"http://i1301.photobucket.com/albums/ag119/jabattack1/Danny2_zps10szbdd1.jpg\" id='image1' class='animated fadeIn'></img>";
var paintCred = "<p class='animated fadeIn' id='paintCred'>Finger Painting by Milo (age 4)</p>"

var images = "<div id=\"captioned-gallery\"><figure class=\"slider\"><figure><img src=\"http://i1301.photobucket.com/albums/ag119/jabattack1/DannyPainting_zpsojhtmhs6.jpg\" alt><figcaption>Hobbiton, New Zealand</figcaption></figure><figure><img src=\"wanaka-drowned-tree.jpg\" alt><figcaption>Wanaka, New Zealand</figcaption></figure><figure><img src=\"utah-peak.jpg\" alt><figcaption>Utah, United States</figcaption></figure><figure><img src=\"bryce-canyon-utah.jpg\" alt><figcaption>Bryce Canyon, Utah, United States</figcaption></figure><figure><img src=\"hobbiton-lake.jpg\" alt><figcaption>Hobbiton, New Zealand</figcaption></figure></figure></div>";
var slider = "<div class=\"flexslider\"><ul class=\"slides\"><li><img src=\"http://i1301.photobucket.com/albums/ag119/jabattack1/DannyPainting_zpsojhtmhs6.jpg\" /></li><li><img src=\"slide2.jpg\" /></li><li><img src=\"slide3.jpg\" /></li><li><img src=\"slide4.jpg\" /></li></ul</div>"

var contactInfo = "<a href=\"mailto:paulethanhahn@hotmail.com\" class='animated fadeIn' id='contact_email'>paulethanhahn@hotmail.com</a>";

function home(){
	$('#content_container').empty();
	$('#content_container').append(text);
	$('#content_container').append(firstPic);
}

function theBook() {
    
	$('#content_container').empty();
	$('#content_container').append(guts);
	// $('#content').append(headshot);
	// $('#content').append(pointer);
	// $('#content').append(sites);
	// $('#content').append(exp);
  }

  function author() {
    
	$('#content_container').empty();
	$('#content_container').append(paul);
	$('#content_container').append(name);
	$('#content_container').append(aboutPaul);
	// $('#content').append(sites);
	// $('#content').append(exp);
  }

  function gallery() {
    
	$('#content_container').empty();
	// $('#content_container').append(slider);
	$('#content_container').append(image1);
	$('#content_container').append(paintCred);
  	$('.flexslider').flexslider({
    	animation: "slide"
  	});

	// $('#content_container').append(images);
	// $('#content').append(headshot);
	// $('#content').append(pointer);
	// $('#content').append(sites);
	// $('#content').append(exp);
  }

  function contact() {
    
	$('#content_container').empty();
	$('#content_container').append(contactInfo);
	// $('#content').append(template);
	// $('#content').append(headshot);
	// $('#content').append(pointer);
	// $('#content').append(sites);
	// $('#content').append(exp);
  }