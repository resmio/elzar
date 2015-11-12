# elzar
resmio glamourous style guide  

We are publishing this styleguide as a bower package so we can require it in any
app. The styleguide is already registered as a Bower package called elzar, so
to install it on a project you need to run `bower install elzar --save` (if you
don't have bower installed run `npm install bower -g` to install it, if you
don't have npm install [Node](https://nodejs.org))  
When we have changes that we want to push to the places where elzar is used we
need to do some work. This is how it goes.  


![](http://futurama-madhouse.net/fanart/kylem/elzar2_091004.png)  

##How to work with elzar##
This is just a workflow I just came up with, so feel free to point any
error/improvement.  

1. Clone elzar by doing `git clone git@github.com:resmio/elzar.git`  

2. Run `cd elzar` to enter the elzar folder repo  

3. Create a branch with your feature name (`git checkout -b your-feature-name`)  

4. Run `gulp watch` to start the compiling process, it will automatically open
a browser pointing to index.html, every time you change the code gulp will
update the files and refresh the browser. If this doesn't happen check the
terminal for error messages. You need chrome canary installed since it is the
browser that gulp will open by default.  

5. Create your awesome feature, once finished run `git add -A` to tell git that
you want all the changes included in your commit, then run `git commit` to save
all your changes in a commit, it will open a text editor enter here a message
describing what your changes are for (ie: Styled the headers to use Comic Sans
and adding a blink effect to the links), save the text file and your changes
are commited.  

6. Push your branch to github `git push origin your-branch-name`.  

7. Go to the [elzar repo on github](https://github.com/resmio/elzar) and do a
pull request. This means that you want your changes integrated into the master
elzar branch. [Here](https://help.github.com/articles/creating-a-pull-request/)
is an explanation on how to create a pull request.   

8. Celebrate!  

##How to update to test your changes to elzar in the main app##
Sometimes you will want to preview the changes on the app, before making the
pull request, to do this you must have your branch pushed to the elzar github
repo (do until step 6 from the previous section). Then:  

1. Go to the app that is requiring the elzar bower package and open its
bower.json file.  

2. Under dependencies look for elzar it should be something like:
`"elzar": "0.0.9"`  

3. Change the "0.0.9" part to `"git@github.com:resmio/elzar.git#your-branch"`  

4. Run bower install from the terminal  

5. Test your new stuff in the main app, after checking that everything is
allright continue from step 6 in the previous section.  

##How to update the bower package##
Best to do this when the branch is tested and the feature is merged into
master, but we can do it from any branch. Here's how to do it:  

1. In elzar open bower.json and look for the field called 'version', after it
you will see a number (ie: 0.0.7), update that number (we use [semantic
versioning](http://semver.org/))  

2. Update that number in package.json too (to the same version number)  

3. Add and commit the changes.   

4. Tag the release by running `git tag -a v0.0.2`  

5. Push the tags to github `git push origin master --tags`  

6. Don't forget to update bower.json in the places where you use elzar.  

(You can also tag the release directly from
[github](https://help.github.com/articles/creating-releases/))  


##The ten commandments of sane style sheets##
These are extracted from the great book [Enduring CSS](https://leanpub.com/enduringcss)  

1. **Have a single source of truth for all key selectors.**  
 Overrides, media queries and all the rules modifying an element are in the same declaration.  

2. **Do not nest selectors (except media queries or (not many) overrides).**  
Each key selector gets its own class and rule block, do not nest child elements. Do NOT do things like this:
```
.MarketGrid > .PhoneOnlyContainer > .ClickToCallHeader > .ClickToCal\ lHeaderMessage > .MessageHolder > span {
font-weight: bold;
padding-right: 5px; }
```  

3. **Do not use ID selectors.**  
Please don't, they introduce specifity and specifity is evil.     

4. **Do not write vendor prefixes in the source stylesheets**  
We will add them later using a post-processor.  

5. **Use variables for colors, sizing, z-index and breakpoints**  
It helps us maintain consistency, to find the colors please use [name that color](http://chir.ag/projects/name-that-color/) to avoid things like `$red-darker-than-darkest`.  

6. **Write rules mobile first, avoid max-width**  
It's easier and allows us to get into a mobile-first mentality, the only time we are allowed to use max-width is when we want to isolate some style to a middle range viewport.  

7. **Use mixins (or variables) for font-stacks**  
Put it in the body declaration and only override if necessary, if you don't need complicated logic, use a variable instead.  

8. **Comment all magic numbers and browser hacks**  
If a situation arises where a pixel based value needs entering into the authoring style sheets that isn’t already defined in the variables this should serve as a red flag to you. About browser hacks it is clear now what that clever hack does, but it won't probably be in three months so put a comment there.  

9. **Do not inline images (still not sure about this one)**  
We will use a post-processor to inline them later. But this is still a work in progress, so just use regular background-images for now.  

10. **Simple is a lot better than complicated**  
Try and write CSS code that is as simple as possible for others to reason about in future. Writing loops, mixins and functions should be minimised or used very seldom.  
