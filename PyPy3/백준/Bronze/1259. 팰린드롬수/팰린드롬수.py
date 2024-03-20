while 1:
    str_input=input()
    if str_input=='0':
        break
    if str_input==str_input[::-1]:
        print('yes')
    else:
        print('no')