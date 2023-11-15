dict1={'stdno':'101','stuname':'teja','stuage':22,'stucity':'hyderabad'}
print("\n dictionary is:",dict1)
print("\n student name is:",dict1['stuname'])
print("\n student city is:",dict1['stucity'])
print("\n all keys in dictionary")
for x in dict1:
    print(x)
print("\n all keys in dictionary")
for x in dict1:
    print(dict1[x])
dict1["phnno"]=7386817711
print("\n updated dictionary is:",dict1)
dict1["stuname"]="moounika"
print("\n updated dictionary is:",dict1)
dict1.pop("stuage");
print("\n updated dictionary is:",dict1)
print("\n updated dictionary is:",len(dict1))
dict2=dict1.copy()
print("\n new dictionary:",dict2)
dict1.clear()
print("\n updated dictionary is:",dict1)