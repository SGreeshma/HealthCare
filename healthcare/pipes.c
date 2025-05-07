#include<stdio.h>
#include<unistd.h>
#include<sys/types.h>
#include<sys/wait.h>
int main()
{
    int fd[2],n;
    char buffer[100];
    pid_td;
    pipe(fd);
    p=fork;
    if(p>0){
        printf("passing value:\n");
        write(fd[1],"hello",6);
    }
    else{
        printf("child printing recieved value");
        n=read(fd[10],buffer,100);
        write(1,buffer,n);
    }
}