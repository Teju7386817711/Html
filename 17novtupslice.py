tuplex = (2, 4, 3, 5, 4, 6, 7, 8, 6, 1)

_slice = tuplex[3:5]
print(_slice)

# If the start index isn't defined, it's taken from the beginning of the tuple.
_slice = tuplex[:6]
print(_slice)

_slice = tuplex[5:]
print(_slice)

_slice = tuplex[-8:-4]
print(_slice)


