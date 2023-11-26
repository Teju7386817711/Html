dict1 = {             
    'Student' : 'tej',  
    'Course' : 'cse',  
    'Address' : 'sap'  
}  
  
dict2 = {  
    'Teacher' : 'mouni',  
    'Subject' : 'Cse'  
}  
   
d3 = dict(dict1)  # Use dict() constructor 
print("Before Merge", d3)  
d3.update(dict2)  
print("Merge two dictionaries", d3)   