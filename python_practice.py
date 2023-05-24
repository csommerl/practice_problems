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
    tills = sorted([customers.pop(0) for i in range(num_of_tills)])

    while tills:
        elapsed_time = tills.pop(0)
        while tills and tills[0] == elapsed_time:
            tills.pop()
        time += elapsed_time
        tills = [customer_time - elapsed_time for customer_time in tills]

        if customers:
            next_cust = customers.pop(0)
            idx_of_next_largest = get_idx_of_next_largest(next_cust, customers)
            if idx_of_next_largest >= 0:
                tills.insert(idx_of_next_largest, next_cust)
            else:
                tills.append(next_cust)

    return time


def get_idx_of_next_largest(num, lst):
    for idx, ele in enumerate(lst):
        if ele > num:
            return idx
    return -1


# print(queue_time([5, 3, 4], 1)) # 12
print(queue_time([10, 2, 3, 3], 2)) # 10
# print(queue_time([2, 3, 10], 2)) # 12

"""
[2, 3, 10], 2
till 1: 2
till 2: 3

find 
"""
