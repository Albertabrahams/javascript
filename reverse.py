liste="ali"

b= liste.split(" ")
b.reverse()
print(b)
print(" ".join(b))



liste="ali ata bak"

a=reversed(liste.split(" "))
print(*a)