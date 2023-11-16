# Creating a dictionary 'students' with student names as keys and nested dictionaries as values.
students = {'yash': {'class': 'V', 'roll_id': 2}, 'Puja': {'class': 'V', 'roll_id': 3}}
for a in students:
    
    print(a)
    
    # Iterate through the keys using a nested for loop.
    for b in students[a]:
        
        print(b, ':', students[a][b])
