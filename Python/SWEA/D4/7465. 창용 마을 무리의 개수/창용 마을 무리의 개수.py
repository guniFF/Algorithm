for T in range(int(input())):
    N,M=map(int,input().split())
    team_num=0
    visited=[False for n in range(N)]
    team_list=[[] for n in range(N)]

    for idx in range(M):
        p1,p2=map(int,input().split())

        team_list[p1-1].append(p2-1)
        team_list[p2-1].append(p1-1)

    for i in range(N):
        if not visited[i]:
            team_num=team_num+1
            now_node=[i]
            while now_node:
                next_node=[]
                for node in now_node:
                    if not visited[node]:
                        visited[node]=True
                        next_node=next_node+team_list[node]
                now_node=next_node


    print(f'#{T + 1}',team_num)
