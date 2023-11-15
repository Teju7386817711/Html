print("options are /n")
print("1.convert temperatures from celsius to fahrenheit \n")
print("2.convert temperatures from fahrenheit to celsies \n")
opt=int(input("choose any option(1 or 2):"))
if opt==1:
    print("convert temperatures fron celsius to fahrenheit \n")
    cel=float(input("enter temperature in celsius:"))
    fahr=(cel*9/5)+32
    print("temperature in fahrenheit=",fahr)
elif opt==2:
    print("convert temperatures from fahrenheit to celsius \n")
    fahr=float(input("enter temperature in fahrenheit:"))
    cel=(fahr-32)*5/9;
    print("temperature in celsius=",cel)
else:
    print("invalid option")