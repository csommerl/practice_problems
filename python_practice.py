"""
"""

def multiplication_table(size):
    table = []

    for i in range(1, size + 1):
        row = []

        for j in range(1, size + 1):
            row.append(i * j)

        table.append(row)

    return table

print(multiplication_table(3))
# [[1,2,3],[2,4,6],[3,6,9]]
