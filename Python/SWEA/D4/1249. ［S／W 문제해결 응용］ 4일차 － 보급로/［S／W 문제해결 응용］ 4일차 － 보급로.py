import heapq

dx=[0,0,1,-1]
dy=[1,-1,0,0]

for T in range(int(input())):
    N=int(input())
    fieldMountain=[input() for n1 in range(N)]

    dp=[[float("inf") for n2 in range(N)] for n3 in range(N)]
    dp[0][0]=0
    nowNode=[(0,0,0)]

    while nowNode:
        acc,x,y=heapq.heappop(nowNode)

        for d in range(4):
            next_x=x+dx[d]
            next_y=y+dy[d]
            if 0<=next_x<N and 0<=next_y<N:
                accNext=int(fieldMountain[next_x][next_y])

                if acc+accNext<dp[next_x][next_y]:
                    dp[next_x][next_y]=acc+accNext
                    heapq.heappush(nowNode,(acc+accNext,next_x,next_y))

    print(f'#{T+1}',dp[N-1][N-1])
