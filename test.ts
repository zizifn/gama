// 创建一个基金经理 manger, 包含 fund list, 姓名和年纪

class Manger {
  fundList: Fund[] = [];
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 创建一个 producttype 类，包含产品类型名称，产品类型代码，产品类型规模
class ProductType {
  name: string;
  code: string;
  scale: number;
  constructor(name: string, code: string, scale: number) {
    this.name = name;
    this.code = code;
    this.scale = scale;
  }
}

// 创建一个 Fund 类，包含基金名称，基金代码，基金规模，基金经理
class Fund {
  name: string;
  code: string;
  scale: number;
  manager: Manger;
  constructor(name: string, code: string, scale: number, manager: Manger) {
    this.name = name;
    this.code = code;
    this.scale = scale;
    this.manager = manager;
  }
}
