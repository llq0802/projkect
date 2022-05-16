void main(List<String> args) {
  //Map
  Map<String, Object> infoMap1 = {
    'name': 'why',
    'age': 24,
  };
  // 获取集合的长度
  print(infoMap1.length);
  print(infoMap1['name']); // why

// 2.获取所有的entries
  print(
      '${infoMap1.entries} ${infoMap1.entries.runtimeType}'); // (MapEntry(name: why), MapEntry(age: 18)) MappedIterable<String, MapEntry<String, Object>>

// 3.获取所有的keys
  print(
      '${List.from(infoMap1.keys)} ${infoMap1.keys.runtimeType}'); // (name, age) _CompactIterable<String>

// 4.获取所有的values
  print(
      '${infoMap1.values} ${infoMap1.values.runtimeType}'); // (why, 18) _CompactIterable<Object>

// 5.判断是否包含某个key或者value
  print(
      '${infoMap1.containsKey('age')} ${infoMap1.containsValue(18)}'); // true true

// 6.根据key删除元素
  infoMap1.remove('age');
  print('${infoMap1}'); // {name: why}
  sum(1, 3);
}

num sum(num num1, num num2) {
  return num1 + num2;
}
