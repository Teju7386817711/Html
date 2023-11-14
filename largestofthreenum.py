number1=int(input("enter the first number:"));
number2=int(input("enter the second number:"));
number3=int(input("enter the third number:"));
if(number1>number2) and (number1>number3):
    largest=number1
elif(number2>number1) and (number2>number3):
    largest=number1
else:
    largest=number3
print("the largest of three numbers is:", largest)