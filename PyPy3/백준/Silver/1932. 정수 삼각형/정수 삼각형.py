N=int(input())
cost_list=[list(map(int,input().split())) for _ in range(N)]
for i in range(1,N):

    for j in range(i+1):
        if j==0:
            cost_list[i][j]=cost_list[i][j]+cost_list[i-1][0]
        elif j==i:
            cost_list[i][j] = cost_list[i][j] + cost_list[i - 1][-1]
        else:
            cost_list[i][j] = cost_list[i][j] + max(cost_list[i - 1][j],cost_list[i - 1][j-1])



print(max(cost_list[-1]))