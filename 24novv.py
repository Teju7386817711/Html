# sort alphabetically the words form a string
my_str = "Hello this is tejaswini kotagiri"

# breakingdown the string into a list of words
words = [word.lower() for word in my_str.split()]

words.sort()

print("The sorted words are:")
for word in words:
   print(word)
