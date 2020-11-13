# arguments, keyword arguments
# argument는 positional argumment와 keyword  argument로 나뉜다.
# *args : infinite amount of positional arguments
# **kwargs : infinite amount of keyword arguments
def func(*args, **kwargs):
    print(args)  # tuple 형태로 받는다.
    print(kwargs)  # dictionary 형태로 받는다.


func(1, 2, "a", "b", "hello", hi=True, abc=123, name="Minsoo")


def plus(*args):
    result = 0
    for number in args:
        result += number
    print(result)


plus(1, 2, 4, 41, 6, 53, 2, 23)
