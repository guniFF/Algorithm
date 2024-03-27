temp=input().strip()
N=len(temp)
last_pi=0
for k in range(N):

    test_pi=[0 for _ in range(N)]

    j=k
    i=k+1
    while i<N:
        if temp[i]==temp[j]:

            test_pi[i] = j+1-k
            i = i + 1
            j = j + 1



        else:
            if j==k:

      
                i = i + 1

            else:
                j=test_pi[j-1]+k

    max_pi=max(test_pi)

    if max_pi>last_pi:
        last_pi=max_pi

print(last_pi)