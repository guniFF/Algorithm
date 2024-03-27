for T in range(int(input())):
    N,M=map(int, input().split())
    list_doc=[i for i in range(N)]
    importance=list(map(int,input().split()))
    sorted_imp=sorted(importance,reverse=True)
    idx_imp=0

    result=[]
    while list_doc:
        if importance[0]==sorted_imp[idx_imp]:
            result.append(list_doc.pop(0))
            importance.pop(0)
            idx_imp=idx_imp+1



        else:
            last_doc=list_doc.pop(0)
            last_imp=importance.pop(0)
            list_doc=list_doc+[last_doc]
            importance=importance+[last_imp]

    print(result.index(M)+1)