
friends=('tej','aswini','moonika','siri')

print("Created tuple is :",friends)

print("Third person in tuple is : ",friends[2])
print("From 3-4 friends are : ",friends[2:5])

print("All members in friends tuple are : ")
for i in friends:
    print(i)

print("Length of Friends tuple is : ",len(friends))

friends2 = ('sowmya','Swapna','myth','varam')
print("Tuple concatenation : ",friends+friends2)

#Finding index of the element
print("sowmya index number is : ",friends.index('sowmya'))
