pre_num=100
target_str=input()
target_num=int(target_str)
busted_num=int(input())
if busted_num==0:
    print(min(len(str(target_str)),abs(100-target_num)))
else:
    remote_controller=[ True for _ in range(10)]
    result=abs(100-target_num)
    for i in map(int,input().split()):
        remote_controller[i]=False

    for start in range(999999):
        loop_1=1
        for num in str(start):
            if not remote_controller[int(num)]:
                loop_1=0
                break
        if loop_1:
            if result>abs(target_num-start)+len(str(start)):
                result=abs(target_num-start)+len(str(start))
        if result==0:
            break

    # print(target_num,busted_num)
    # print(remote_controller)
    print(result)