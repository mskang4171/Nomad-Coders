days = ["Mon", "Tue", "Wed", "Thur", "Fri"] # List : mutable sequence
print(days)
print(type(days))

print("Mon" in days)
print("Man" in days)
print(days[2])
print(len(days))

days.append("Sat")
print(days)

days.reverse()
print(days)
