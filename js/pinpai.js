// JavaScript Document
  // 省份数组
      var provinceArr = ['上海', '江苏', '河北'];
      // 城市数组
      var cityArr = [
        ['上海市'],
        ['苏州市', '南京市', '扬州市'],
        ['石家庄', '秦皇岛', '张家口']
       ];
      // 区域数组
      var countryArr = [
        [
          ['黄浦区', '静安区', '长宁区', '浦东区']
        ], [
          ['虎丘区', '吴中区', '相城区', '姑苏区', '吴江区'],
          ['玄武区', '秦淮区', '建邺区', '鼓楼区', '浦口区'],
          ['邗江区', '广陵区', '江都区']
        ], [
          ['长安区', '桥西区', '新华区', '井陉矿区'],
          ['海港区', '山海关区', '北戴河区', '抚宁区'],
          ['桥东区', '桥西区', '宣化区', '下花园区']
        ]
      ];
      function createOption(obj, data) {
        for (var i in data) {
          var op = new Option(data[i], i);   // 创建下拉列表中的option选项
          obj.options.add(op);               // 将选项添加到下拉列表中
        }
      }
      var province = document.getElementById('province');
      createOption(province, provinceArr);
      var city = document.getElementById('city');
      province.onchange = function() {
        city.options.length = 0;        // 清空city下的原有<option>
        createOption(city, cityArr[province.value]);
        if (province.value >= 0) {
          city.onchange();              // 自动添加 城市对应区域 下拉列表  
        } else {
          country.options.length = 0;   // 清空country下的原有<option>
        }
      };
      var country = document.getElementById('country');
      city.onchange = function() {
        country.options.length = 0;     // 清空country下的所有原有<option>
        createOption(country, countryArr[province.value][city.value]);
      };