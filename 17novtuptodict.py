# Create a list of tuples where each tuple contains two elements, a character and a number.
l = [("x", 1), ("x", 2), ("x", 3), ("y", 1), ("y", 2), ("z", 1)]

d = {}# Create an empty dictionary

# Iterate through each tuple (a, b) in the list 'l'.
for a, b in l:
    # Use 'setdefault' to create an empty list in the dictionary
    # Then, append the value 'b' to the list associated with key 'a'.
    d.setdefault(a, []).append(b)
print(d) 
