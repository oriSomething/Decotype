###############################################################
#	kerning to JSON       ver:    0.3
###############################################################

#print "start"
#print "--------------------"
print "{"

font = Glyphs.font
 

#for g in font.glyphs:
#	print g.name

g = font.glyphs[20]
w = (g.layers)[0].width

i=0

for g in font.glyphs:
	w = "0"
	if ( len (g.layers) > 0 ):
		w = str ( int ((g.layers)[0].width ) )
	if (cmp(g.name, ".notdef") != 0) & (cmp(g.name, "NULL") != 0) & (cmp(g.name, "CR") != 0):
		print '"' + g.unicode  + '" : ',
		print "{ ",
		print '"name" : "' + g.name + '"',
		print ",",
		print '"width" : "' + (""+w) + '"',
		print "},"
	i += 1




#print g.layers

print "}"
#print "--------------------"
#print "end"