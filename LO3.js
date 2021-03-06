// JavaScript Document

adImages = new Array //banner rotating 4 images
("images/Calvin-banner.png","images/madonna-banner.png","images/oasis-banner.png","images/stereophonics-banner.png");
thisAd = 0;
imgCt = adImages.length;

function rotate() {
	if (document.images){
		thisAd++
	if (thisAd == imgCt) {
		thisAd = 0
	}
	
	document.adBanner.src=adImages[thisAd]
	setTimeout("rotate()", 2 * 1000)
	}
}

function logIn(form){//function to check password
	//the following code checks whether the password matches
		if (form.userid.value == "Derek" && form.pswrd.value == "Derek") {
			window.open("Assessment/LO3/LO3.html")//opens the target page
		}
		else {
			alert("Incorrect Password")//Displays error message
		}
}

//beginning of ticket purchasing function
function fillDate() {

   //retrieves index of selected artist and target element to be populated
    var artist	= document.getElementById("artist");
    var date	= document.getElementById("date");
    var ticket	= document.getElementById("tickets");
    var price	= document.getElementById("price");
    
    //clears dropdowns and price
    date.options.length = 0;
    ticket.options.length = 0;
    price.options.length = 0;
    
    // clearing the onchange event on date
    date.onchange = null;
    
    // function to calculate the total price
    function totalPrice() {
		 	var totalPrice		= document.getElementById("totalPrice");
            var ticketCount		= ticket.value;
            var priceAmount		= (price.value).substr(1);
			var extraPrice 		= 10;
			
        if (ticket.selectedIndex != 0 && price.selectedIndex != 0 && ticketCount >=4 ) {
           
		   	totalPrice.value	= " £" + (ticketCount * priceAmount + extraPrice);//calculating total price by adding selected price and ticket amount together
       	 }
		
		else{		
            totalPrice.value	= " £" + ticketCount * priceAmount;//calculating total price by adding selected price and ticket amount together
   			 }
	}
    ticket.onchange	= totalPrice;
    price.onchange	= totalPrice;

    //switch statements fill target with artist array
    switch (artist.selectedIndex) {
        case 0:
            var dateList	= ["Select Date"];
            var ticketList	= ["Select Tickets"];
            var priceList	= ["Select Price"];
           
            fillList(date, dateList);
            fillList(ticket, ticketList);
            fillList(price, priceList);
            break;
        case 1:
            // madonna
            
            var dateList	= ["Select Date", "17th July", "18th July"];//madonna dates
            var ticketList	= ["Select Tickets", "1", "2", "3", "4", "5", "6"];//amount of tickets required
            var priceList	= ["Select Price", "£30", "£45"];//madonna prices
            
            fillList(date, dateList);
            fillList(ticket, ticketList);
            fillList(price, priceList);
            break;
        case 2:
            //Stereophonics
            
            var dateList	= ["Select Date", "18th July", "20th July"];//stereophonics dates
            var ticketList	= ["Select Tickets", "1", "2", "3", "4", "5", "6"];//amount of tickets required
            var priceList	= ["Select Price", "£35", "£50"];//stereophonics prices
            
            fillList(date, dateList);
            fillList(ticket, ticketList);
            fillList(price, priceList);
            
            break;

        case 3:
            //Calvin Harris
           
            var dateList	= ["Select Date", "10th July"];//calvin harris dates
            var ticketList	= ["Select Tickets", "1", "2", "3", "4", "5", "6"];//amount of tickets required
            var priceList	= ["Select Price", "£88"];//calvin harris prices
            
            fillList(date, dateList);
            fillList(ticket, ticketList);
            fillList(price, priceList);
            break;

        case 4:
            // Oasis
           
            var dateList	= ["Select Date", "23rd July", "24th July"];//oasis dates
            var ticketList	= ["Select Tickets", "1", "2", "3", "4", "5", "6"];//amount of tickets required
            var priceList	= ["Select Price", "£45", "£60"];//Oasis prices
           
            fillList(date, dateList);
            fillList(ticket, ticketList);
            fillList(price, priceList);
            break;
	}

  
}

function fillList(list,items) {
    list.options.length = 0;
    for (var i = 0; i < items.length; i++) {
        var option = new Option(items[i]);
        list.options[i] = option;
    }   
}

function validate()//function to validate form 
{
	if( document.myForm.name.value == "" )//requires user to input name
	{
		alert( "Please enter your name" );//alerts user to input name if field is empty
		document.myForm.name.focus() ;
		return false;
	}
	if( document.myForm.address.value == "" )//requires user to input address
	{
		alert( "Please provide your address!" );//alerts user to input address if field is empty
		document.myForm.address.focus() ;
		return false;
	}
	if( document.myForm.telephone.value == "" )//requires user to input phone number
	{
		alert( "Please provide your number" );//alerts user to input number if field is empty
		document.myForm.telephone.focus() ;
		return false;
	}
	if( document.myForm.email.value == "" )//requires user to input email 
	{
		alert( "Please enter a correct email address" );//alerts user to input correct email address
		return false;
	}
	return( true );
}


	

