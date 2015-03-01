# Peekaboo-Slider-Plugin
A plugin that slides images, text, & photos onto the web page on click.  Also great for slide in navs.
The Peekaboo Slider Plugin is a fun way to show and hide images, text, and slider nav bars on your webpage. 

**View the Live Demo here:**  
http://www.tammykimkim.com/peekaboo-slider-plugin

# Getting Started 
**1. Simply include 'peekaboo.js' in your scripts folder, and link to it in the head of your index.html file.**

Peekaboo.js builds upon the jQuery UI library, so please be sure to add the following 3 scripts to your index.html page:

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
<script src="peekaboo.js"></script>

```
**2. Now, add one of the following classes of ".toggle-[direction]" to the HTML element you would like to use as your trigger.  It can be an image, text, a div, or a link. In my example below and in the demo, I added it to the div.**
```
  ".toggle-up" - the slider goes down and then [UP]  
  ".toggle-right" - the slider goes to the left and then [RIGHT] or
  ".toggle-down" - the slider goes up and then [DOWN] or
  ".toggle-left" - the slider goes right and then [LEFT]
```
**3. Make sure to add a class of ".slider" + ".slider-[direction] to the menu, image, or text block you would like to hide and then slide onto the page.  Again, I used a div, but you can put it on any tag in your html. (See example below).**
  ```	
** These classes are required** Everything else is optional.

**<div class="toggle-up">**
    <a href="#">Click to see a drop down nav</a>
  </div>

**<div class="slider slider-up">**
    <ul>
      <li>
        <img src="images/165x.png" alt="The Ninja clipart">
      </li>
      <li><a href="#">Hi there!</a></li>
      <li><a href="#">Add some text to</a></li>
      <li><a href="#">describe your images</a></li>
      <li><a href="#">or link them</a></li>
      <li><a href="#">line by line</a></li>
      <li><a href="#">as a nav</a></li>
    </ul>
  </div>
```
**Here is a glimpse at the JavaScript & jQuery:**
```
    $(".toggle-up").click(function(e) { 
        e.preventDefault(); 
          $('.slider-up').toggle("slide", option1, duration);
    });
```

**Here is what the CSS looks like:**
```
<!-- This is your trigger -->
.toggle-up { 
  cursor: pointer;
	text-align: center;
	background: rgba(0,0,0,0.3);
	padding: 25px;
}
<!-- This is your slide-in info -->
.slider {  
  display: none;
  position: absolute;
}
.slider-up { 
  width: 50%;
  top: 20px;
  left: 0px;
}
<!-- These are all optional and can be customized acc to your needs -->
.slider-up ul li {
  font-size: 12px;
  letter-spacing: 2px;
  padding: 2px 0;
  color: #000;
}
.slider-up a {
  color: #000;
}
.slider-up a:hover { 
  color: rgba(199,21,133,1);
}
```
# That's it!

**Further Reading...**
You will notice that there are some options in the peekaboo.js file:
```
// Which direction?
// The direction reps what happens after it has clicked the second time.
// For example, on click, the slider goes up, and on the second click, the slider goes "DOWN" = option3.

var option1 = { direction: "up" };
var option2 = { direction: "right" };
var option3 = { direction: "down" };
var option4 = { direction: "left" };
* Thank you, jQuery UI!

// Set the time of the animation here:
var duration = 500;
```
# Image Sources:
**Github images forked here:**
https://github.com/EmilS/Octocat/blob/master/scrapeImgs.sh

**Free clipart images found here:**
http://free.clipartof.com/165-Ninja-Avatar-Character-With-Ninja-Stars-And-A-Sword-Free-Vector-Clipart-Illustration.png
http://free.clipartof.com/172-Pink-Punk-Rocker-Avatar-Character-With-Green-Spikes-Free-Vector-Clipart-Illustration.png

**Please Note**
This is my first plugin made with JavaScript & jQuery @HackerYou using GitHub, Git, SublimeText3, HTML5, and CSS3.

Please feel free to fork, improve, use, and share this plugin.

Cheers! : )

