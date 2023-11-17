def test(lst):
    # Use 'map' to calculate the sum of elements within each tuple in the list.
    result = map(sum, lst)
    
    return list(result)
nums = [(1, 2), (2, 3), (3, 4)]

# Print a message indicating the original list of tuples.
print("Original list of tuples:")
print(nums)

print("\nSum of all the elements of each tuple stored inside the said list of tuples:")
print(test(nums))

nums = [(1, 2, 6), (2, 3, -6), (3, 4), (2, 2, 2, 2)]

print("\nOriginal list of tuples:")
print(nums)

# Call the 'test' function to calculate the sums and convert the result to a list, then print it.
print("\nSum of all the elements of each tuple stored inside the said list of tuples:")
print(test(nums))
