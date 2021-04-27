var homeContent= ` <div class="hero">

    <header>
            travel-fly
    </header>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        <br>
        Fugiat aliquid minus nemo sed est.
    </p>
    <button>READ MORE</button>      
</div>
<section class="promo-tours">
<div class="promo Israel">
    <text>ISRAEL</text>
    <p>from $1500</p>
    <button class="promoBtn" id="israel">LEARN MORE</button>
</div>
<div class="promo USA">
    <text>U.S.A</text>
    <p>from $1500</p>
    <button class="promoBtn" id="usa">LEARN MORE</button>
</div>
<div class="promo AUS">
    <text>AUSTRAILIA</text>
    <p>from $1800</p>
    <button class="promoBtn" id="aus">LEARN MORE</button>
</div>
</section>
<section class="booking-form">
<p>Booking form</p>
<form>
    <div class="info">
        <div>
            <input class="partOne" type="text" placeholder="name..." id="name">
            <input class="partTwo" type="text" placeholder="email..." id="email">
        </div>
        <div>
            <input class="partOne" type="text"  placeholder="country..." id="country">
            <input class="partTwo" type="text" placeholder="hotel..." id="hotel">    
        </div>
    </div>
    
<div class="date">   
    <text>Check-in</text>
    <input type="date" class="checking">
</div>
 <div class="date">
    <text>Check-out</text>
    <input type="date" class="checking">
</div>

<div class="size">
    <text>Adults</text>
    <select type="number">
        <option >0</option>
        <option>1</option>
        <option >2</option>
        <option >3</option>
        <option >4</option>
        <option >5</option>
        <option >5</option>
    </select>

    <text>Children</text>
    <select type="number">
        <option >0</option>
        <option>1</option>
        <option >2</option>
        <option >3</option>
        <option >4</option>
        <option >5</option>
    </select>

    <text>Rooms</text>
    <select type="number">
        <option >0</option>
        <option >1</option>
        <option >2</option>
        <option >3</option>
        <option >4</option>
        <option >5</option>
    </select>
</div>
<div>
<input class="message" type="text" placeholder="message..." >
</div>
<input id="submit"type="submit" value="SUBMIT" >
</form>
</section>`;
var aboutContent= ` <div class="about">
<div class="top-section">
    <div>ABOUT:
        <span class="aboutborder"></span>
    </div>

    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
   </p>
</div>

<div class="bottom-section">
    <div>CLIENT QOUTES:
        <span class="aboutborder"></span>
    </div>
    <div class="client">
        <div class="client1"></div>
        <div class="qoute">
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

<div class="name">- MIRANDA BROWN</div>
        </div>
    </div>


    <div class="client">
        <div class="client2"></div>
        <div class="qoute">
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

<div class="name">- JOHNATHAN WES</div>
        </div>
    </div>
</div>

   </div>`;
var toursContent= `<div class="tour">
<header>
    <span>tours:</span>
</header>
<div class="tours">

<div class="promo Israel" >
<text>ISRAEL</text>
<p>FROM $1000</p>
<a href="#">
<div class="promoBtn" id="israel">      
 <p>LEARN MORE</p> </div> 
</a>
</div>

<div class="promo USA"">
<text>U.S.A</text>
<p>FROM $1500</p>
<a href="#">
<div class="promoBtn" id="usa">      
 <p>LEARN MORE</p> </div>
</a>
</div>

<div class="promo AUS">
 <text> AUSTRAILIA</text>
 <p>FROM $1800</p>
 <a href="#">
     <div class="promoBtn" id="aus">      
     <p>LEARN MORE</p> </div> 
 </a>
</div>

<div class="promo NewZealand">
 <text > <span> NEW ZEALAND</span></text>
 <p>FROM $1200</p>
 <a href="#">
<div class="promoBtn" id="newZealand">      
     <p>LEARN MORE</p> </div> 
 </a>
</div>
<div class="promo France">
 <text>FRANCE</text>
 <p>FROM $2900</p>
 <a href="#">
     <div class="promoBtn" id="france">      
     <p>LEARN MORE</p> </div> 
 </a>
</div>
<div class="promo Egypt">
 <text>EGYPT</text>
 <p>FROM $900</p>
 <a href="#">
     <div class="promoBtn" id="egypt">      
     <p>LEARN MORE</p> </div> 
 </a> 
</div>
<div class="promo Japan">
 <text>JAPAN</text>
 <p>FROM $1300</p>
 <a href="#">
     <div class="promoBtn" id="japan">      
     <p>LEARN MORE</p> </div> 
 </a> 
</div>
<div class="promo Canada">
 <text>CANADA</text>
 <p>FROM $2000</p>
 <a href="#">
     <div class="promoBtn" id="canada">      
     <p>LEARN MORE</p> </div> 
 </a>
</div>
<div class="promo UAE">
 <text>U.A.E</text>
 <p>FROM $3000</p>
 <a href="#">
     <div class="promoBtn" id="uae">      
     <p>LEARN MORE</p> </div> 
 </a>
</div>

</div>
</div>`;
var specialContent= ` <div class="specialOffers">
<div class="heading" >SPECIAL OFFER(S):
<span class="border"></span>
</div>
   
<div class="partOne">
    <div class="heading">
    BARCELONA, SPAIN
    
        <span class="border"><p>(20% off!)</p></span>
        <div class="qoute"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
        </div>
        <div class="button">Learn More</div>
    </div>   
    <div class="client1"></div>
</div>   
<div class="partTwo">
    <div class="heading">BANGKOK, THAILAND
        <span class="border"><p>(10% off!)</p></span>
    <div class="qoute">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
    </div>   
    <div class="button">Learn More</div>
</div>
    <div class="client2"></div>
</div>
</div>`;
var blogContent= `<div class="blog">
<h1>BLOG:</h1> 
<div class="entry">
    <div class="date">
        <span >06</span>
        <p> Jun</p>
    </div>
    <div class="partOne">
    <div class="image "></div>
    <div class="header">
        <h4>Sed et persipiatis unde omnis iste natus</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
   
    </div>
</div>
<div class="entry">
    <div class="date">
        <span >23</span>
        <p> July</p>
    </div>
    <div class="partOne">
    <div class="image "></div>
    <div class="header">
        <h4>Sed et persipiatis unde omnis iste natus</h4>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
    </div>
   
    </div>
</div>

</div>`;

