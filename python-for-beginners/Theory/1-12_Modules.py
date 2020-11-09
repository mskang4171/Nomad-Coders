# import math # 이렇게 import하면 math module내의 모든 기능을 다 가져와서 비효율적
from math import ceil, fsum
from math import fabs as absolute
from calculator import plus, minus

# print(math.ceil(1.2))
# print(math.fabs(-1.2))

print(ceil(1.2))
print(fsum([1, 2, 3, 4, 5, 6, 7]))

print(absolute(-1.2))

print(plus(4, 5), minus(4, 5))

