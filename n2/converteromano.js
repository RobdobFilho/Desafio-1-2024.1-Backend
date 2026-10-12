function convertToRoman(num) {
  const romanMatrix = [
    [1000, 'M'],
    [900,  'CM'],
    [500,  'D'],
    [400,  'CD'],
    [100,  'C'],
    [90,   'XC'],
    [50,   'L'],
    [40,   'XL'],
    [10,   'X'],
    [9,    'IX'],
    [5,    'V'],
    [4,    'IV'],
    [1,    'I']
  ];

  let result = '';

  for (let i = 0; i < romanMatrix.length; i++) {
    const [value, symbol] = romanMatrix[i];
    
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

convertToRoman(36);