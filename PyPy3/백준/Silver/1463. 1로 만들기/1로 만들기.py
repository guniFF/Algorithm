N=int(input())
if N==1:
    print(0)
elif N==2 or N==3:
    print(1)
else:
    list_num=[0 for _ in range(N+1)]
    list_num[2]=1
    list_num[3]=1

    for i in range(4,N+1):
        if i%2==0 and i%3==0:
            list_num[i]=min(list_num[i//2],list_num[i//3],list_num[i-1])+1
        elif i%2==0 and i%3!=0:
            list_num[i]=min(list_num[i//2],list_num[i-1])+1
        elif i%2!=0 and i%3==0:
            list_num[i] = min(list_num[i // 3], list_num[i - 1]) + 1
        else:
            list_num[i] = list_num[i - 1] + 1

    print(list_num[-1])