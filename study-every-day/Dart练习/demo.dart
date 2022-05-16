// 主函数
void main(List<String> args) {
  dynamic im = 789;
  int count = 0;
  String str = 'llq';

  List<dynamic> arr = [];
  double sum = 12.5;
  var message1 = '''
哈哈哈
呵呵呵
嘿嘿嘿''';
  const SIZE = 1024;
  final con = 123;
  var list = [];
  list.add('999');
  print(list.contains('999'));
  print(list[0]);
  // List根据index删除元素
  list.removeAt(0);
  print(sum.runtimeType);
  print('hello world');
  print('${SIZE} $con $arr $list ${list.length}');
  fn();
  strAndNum();
}

// 函数定义
void fn() {
  final time = DateTime.now();
  print('fn $time');
}

// 字符串与数字相互转化
void strAndNum() {
// 1.字符串转数字
  var one = int.parse('111');
  var two = double.parse('12.22');
  print('${one} ${one.runtimeType}'); // 111 int
  print('${two} ${two.runtimeType}'); // 12.22 double

  var num1 = 123;
  var num2 = 123.456;

  var num1Str = num1.toString();
  var num2Str = num2.toString();
  var num2StrD = num2.toStringAsFixed(2); // 保留两位小数
  print('$num2StrD ${num2StrD.runtimeType}');
}

// 注意: Dart中不能判断非0即真, 或者非空即真

Map<String, Object> infoMap2 = {'height': 1.88, 'address': '北京市'};
