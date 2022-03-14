# 在一个地图中(地图由n*n个区域组成），有部分区域被感染病菌。感染区域每天都会把周围（上下左右）的4个区域感染。

def spread_time(string):
    string_list=string.split(",")
    length = len(string_list)
    if string_list.count("1") == length or string_list.count("0") ==length:
        return -1
    slice = int(pow(length,0.5))
    rank = [string_list[i*slice:(i+1)*slice] for i in range(slice)]
    rank1 =[string_list[i*slice:(i+1)*slice] for i in range(slice)]
    def spread(rank,rank1):
        for i in range(len(rank)):
            for j in range(len(rank)):
                if rank[i][j] == "1":
                    continue
                if i > 0:
                    if rank1[i - 1][j] == "1":
                        rank[i][j] = "1"
                if j > 0:
                    if rank1[i][j - 1] == "1":
                        rank[i][j] = "1"
                if 0 < j < len(rank) - 1:
                    if rank1[i][j + 1] == "1":
                        rank[i][j] = "1"
                if 0 < i < len(rank) - 1:
                    if rank1[i + 1][j] == "1":
                        rank[i][j] = "1"
    days = 0
    while True:
        spread(rank,rank1)
        days+=1
        if [j for i in rank for j in i].count("1") == length:
            return days
        temp = rank
        rank = rank1
        rank1 = temp

if __name__ == '__main__':
    print(spread_time("1,0,1,0,0,0,1,0,1"))
    print(spread_time("1,1,1,1,1,1,1,1,1"))
