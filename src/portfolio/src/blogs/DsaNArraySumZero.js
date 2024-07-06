function DsaNArraySumZero(){
    return (<>
    <p>I was interviewed for one of the teams where requirement was for AI engineer, they gave me this tricky problem. I want to share this with everyone so they don't end up failing interview.</p>
    <h2>Problem: You are given an integer N, find an array of N numbers such that all the values are unique and sums up to 0.</h2>
    <p>Examples are below:</p>
    <p>{'[-1,-8,3,6]'} equals 0</p>
    <p>{'[-3,-6,1,8]'} equals 0</p>
    <h2>Approach : It does not specify any specific number except they must be unique, hence they can be random. To finally sum up to zero we only care about a number or few numbers that sums up to zero.</h2>
    <h2>Key Topics : Basic programming, Hashsets</h2>
    <h2>Code : </h2>
    <br/>
    <code class="code-container"><pre>{`import random

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


`}
        </pre>
    </code>
    </>)
}

export default DsaNArraySumZero