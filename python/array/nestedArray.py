nested = [1, [2, [3, 4]]]

# flatten manual
flat = []
for item in nested:
    if isinstance(item, list):
        flat.extend(item)
    else:
        flat.append(item)

# flatten cepat (1 level)
import itertools
flat = list(itertools.chain.from_iterable([[1,2],[3,4]]))