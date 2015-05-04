console.log('danny');

var guts = "<p class='animated fadeIn' id='guts'>Dear Reader,<br><br>Tonight, while all others lay soundly asleep in their warm cozy beds, and adventure of tremendous wonder awaits.<br><br>In a most tiny carrot farm on a tall hill by the sea, there lives a poor little boy named Milo, who spends most of his days alone in the woods.  One day, Milo comes back to an empty home and finds an urgent note from his father stating his mother has been taken to the hospital.  Later that night, Milo, along with his stuffed puppy named Danny, decides he should cheer up his bedridden mother by retrieving a shining north star he sees from his bedroom window.</p>"
var guts2 = "<p class='animated fadeIn' id='guts2'>But there’s trouble ahead.<br><br>On their way in space, while traveling on a ship made of picnic basket, Milo and Danny are blown off course, and eventually crash lands in a world so far away.  Little do the know, their journey, which starts off as something so innocent, will uncover a much larger story of a young kidnapped princess, and the murderous demon who holds her.<br><br>Where is the princess kept?  Nobody knows.  Then, how can they find her?  And if they do, could she help them back home as they’ve been told?</p>"

var gutsRightArrow = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/right_zpsgnrszi52.png' id='gutsRightArrow' class='animated fadeIn' onClick=\"RightArrow();return false;\"></img>";
var gutsLeftArrow = "<img src='http://i1301.photobucket.com/albums/ag119/jabattack1/left_zpsqqefdoqo.png' id='gutsLeftArrow' class='animated fadeIn' onClick=\"LeftArrow();return false;\"></img>";

var paul = "<img src=\"http://i1301.photobucket.com/albums/ag119/jabattack1/headshotpaul_zpsimr55qvg.jpg\" id='paul' class='animated fadeIn'></img>";
var name = "<p class='animated fadeIn' id='name'>Paul Ethan Hahn</p>"
var aboutPaul = "<p class='animated fadeIn' id='aboutPaul'>Paul Hahn has been working with writing challenged clients for over four years. (How long you've been providing a service is useful information.) She provides ghost writing, coaching and ghost editing services. (What your services are is also useful) Her educational background in family science and journalism has given her a broad base from which to approach many topics. (Education and experience.) Her writing skills may be confirmed independently on oDesk.com and Elance.com. (Provable facts.) She especially enjoys preparing resumes for individuals who are changing careers. (Hook, grab and hold.) You may learn more about her services at Writing as a Ghost.com. (Second hook, grab and hold.)</p>"
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
	$('#content_container').append(gutsRightArrow);
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

  function RightArrow() {
  	$('#content_container').empty();
  	$('#content_container').append(guts2);
  	$('#content_container').append(gutsLeftArrow);
  }

  function LeftArrow() {
 	$('#content_container').empty();
	$('#content_container').append(guts);
	$('#content_container').append(gutsRightArrow);
  }