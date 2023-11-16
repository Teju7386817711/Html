# Creating a dictionary 'dict_num' with keys and values.
dict_num = {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}
print("key  value  count")

# Iterate through the key-value pairs in 'dict_num' using the 'enumerate' function.
# The 'enumerate' function assigns a count starting from 1 to each pair and unpacks them as (count, (key, value)).
for count, (key, value) in enumerate(dict_num.items(), 1):
    print(key, '   ', value, '    ', count) 
