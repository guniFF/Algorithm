str_op=input()
op_list='()+-*/'
op_rank={'+':1,'-':1,"*":2,"/":2}
result=[]
stack=[]

for str in str_op:
    if not str in op_list:
        result.append(str)
    else:
        if str=='(':
            stack.append(str)
        elif str=='+' or str=='-':
            while stack and not(stack[-1]=='('):
                result.append(stack.pop())
            stack.append(str)
        elif str=='*' or str=='/':
            while stack and not(stack[-1]=='(') and (stack[-1]=='/' or stack[-1]=='*'):
                result.append(stack.pop())
            stack.append(str)
        elif str==')':
            while stack and not stack[-1] == '(':
                result.append(stack.pop())
            stack.pop()
print(''.join(result+stack[::-1]))
