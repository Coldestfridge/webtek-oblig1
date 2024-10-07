						
### Three ways:
- *External* CSS: defined by a seperate CSS file with a .css extension
- *Internal* CSS: defined withing <> element of an HTML document
- *Inline* CSS: applied directly within HTML element using the style attribute
#### External CSS
- linked to the HTML documet using the <link> element in the head section
- ![[Pasted image 20240902141436.png]]
#### internal CSS
- Defined within the style element in the head section of an HTML document
- used for smal projects, specific page styling, rapid prototyping and learning and teaching
- ![[Pasted image 20240902153636.png]]
#### inline CSS
- defined within the style attribute of the relevant element
- used for quick styling, specificity, dynamic styling,email templates, and testing and debugging
- ![[Pasted image 20240902153849.png]]
- 
### cascading
- styles defined later with higher specifity take precedence over styles defined earlier or with lower specifity
- the specifity andr order of appearence determines wich styles take precedence. 
	- if conflict, the style with highest specificity or the last defined style is applied by the browser
- I*nline styles*: highest specificity and override any other styles
- *internal*: override external if the target the same elements and properties, and if they appear after the external stylesheet link
- *external*: get overriden if inline or internal targets the sam elements and properties
### syntax
- styling declarations are seperated by a semicolon
- Declarations are surrounded with curly braces
- ![[Pasted image 20240902140029.png]]
### comments
- not displayed in source code, but can help document your source code
- used to explain the code
- ![[Pasted image 20240902154654.png]]
### selectors
- key to styling a webpage, since the enable us to find the HTML elements that we want to style
- done through defining patterns using selectors, range from simple element names to rich contextual patterns
#### categories of selectors
##### simple selectors
- *element selectors*: selects elements based on their name tag
	- ![[Pasted image 20240905143453.png]]
- *class selectors*: selects elements based on their class
	- ![[Pasted image 20240905143520.png]]
- *ID selectors*: Selects elements based on the id attribute
	- ![[Pasted image 20240905143610.png]]
- *grouping selectors*: applies same styling to multiple elements
	- ![[Pasted image 20240905143715.png]]
- *universal selector*: selects all HTML elements on a page
	- ![[Pasted image 20240905143743.png]]

##### combinator selectors
- *descendent selector*
	- ![[Pasted image 20240905143836.png]]
- *child(direct) selector*
	- ![[Pasted image 20240905143859.png]]
- *adjacent sibling selector*
	- ![[Pasted image 20240905143921.png]]
- *general(next) sibling selector*
	- ![[Pasted image 20240905143943.png]]

##### pseudo class selectors
- state of element
- ![[Pasted image 20240905144023.png]]
- ![[Pasted image 20240905144031.png]]
##### pseudo element selectors
- specified parts
- ![[Pasted image 20240905144050.png]]
- ![[Pasted image 20240905144056.png]]

##### attribute selecors
- ![[Pasted image 20240905144110.png]]

### Text and typography
- improves user experience
#### fonts
- gives better reading experience and creates identity
- 5 font families in CSS:
	- Serif (formal and elegant, e.g., Times New Roman)
	- Sans-serif (modern and minimalistic, e.g., Helvetica)
	- Monospace (mechanical, e.g., Courier New)
	- Cursive (handwriting, e.g., Lucida Handwriting)
	- Fantasy (decorative, e.g., Papyrus)
- *web safe fonts*
	- fonts commonly found on most browsers and devices
-  *font family*
	- allows us to specify the text font
	- provide on fallback font family in case the user browser does not support your font
		- ![[Pasted image 20240909121359.png]]
- *font-style*
	- specifies wether a text should be italic or not
- *font-weight*
	- sets the boldnes of the font
	- ![[Pasted image 20240909121641.png]]
- *font-size*: secifies text size
	- absolute: sets to a specified size, user cannot change the size
	- relative: sets size relative to nearby elements, allows user to change text size
	- default size is 16px
	- ![[Pasted image 20240909122100.png]]
		- px is absolute
		- 1em is equal to current font size
		- % relative to font size of parent element
- *font*: sets several font properties at the same time
	- ![[Pasted image 20240909122242.png]]
#### text color
- *color*: sets color on text
	- color name
	- HEX value
	- RGB value
	- ![[Pasted image 20240909122448.png]]
#### text alignment
- *text-align and vertical-align*: changes placement
	- ![[Pasted image 20240909122700.png]]
#### text decoration
- *text-decoration-line*: adds decoration line to text
- *text-decoration-color*: sets the color of decoration line.
- *text-decoration-style*: sets the style of decoration line (solid, dotted etc.).
- *text-decoration-thickness*: sets the thickness of decoration line.
- ![[Pasted image 20240909122842.png]]
#### other
![[Pasted image 20240909122908.png]]
![[Pasted image 20240909122917.png]]

### CSS box model
- refers to desig and layout
- ![[Pasted image 20240909123107.png]]
	- HTML elements
