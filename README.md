##DECOTYPE

![decotype demo](http://www.orilivni.com/wp-content/uploads/2013/12/decotype-example.gif)


This is a script for Adobe Indesign. Its purpuse is allowing an easy way to create designed letters by using fonts that have multyply weights that suppose to be above each other.
Right now it's limmited for a specific font (Mandatory by [fontef](http://www.fontef.com/)), but it can easly adapt to any font.

**The way it works:**
1. you select a paragraph
2. turn on the script
3. chooce inside the dialog that's being opened, colors in the dropdowns (the colors are the colors of the swatches of the active document)
4. press convert


for more informatino:
[here](http://blog.orisomething.com/2013/06/decotype/)



###TODO:

* support already kerned paragraphed
* multiply fonts support
* external files for font data instead of an internal const
* knows when effect is apllied and can overwrite
* revent option
* create a new color on the panel
* support for any RTL languages, and not only Hebrew



###EXTRA:

I've Added a little helper for getting metrics out of fonts. It's a script to Glypths, and the result need a little tweek so it would be a valid JSON.
Can't say if it works today. Glyphs changes once in awhile the macro engine



###BUGS:

* RTL LTR not good in 100%
* bug fix - check the new line in middle of doubled letter


###LICENSE:

Decotype is licensed under the MIT License, but if you're planning to use the code, add an attribute to me: [Ori Livni](http://www.orisomething.com).
