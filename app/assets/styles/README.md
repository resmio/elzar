#Main File#
We import all the sass files here, do not modify first 3 lines, that should
be kept like this:

`@import "bourbon";
@import "base/base";
@import "neat";`

Then we use directories for organizing our rules, on each folder we have one
main file named as the folder and the rest of the files are imported there, that
way we only need to import the main file in main.scss, all the file names inside
a folder must begin with an underscore, to let sass know that they are partials
and it doesn't need to compile them in the main.css if we haven't imported them.

One common mistake is to forget to import new files from the folder main file,
so is good to get used to import the new file in the main folder one, as soon as
we create it.

## File structure ##
We use [SMACSS](https://smacss.com/) for file structure on our scss, here's a
little explanation of what goes in each folder.

### base/ ###  
We put all the native html elements (h1, ul, span ...) definitions here.  
We also import the project variables from here.  

### layout/ ###
Contains elements that allow us to control the layout, things like container
elements or big sections of the page go here.

### modules/ ###
Includes definitions for our modules, or objects. The goal is for as much code
to exist in here as possible, making it flexible and reusable

### other/ ###
Essentially this is all the code that doesn't fit in base, layout, or modules.
Code we just couldn't make modular; glue between modules; top level layouts; etc.

### themes/ ###
In this folder we put color palettes and type system that allow us to override,
styles just by adding a class. Type systems are expensive since we need to
download the fonts, so use them sparingly.

### shame/ ###
Hacks and crimes against code purity, go here ideally it should be empty and try
to refactor it as soon as we have stuff in here.

## Naming conventions ##
We use BEM for naming our scss [here's](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) an excelent article but in summary:
The naming convention follows this pattern:

`.block {}
.block__element {}
.block--modifier {}`

.block represents the higher level of an abstraction or component.
.block__element represents a descendent of .block that helps form .block as a whole.
.block--modifier represents a different state or version of .block.
