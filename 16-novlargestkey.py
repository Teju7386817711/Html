# Import the 'nlargest' function from the 'heapq' module.
from heapq import nlargest

my_dict = {'a': 500, 'b': 5874, 'c': 560, 'd': 400, 'e': 5874, 'f': 20}

# Use the 'nlargest' function to find the three largest keys in the 'my_dict' dictionary based on their values.
# The 'key' argument specifies that the values should be used for comparison.
three_largest = nlargest(3, my_dict, key=my_dict.get)
print(three_largest)
