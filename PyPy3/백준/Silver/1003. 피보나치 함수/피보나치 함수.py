for T in range(int(input())):
    N=int(input())

    fbnc=[[1,0],[0,1]]

    if N>1:
        for i in range(2,N+1):
            fbnc.append([fbnc[i-2][0]+fbnc[i-1][0],fbnc[i-2][1]+fbnc[i-1][1]])

    print(' '.join(map(str,fbnc[N])))