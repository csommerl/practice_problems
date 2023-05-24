"""
https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/python

Algo
1. Create time variable.
2. Populate a new array `tills` of length num_of_tills
    Order from smallest to largest.
3. Find index of smallest num in array.
    a. Add num to time.
    b. Subtract from every ele in tills.
    c. Place next customer in index.
    d. Continue while
        no new customers
        some elements are non-zero

helper functions
elapse_time
add_next_customer
"""


def queue_time(customers, num_of_tills):
    time = 0

    if not customers:
        return time
    
    if len(customers) > num_of_tills:
        tills = sorted([customers.pop(0) for i in range(num_of_tills)])
    else:
        tills = sorted([customers.pop(0) for cust in customers])

    while tills:
        elapsed_time = tills.pop(0)
        time += elapsed_time

        tills = elapse_times(tills, elapsed_time)

        if not customers:
            continue

        next_cust = customers.pop(0)
        idx_of_next_largest = get_idx_of_next_largest(next_cust, tills)

        if idx_of_next_largest >= 0:
            tills.insert(idx_of_next_largest, next_cust)
        else:
            tills.append(next_cust)

    return time


def elapse_times(tills, time):
    new_tills = []
    for till in tills:
        till -= time
        if till <= 0:
            continue
        new_tills.append(till)
    return new_tills


def get_idx_of_next_largest(num, lst):
    for idx, ele in enumerate(lst):
        if ele > num:
            return idx
    return -1


#print(queue_time([5, 3, 4], 1)) # 12
#print(queue_time([10, 2, 3, 3], 2)) # 10
#print(queue_time([2, 3, 10], 2)) # 12
#print(queue_time([], 1)) # 0
#print(queue_time([2], 5)) # 2

print(queue_time([1,2,3,4,5], 100)) # 5: time should be the longest in customers
print(queue_time([2,2,3,3,4,4], 2)) # 9: what to do when all tills go to zero

# print(queue_time([9, 46, 48, 29, 39, 5, 40, 17, 10, 26, 33, 19, 28, 21], 4)) # 102

"""
[10, 2, 3, 3], 2

customers: [3, 3]
time: 0
tills: [2, 10]

customers: [3, 3]
time: 2
tills: [8]

#####
customers: [3]
time: 2
tills: [3, 8]

customers: [3]
time: 5
tills: [5]

customers: []
time: 5
tills: [3, 5]

customers: []
time: 8
tills: [2]

customers: []
time: 8
tills: [2]

customers: []
time: 10
tills: []
"""
