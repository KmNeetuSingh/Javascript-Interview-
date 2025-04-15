num  = int(input("Enter a number: "))
reversed = 0
while num >0 :
    last  = num %10 
    reversed = reversed *10 + last
    num = num // 10
print("Reversed number is: ", reversed)
