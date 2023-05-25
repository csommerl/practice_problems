"""
https://www.codewars.com/kata/57b06f90e298a7b53d000a86/train/python

input:
    customers list: ordered list of positive integers, each representing how long it will take to service a customer
    n: integer, representing how many tills there are
output:
    time: integer, representing the total amount of time required for all customers

rules:
    there is only one queue for all the customers
    the order of customers should never change
    when a till becomes free, the first in line replaces it
    
Overall Algorithm:
    - Create time = 0
    - Create tills variable.
        - if customers, populate_tills(tills, n, customers)
    - While tills or customers:
        - if customers, populate_tills(tills, n, customers)
            - num_of_next_custs = n - length of tills
            - If customers length > num_of_next_custs,
                pop num_of_next_custs from customers, and append to tills.
            - Else: append all remaining customers to tills.
            - Sort tills.
        - depopulate_tills(tills, n)
            - Get elapsed_time = first element of tills. **** What to do when it's empty?
            - Increment time with elapsed_time.
            - While tills and tills[0] == elapsed_time, pop first element.
            - Subtract elapsed_time from every element of tills.
    - Return time.
"""


def queue_time(queue, total_tills):
    time = 0

    if not queue:
        return time

    tills = get_next_custs(queue, total_tills)
    tills.sort()

    while queue or tills:
        elapsed_time = tills.pop(0)
        time += elapsed_time

        while tills and (tills[0] == elapsed_time):
            tills.pop(0)

        for i in range(len(tills)):
            tills[i] -= elapsed_time

        if queue:
            populate_tills(queue, tills, total_tills)

    return time


def get_next_custs(cust_list, empty_till_num):
    next_cust_list = []

    num_of_next_custs = min(empty_till_num, len(cust_list))

    for i in range(num_of_next_custs):
        next_cust = cust_list.pop(0)
        next_cust_list.append(next_cust)

    return next_cust_list


def populate_tills(cust_list, till_list, total_till_num):
    occupied_tills = len(till_list)
    empty_tills = total_till_num - occupied_tills

    next_custs = get_next_custs(cust_list, empty_tills)

    till_list.extend(next_custs)
    till_list.sort()


"""
c = [15, 12, 4, 3]
t = [2]
n = 3
populate_tills(c, t, n)
print(c, t, n)
"""


print(queue_time([5, 3, 4], 1)) # 12
print(queue_time([10, 2, 3, 3], 2)) # 10
print(queue_time([2, 3, 10], 2)) # 12
# print(queue_time([], 1)) # 0
print(queue_time([2], 5)) # 2
print(queue_time([1,2,3,4,5], 100)) # 5: time should be the longest in customers
print(queue_time([2,2,3,3,4,4], 2)) # 9: what to do when all tills go to zero
print(queue_time([9, 46, 48, 29, 39, 5, 40, 17, 10, 26, 33, 19, 28, 21], 4)) # 102
