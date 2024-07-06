import random

class Solution:
    def unique_n_array_sum_zero(self, n):
        remain_n = n
        list_arr = []

        while remain_n > 1:
            random_el = random.randint(-n,n)
            while random_el in list_arr:
                random_el = random.randint(-n,n)
            list_arr.append(random_el)

            remain_n -= 1

        list_arr.append(-sum(list_arr))

        return list_arr




sol = Solution()

for i in range(2,50):
    if(sum(sol.unique_n_array_sum_zero(i)) == 0):
        print('Passed')
    else:
        print('Failed')


