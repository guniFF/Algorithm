K,N=map(int,input().split())
K_lan=[int(input()) for _ in range(K)]
max_len=max(K_lan)
min_len=1

while min_len<max_len:

    test_len = (max_len + min_len) // 2+1
    num_lan=0
    for lan in K_lan:
        num_lan=num_lan+lan//test_len
    if num_lan>=N:
        min_len = test_len

    else:
        max_len=test_len-1


print(min_len)