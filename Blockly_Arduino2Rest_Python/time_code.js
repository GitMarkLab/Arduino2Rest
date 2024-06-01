python.pythonGenerator.forBlock['time_init'] = function(block, generator) {
  // TODO: Assemble python into code variable.
  //var code = 'import time';



var code = `import time\n`;


  return code;
};

python.pythonGenerator.forBlock['time_sleep'] = function(block, generator) {
  var value_sleep_ms_in = generator.valueToCode(block, 'sleep_ms_in', python.Order.ATOMIC);
  // TODO: Assemble python into code variable.
value_sleep_ms_in = value_sleep_ms_in/1000;
  var code = `time.sleep(${value_sleep_ms_in})\n`;
  return code;
};
