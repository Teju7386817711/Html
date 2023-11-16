# Create the first dictionary 'd1' with key-value pairs.
d1 = {'a': 100, 'b': 200}
d2 = {'x': 300, 'y': 200}

# Create a new dictionary 'd' and initialize it as a copy of 'd1'.
d = d1.copy()
d.update(d2)# Update the dictionary
print(d) 
