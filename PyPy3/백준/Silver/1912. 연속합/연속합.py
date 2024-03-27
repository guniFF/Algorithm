N=int(input())
num_lst=list(map(int,input().split()))
max_ = num_lst[0]
now_value=0
for i in range(N):
    now_value=now_value+num_lst[i]
    if now_value > max_:
            max_=now_value
    if now_value<0:
        now_value=0

print(max_)