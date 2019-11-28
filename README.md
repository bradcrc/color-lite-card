# color-lite-card
Custom card for Home Assistant with color and dimming support

This is a simple custom card that adds easy support for lights, showing color and dimming in a picture elements card in lovelace.


This card supports dimmable white bulbs, and color bulbs.

The light entity must support the brightness attribute for dimming to work, and it must support the hs_color and rgb_color attributes for color to work.
 
The card currently only works on browsers that support the css filter element.  Would be very easy for you to add webkit support if you wanted or needed that.