#### elements
- *content*: the actual content, text and images
- *padding*: transparent space between content and elements
- *border*: the boundary of elements box
- *margin*: transparent space outside element border
- ![[Pasted image 20240909123350.png]]
- *Dimension properties*: height, max-height, max-width, min-height, min-width, and width
- *Margin properties*: margin, margin-bottom, margin-left, margin-right, and margin-top
- *Padding properties*: padding, padding-bottom, padding-left,padding-right, and padding-top
- *Border properties*: border-style, border-width, border-color etc

### layout
- concerns arrangement and positioning of elements
- relative to default position, other elements, parent container and main viewport
- layout mechanisms are often used in combination
#### normal flow
- browser lay ou HTML pages by default in *normal flow*: in exact order and stacked on or sit next to each other
- *block elements*: sit on each other vertically
- *inline elements*: sit next to each other
- ![[Pasted image 20240909124527.png]]
- *display*: specifies how elements behave in a normal flow
	- ![[Pasted image 20240909124625.png]]
- inline and block
	- ![[Pasted image 20240909124641.png]]
#### flexbox
- *flex*: applied to parent element, all children will then become flex elements
	- helps us lay out elemets vertically or horizontally
	- ![[Pasted image 20240909124805.png]]
	- properties:
		- *flex-direction*: establishes the main axis; row, column, row-reverse, column-reverse
		- *flex-wrap*: sets whether to force item to one line or not; wrap, no-wrap, wrap-reverse
		- *flex-flow*: specifies both direction and wrap (e.g., row nowrap)
		- *justify-content*: sets the alignment along main axis; center, start, end, flex-start, flex-end, left, right
		- *align-items*: defines the alignment along cross-axis; stretch, center, start, end
		- *align-content*: defines the alignment along cross axis when there are multiple lines; start, center, space-between, space-around
		- ![[Pasted image 20240909125029.png]]
		- ![[Pasted image 20240909125037.png]]
#### grid
- allows to lay out elements in two dimensions, columns and rows
- *display*: grid is applied to parent element together with grid-template-rows and grid-template-columns properties
- ![[Pasted image 20240909125331.png]]
- *repeat*: allows specifying repeating paterns
- *fractional units(fr)*: represents a fraction of the available space in the grid container
- *grid-column-gap and grid-row-gap*: set the gap between an elements columns and rows
- ![[Pasted image 20240909125753.png]]
- *span*: used to span a cell multiple rows
	- ![[Pasted image 20240909125827.png]]
- *grid-colum and grid-row*: states the starting and ending lines of items
	- ![[Pasted image 20240909125922.png]]
	- ![[Pasted image 20240909125928.png]]
- *grid-template-area*: arranges items on the grid
	- ![[Pasted image 20240909130011.png]]

#### multiple-column layout
- allows organizing content in multiple columns
- *column-content*: specifys the number of columns an element should be divided into
	- ![[Pasted image 20240909130822.png]]
- several properties can be used to modify the column view
	- ![[Pasted image 20240909130909.png]]
#### positioning
- allows to override normal document flow
- *position*: specifies the type of positioning method used for an element
	- *static*: positioned according to normal flow.
	- *relative*: positioned relative to its normal position.
	- *fixed*: is positioned relative to viewport.
	- *absolute*: is positioned relative to the nearest positioned ancestor.
	- *sticky*: is positioned based on the user's scroll position
	- margins are set using: top, bottom, left and right
	- ![[Pasted image 20240909131142.png]]
	- ![[Pasted image 20240909131152.png]]
#### float
- *float*: used to position an element out of the normal flow
	- values: left, right, none, inherit
- mostly used for positioning images, navigation bars and sidebars
- ![[Pasted image 20240909131337.png]]
- ![[Pasted image 20240909131348.png]]
- *clear*: used to stop displaying elements besides
	- values: left, right, both
	- ![[Pasted image 20240909131600.png]]
### responsive design(RWD)
- ensures that web pages render well across a variety of devices and window or screen sizes
- HTML is fluid by default, but this isnt enough
#### media queries
- allows to run a series of tests and apply CSS selectively
- *breakpoints*: where a media querie is used and changes are made
- ![[Pasted image 20240909132043.png]]
#### layout technologies
- Responsive sites are built on fluid grid layouts instead of targeting every specific device
- use percentages instead of pixels to define width of elements, allows elements to resize proportionally based on scree size
- Multiple.column layout, flexbox and grid can be used
#### images/media
- can resize images to fit within their containing elements while maintaining their aspect ratio. Often achived using *max-width*: 100% and *height*: auto
	- makes so it dosnt overflow

#### typography
- adjusting font sizes and line height base on screen size to ensure readability on all devices
- achived using relative units like em or rem
- ![[Pasted image 20240909132928.png]]
#### viewport
- instructs mobile browsers to set the viewport width to the devices width and scale te document to 100% of its intended size, displaying the documens at the mobile-optimized size you intended
- *width=device-width*: overrides the default width set bu some devices with the actual width of the device