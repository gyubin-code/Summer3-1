---
permalink: /hello3/
---

## 개발 환경
Host(Linux) 에서 커널 소스를 받아 qemu에 펌웨어와 합쳐서 qemu로 부팅
Kernel Version : 5.11.5

## 모듈 작동 방식
Makefile 이용하여 빌드하면 .ko 파일이 생기고 이걸 qemu에 ssh(scp)를 통해서 전송후에 insmod로 적재시켜 생성한 모듈을 테스트해본다.

## 작성한 코드
mymodule.c
```c
#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>


static int hello_init(void)
{
    printk(KERN_ALERT "Test\n");
    return 0;
}

static void hello_exit(void)
{
    printk(KERN_ALERT "Test exit\n");
}

module_init(hello_init);
module_exit(hello_exit);

MODULE_LICENSE("GPL");
MODULE_AUTHOR("사용자이름");
MODULE_DESCRIPTION("Hello world for Linux Kernel module.");
```
Makefile
```bash
obj-m := mymodule.o
all:
    make -C ~/linux-5.11.5/ M=$(PWD) modules
clean:
    make -C ~/linux-5.11.5/ M=$(PWD) clean
```
여기에서 커널 소스를 받아서 qemu에 올려서 테스트하기 때문에 빌드할 때 사용하는 주소를 지정을 해주어야지 커널 버전이 안맞는다는 오류 없이 적재시킬 수 있다.

## 모듈 적재
Host에서 :
```bash
$ scp -P 2222 ./mymodule.ko 사용자이름@localhost:~/
```

Guest에서 :
```bash
$ sudo insmod mymodule.ko
```

## 결과
```bash
$ sudo insmod mymodule.ko 
[  334.179996] Test
```