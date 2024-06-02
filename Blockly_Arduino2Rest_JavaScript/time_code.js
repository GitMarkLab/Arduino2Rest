//python.pythonGenerator.forBlock['time_init'] = function(block, generator) {
javascript.javascriptGenerator.forBlock['time_init'] = function(block, generator) {

var code = `
var x = 1;
var y = null; // To keep under proper scope

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}`;

// python var code = `import time\n`;

  return code;
};

//python.pythonGenerator.forBlock['time_sleep'] = function(block, generator) {
javascript.javascriptGenerator.forBlock['time_sleep'] = function(block, generator) {
    var value_sleep_ms_in = generator.valueToCode(block, 'sleep_ms_in', python.Order.ATOMIC);

    //value_sleep_ms_in = value_sleep_ms_in/1000;

    //var code = 'sleep( ${value__wait} )'; 
    var code = `\n sleep (${value_sleep_ms_in});\n`;

    // pythonvar code = `time.sleep(${value_sleep_ms_in})\n`;

    return code;
};
