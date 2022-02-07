  /*
    有一个简易内存池。内存按照大小粒度分类，每个粒度有若干个可用内存资源。用户会进行一系列内存申请，需要按需分配内存池中的资源，返回申请结果成功失败列表，分配规则如下
    1.分配的内存要大于等于内存的申请量，存在满足需求的内存就必须分配，优先分配粒度小的，但内存不能拆分使用
    2.需要按申请顺序分配，先申请的先分配，
    3.有可用内存分配则申请结果为true，没有可用则返回false
    注释：不考虑内存释放

    示例一：
    输入：
    64:2,128:1,32:4,1:128
    50,36,64,128,127
    输出：
    true,true,true,false,false

    说明:
    内存池资源包含：64k共2个、128k共1个、32k共4个、1k共128个的内存资源
    针对50,36,64,128,127的内存申请序列，
    分配的内存依次是，64,64,128,null,null
    第三次申请内存时已经将128分配出去，因此输出的结果是
    true,true,true,false,false
   */

   #include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>
#include <ctype.h>
 
#define STR_MAX_LEN 10000
#define MEMORY_MAX_COUNT 1024
 
typedef struct{
    char s[10];
    int size;
    int cnt;
}DataInfo;
 
int cmp(const void *a, const void *b)
{
    DataInfo * x = (DataInfo *)a;
    DataInfo * y = (DataInfo *)b;
    return x->size - y->size;
}
 
void strSqit(DataInfo memInfo[MEMORY_MAX_COUNT], int num)
{
    char tmp[2][10];
    for(int k = 0; k < num; k++) {
        int i = 0;
        char *p1 = NULL;
        p1 = strtok(memInfo[k].s,":");
        while(p1 != NULL){
            strcpy(tmp[i], p1); 
            i++;
            p1 = strtok(NULL, ","); 
        }
        memInfo[k].size = atoi(tmp[0]);
        memInfo[k].cnt = atoi(tmp[1]);
    }
}
 
int main()
{
    char str1[STR_MAX_LEN];
    char str2[STR_MAX_LEN];
    int list[MEMORY_MAX_COUNT];
    int i = 0;
    int j = 0;
 
    DataInfo memInfo[MEMORY_MAX_COUNT];
    memset(memInfo,0,sizeof(memInfo));
 
    gets(str1);
    gets(str2);
 
    char *p1 = NULL;
    char *p2 = NULL;
 
    p1 = strtok(str1, ",");
    while (p1 != NULL) {
        strcpy(memInfo[i].s, p1); 
        i++;
        p1 = strtok(NULL, ","); 
    }
 
    strSqit(memInfo, i);
 
    p2 = strtok(str2, ",");
    while (p2 != NULL) {
        list[j] = atoi(p2); 
        j++;
        p2 = strtok(NULL, ","); 
    }
 
    qsort(memInfo, i, sizeof(DataInfo), cmp);
    /*
    for(int m = 0; m < i; m++) {
        printf("%d %d\n" ,memInfo[m].size, memInfo[m].cnt);
    }
    */
    for (int m = 0; m<j; m++) {
        int flag = 0;
        for (int n = 0; n<i;n++) {
            if (memInfo[n].cnt < 1){
                continue;
            }
            if (memInfo[n].size > list[m]){
                flag = 1;
                memInfo[n].cnt--;
                break;
            }
        }
        if (flag == 1) {
            printf("ture");
        } else {
             printf("false");
        }
        if ( m < j - 1) {
             printf(",");
        } else {
            printf("\n"); 
        }
    }
    return 0;
}
