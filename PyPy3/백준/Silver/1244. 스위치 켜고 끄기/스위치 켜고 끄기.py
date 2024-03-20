def solution(sex,num):
    if sex==1:
        for i in range(num,N+1,num):
            switches[i-1]=1-switches[i-1]
    else:
        m_p=num-1
        term=[m_p,m_p+1]
        for j in range(N):
            if 0<=m_p-j<N and 0<=m_p+j<N :
                temp_switches=switches[m_p-j:m_p+j+1]
                if temp_switches==temp_switches[::-1]:
                    term=[m_p-j,m_p+j+1]
                else:
                    break
            else:
                break
        for idx in range(term[0],term[1]):
            switches[idx]=1-switches[idx]

N=int(input())
switches=list(map(int,input().split()))
M=int(input())

for try_t in range(M):
    sex_temp,num_temp=map(int,input().split())
    solution(sex_temp,num_temp)

result=[[]for _ in range(5)]
for switch in range(N):
    result[switch//20].append(str(switches[switch]))


for out in result:
    if out:
        print(' '.join(out))
