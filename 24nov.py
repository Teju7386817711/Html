#finding the (count)number of each vowels present

vowels = 'aeiou'

ip_str = 'Hello, is every thing okay for you?'

# make it suitable for caseless comparisions
ip_str = ip_str.casefold()

count = {}.fromkeys(vowels,0)

for char in ip_str: # counting the vowels
   if char in count:
       count[char] += 1

print(count)
