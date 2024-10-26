#include<stdbool.h>
#include<stdio.h>
#include<ctype.h>
#include<string.h>
int st_check(char *str)
{
    int i=0,k=0,l=0,sum=0,y=0;
    // if(!strlen(str)>=6)
    // return false;
    for(int j=0;j<strlen(str);j++)
    {
        if(isdigit(*(str+j)))
        k=1;
        else if(strchr("!@#$ ^&*()-+",*(str+j))!=NULL || *(str+j) == '%' )
        i=1;
        else if(isupper(*(str+j)))
        l=1;
        else if( islower(*(str+j)))
        y=1;
    }
    // printf("%d%d%d\n",i,l,k);
    if(!l) sum++;
    if(!y) sum++;
    if(!i) sum++;
    if(!k) sum++;
    if(strlen(str) < 6 )
    sum+=6-strlen(str);
    return sum;
}
int main()
{
    char str[20];
    scanf("%s",str);
    printf("%d",st_check(str));
}
