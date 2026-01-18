arr = [1, 2, 3, 4]

# for loop
for x in arr:
    print(x)

# map
doubled = list(map(lambda x: x * 2, arr))  # [2, 4, 6, 8]

# list comprehension (lebih umum)
doubled = [x * 2 for x in arr]

# filter
even = list(filter(lambda x: x % 2 == 0, arr))  # [2, 4]

# reduce
from functools import reduce
sum_val = reduce(lambda a, b: a + b, arr)  # 10

# any (some)
has_even = any(x % 2 == 0 for x in arr)    # True

# all (every)
all_positive = all(x > 0 for x in arr)     # True

# find
found = next(x for x in arr if x > 2)      # 3