var contactContent= `<div class="contact">
<h4>CONTACT US:</h4> 
<div class="box">
        <div class="map"></div>
        <p>
        travel-fly Inc. <br>
        8901 Marmora Road, <br>
        Glasgow, D04 89GR.<br>
        Freephone:+1 800 559 6580<br>
        Telephone:+1 800 603 6035<br>
        FAX:+1 800 889 9898<br>
        E-mail: mail@travelfly.org<br>
        </p>
        <form class="form">
            <input class="first-input" type="text" id="name" placeholder="Your Name..."><br>
            <input type="email" id="email" placeholder="Email Address..."><br>
            <input type="text" id="company" placeholder="Company..."><br>
            <input class="last-input" type="text" id="message" placeholder="Message..."><br>
            <div class="button" type="submit" value="Submit">Send Message</div>
        </form>
</div>

</div>`;

var israelContent=` <div class="israel" >
<div id="banner">
    <h2>Israel tour package:</h2>
    <h3>starting from $1000 (prices may vary)</h3>
</div>
    <div class="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;
var usaContent=` <div class="usa" >
<div id="banner">
    <h2>U.S.A tour package:</h2>
    <h3>starting from $1500 (prices may vary)</h3>
</div>
    <div id="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;
var ausContent=`<div class="aus">
<div id="banner">
    <h2>Australia tour package:</h2>
    <h3>starting from $1000 (prices may vary)</h3>
</div>
    <div id="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;
var newZealandContent=` <div class="newZealand">
<div id="banner">
    <h2>New Zealand tour package:</h2>
    <h3>starting from $1200 (prices may vary)</h3>
</div>
    <div id="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;
var franceContent=`<div class="france">
<div id="banner">
    <h2>France tour package:</h2>
    <h3>starting from $2500 (prices may vary)</h3>
</div>
    <div id="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;
var egyptContent=`<div class="egypt">
<div id="banner">
    <h2>Egypt tour package:</h2>
    <h3>starting from $900 (prices may vary)</h3>
</div>
    <div id="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;

var japanContent=`<div class="japan">
<div id="banner">
    <h2>Japan tour package:</h2>
    <h3>starting from $1300 (prices may vary)</h3>
</div>
    <div id="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;
var canadaContent=` <div class="canada">
<div id="banner">
    <h2>Canada tour package:</h2>
    <h3>starting from $2000 (prices may vary)</h3>
</div>
    <div id="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;
var uaeContent=`<div class="uae">
<div id="banner">
    <h2>U.A.E tour package:</h2>
    <h3>starting from $3000 (prices may vary)</h3>
</div>
    <div id="subbanner">
        <div class="image1"></div>
        <div class="image2"></div>
        <div class="image3"></div>
    </div>
    <div id="paragraph">
        <div class="day">
            <h2>Day #1:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #2:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
        <div class="day">
            <h2>Day #3:</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. </p>
        </div>
    </div>

<button>Book Now</button>
</div>`;

export function getPageContent(pageID, callback) {
    
    $("#app").html(eval(pageID));
    if (callback) {
        callback();
    }

}