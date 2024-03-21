N=int(input().strip())
advt=input().strip()
min_pi=0

test_pi=[0 for _ in range(N)]

j=0
i=1
while i<N:
   
    if advt[i] == advt[j]:

        test_pi[i] = j + 1
        i = i + 1
        j = j + 1

    else:
       if j==0:

           i = i + 1

       else:
           j=test_pi[j-1]
now_max_pi=test_pi[-1]


print(N-now_max_pi)