Starting_value = 1
n = 20
print("Prime numbers between",Starting_value,"and",n,"are:")
for num in range(Starting_value,n+1):
    if num > 1:
        for i in range(2,int(num/2)+1):
            if(num%i)==0:
                break
        else:
            print(num)