def say_hello(name):
    print("hello", name)


say_hello("Nicolas")
# say_hello() # TypeError: say_hello() missing 1 required positional argument: 'who'


def plus(a, b):
    print(a + b)


def minus(a, b=0):  # default value
    print(a - b)


plus(3, 5)
minus(2, 5)
minus(2)
