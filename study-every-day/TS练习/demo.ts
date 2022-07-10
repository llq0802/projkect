let asf: unknown;
let b: string = asf as string;
let hd: unknown;
hd = "houdunren";
hd = 100;
//在使用时，TS不知道是什么类型，所以需要使用类型断言进行告之
let c = (hd as number) + 20;
