def solution(depth,acc,maxValue):
    if acc>=maxValue:
        global result
        if acc-maxValue<result:
            result=acc-maxValue
    elif depth<N:
        solution(depth+1,acc+height_lsit[depth],maxValue)
        solution(depth+1,acc,maxValue)


for T in range(int(input())):
    N,B=map(int,input().split())
    height_lsit=list(map(int,input().split()))
    result=float('inf')

    solution(0,0,B)

    print(f'#{T+1}',result)