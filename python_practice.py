def get_middle(str):
    midpoint = len(str) // 2
    if len(str) % 2:
        return str[midpoint]
    else:
        return str[midpoint - 1: midpoint + 1]

print(get_middle("test")) # should return "es"
print(get_middle("testing")) # should return "t"
print(get_middle("middle")) # should return "dd"
print(get_middle("A")) # should return "A"