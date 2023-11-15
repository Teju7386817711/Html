file1=input("enter the first filename:")
file1=input("enter the second filename:")
fn1=open(file1,'r')#openfile in readmode
fn1=open(file1,'w')
cont=fn1.readlines()
for i in range(0,len(cont)):
    fn2.write(cont[i])
#close the file
fn2=close()
print("content of the first file copied to second file")
fn2=open(file2,'r')#open file in read mode
cont1=fn2.read()#read the content of the file
print("content of second file:")
print(cont1)
fn1.close()
fn2.close()