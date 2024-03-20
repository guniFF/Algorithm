N,r,c=map(int,input().split())

cnt=0

def solution(size, start_x,end_x,start_y,end_y):

    global cnt
    if size==2:
        for i in range(start_x,end_x):
            for j in range(start_y,end_y):
                if i==r and j==c :
                    print(cnt)
                    return
                else:
                    cnt=cnt+1
    else:

        half_x=start_x+size//2
        half_y = start_y+size // 2

        if start_x<= r <half_x and start_y<= c <half_y:
            solution(size//2,start_x,half_x,start_y,half_y)
        else:
            cnt=cnt+(size**2)//4

        if start_x<= r <half_x and half_y<= c <end_y:
            solution(size // 2, start_x, half_x, half_y, end_y)
        else:
            cnt=cnt+(size**2)//4

        if half_x<= r <end_x and start_y<= c <half_y:
            solution(size // 2, half_x, end_x, start_y,half_y)
        else:
            cnt=cnt+(size**2)//4

        if half_x<= r <end_x and half_y<= c < end_y:

            solution(size // 2, half_x, end_x, half_y, end_y)
        else:
            cnt=cnt+(size**2)//4

solution(2**N,0,2**N,0,2**N)