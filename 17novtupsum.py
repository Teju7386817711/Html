x = (1, 2, 3, 4)
y = (3, 5, 2, 1)
z = (2, 2, 3, 1)

print("Original lists:")
print(x)
print(y)
print(z)

# Use the 'zip' function to pair corresponding elements from 'x', 'y', and 'z' tuples 
# we use 'map' and 'sum' to calculate the element-wise sum.
result = tuple(map(sum, zip(x, y, z)))

print("\nElement-wise sum of the said tuples:")
print(result)
