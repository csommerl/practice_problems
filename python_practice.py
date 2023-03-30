def nb_year(pop, percent_growth, newly_moved, target):
    years = 0

    while pop < target:
        years += 1
        pop += int((percent_growth / 100) * pop) + newly_moved

    return years

print(nb_year(1500, 5, 100, 5000)) # 15
print(nb_year(1500000, 2.5, 10000, 2000000)) # 10