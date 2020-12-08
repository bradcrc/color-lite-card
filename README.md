![title](title.gif)
# color-lite-card


Custom card for [Home Assistant](https://www.home-assistant.io/) with color and dimming support. [Config and Image Editing Tutorial](https://github.com/bradcrc/color-lite-card/tree/master/tutorial)

[Youtube: demo video](https://www.youtube.com/watch?v=2RhkEiQ_jrI)

This is a simple custom card for Home Assistant that adds easy support for lights, showing color and dimming in a [picture elements card](https://www.home-assistant.io/lovelace/picture-elements/).


This card supports both regular white dimmable bulbs, and color bulbs.  

**Requirements:** The referenced light entity must support the 'brightness' attribute for dimming to work, and it must support the 'hs_color' and 'rgb_color' attributes for color to work.
 
The card currently only works on browsers that support the css filter element.  Would be very easy for you to add webkit support if you wanted or needed that.


------------

#### entity
(string)(Required)

Entity id
 
&nbsp;
  
  
#### image
(string)(Required)

Path to light image


&nbsp; 
 
#### color_image
(string)(Optional)

Path to color image for those bulbs which support color.  Hue rotation is based on a red image, so this should be a saturated red image. [see tutorial](https://github.com/bradcrc/color-lite-card/tree/master/tutorial/Lesson-4-Color-Lamp)


------------

## Example Dimmable Light Usage


          - type: custom:color-lite-card
            entity: light.my_lamp
            tap_action:
              action: none    
            image:
              /local/floorplan/lamp.png                         
            style:
              top: 50%
              left: 50%
              width: 100% 
              
              
              

## Example Color Light Usage


          - type: custom:color-lite-card
            entity: light.my_color_lamp
            tap_action:
              action: none    
            image:
              /local/floorplan/CLamp.png   
            color_image:
              /local/floorplan/CLamp-Color.png                         
            style:
              top: 50%
              left: 50%
              width: 100% 
              
              
              
# Installation
  
Installation is the same as any custom card.

1. Copy the file [color-lite-card.js](https://github.com/bradcrc/color-lite-card/blob/master/color-lite-card.js) to your /config/www/js/ directory

2. Add the following to the resources area of your ui-lovelace.yaml


            - url: /local/js/color-lite-card.js
              type: module

