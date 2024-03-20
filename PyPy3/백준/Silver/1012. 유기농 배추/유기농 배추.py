d_x=[0,0,1,-1]
d_y=[1,-1,0,0]

def solution(field,x,y):
    field[x][y]=0
    for i in range(4):
        next_x=x+d_x[i]
        next_y=y+d_y[i]
        if next_x>=0 and next_x<N and next_y>=0 and next_y<M and field[next_x][next_y]:
            solution(field, next_x, next_y)

for T in range(int(input())):
    N,M,K=map(int,input().split())
    cabbage_field=[[0 for m in range(M)] for n in range(N)]
    for k in range(K):
        temp_x,temp_y=map(int,input().split())
        cabbage_field[temp_x][temp_y]=1
    needs_catap=0

    for i in range(N):
        for j in range(M):
            if cabbage_field[i][j]:
                needs_catap=needs_catap+1
                solution(cabbage_field,i,j)
    print(needs_catap)

