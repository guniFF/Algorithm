N=int(input())
given_lst=[int(input()) for _ in range(N)]
stack=[1]
my_list=[]
result=['+']
num=2
idx_pre=0

while num<N+2:
    if stack and stack[-1]==given_lst[idx_pre]:
        my_list.append(stack.pop())
        result.append('-')
        idx_pre=idx_pre+1
    else:
        stack.append(num)
        num=num+1
        result.append('+')


if len(my_list)==N:
    result.pop()
    print("\n".join(result))
else:
    print("NO")