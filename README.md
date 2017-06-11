# Website Optimization

Website Optimization uses - **javascript, jQuery, HTML5, CSS**. 
The objective of this project is to optimize this online portfolio for speed. In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the Critical Rendering Path course.
The original unoptimized repository is available [here](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).

## Quickstart

####  Using your normal browser
  1. Clone this repo.
  2. Open project:        frontend-nanodegree-mobile-portfolio.
  3. Set up a local host. 
  4. Load in Chrome using a local host `dist/index.html` and `dist/views/pizza.html`

### Recommended approach

You are recommended to use SimpleHTTPServer if Python has been installed (Mac OS X and Linux should have pre-installed version). Decompress the file in Explorer (Windows) or Finder (Mac), open a terminal window, use cd command to get in the file folder and run the following command:
`python -m SimpleHTTPServer`
After it starts, a web browser window should be jump up. If you don't see the window, then type http://localhost:8080 into web browser address line and press Enter.

## What did I do? 
##### PageSpeed
- Mobile 92/100
- Desktop 94/100

How did I carry out the optimization?

#### Step 1: Improve PageSpeed Insights score for index.html

- Specified attribute media="print" for printing stylesheet file.
- Added async attribute to the Google Analytics script.
- Added critical CCS style using grunt-crititcal.  
- Used preload and js code for `css/style.css`
- Resized and compressed all images
- Used a script to load google api font.

#### Step 2: Improve Frames per Second in pizza.html

On the Pizza page, there are randomly generated pizzas with different locations, when you are scrolling, background pizzas will move left to right. All static pizzas on the page could be resized by changing the slider with options for 'small', 'medium', or 'large'.

##### Optimizations in views/pizza.html:

- Added souce media for responsive photos.

##### Optimizations in views/js/main.js:

Compressed and resized pizza image (images/pizza.png) and created versiones of 100, 200 px  for background pizzas.

Updates in the changePizzaSizes function:
created new array outside loop to store all Pizza containers.
Followed Cam's lecture to change Pizza size values from pixels to percent, and removed unnecessary function
Updates in the updatePositions function:
Created phase array variable to hold the 5 values in a separate for-loop
I split the for loop because reading and writing was hapenning at the same time, that was the reason for FSL.

#### Step 3: Use the task-runner Grunt

Grunt is a task-runner that for this project was used to:

Create, copy and clean the destion folder clean
Minify CSS files  minifyCSS
Inline CSS after minifing string-replace
Minify JavaScript files  minifyJS
Compress images imagemin
Minify HTML files after above tasks htmlmin
 
# Development
Want to contribute? Great!
In adition of what is already built, you can add more cool features. 
 
# License
The content of this repository is licensed under a [Creative Commons Attribution License](https://creativecommons.org/licenses/by/3.0/us/)

 

