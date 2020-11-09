def minus(a, b):
    return a-b


result = minus(b=30, a=1)
print(result)


def say_hello(name, age, are_from, fav_food):
    return f"Hello {name} you are {age} years old. You are from {are_from}. You're fav food is {fav_food}"


hello = say_hello(age=12, name="nico", fav_food="kimchi", are_from="columbia")
print(hello)
