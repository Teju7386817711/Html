base=float(input("enter the base length:"))
perp=float(input("enter the perpendicular length:"))
hypo=float(input("enter the perpendicular length:"))

if hypo**2==((base**2)+(perp**2)):
    print("it is right angle triangle")
else:
    print("itis not a right angle triangle")