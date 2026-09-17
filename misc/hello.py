for i in range(1, 51):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz:")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)

rows = 9
print(f"For rows = {rows}")

for row in range(1, rows + 1):
    printValue = ""
    for column in range(row):
        printValue += "*"
        
    print(printValue)

