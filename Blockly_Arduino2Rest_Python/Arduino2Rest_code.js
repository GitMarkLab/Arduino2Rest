python.pythonGenerator.forBlock['rest_init'] = function(block, generator) {

    var code = 
    
`from Class_Arduino2Rest import Arduino2Rest\n

def bool_to_string(value):
    if value:
        return True
    else:
        return False\n

# Blockly liefert True / False --> der Arduino benötigt aber einen string
def bool_to_int(value):
    if value:
        return 1
    else:
        return 0\n`;

    return code;
};

python.pythonGenerator.forBlock['rest_init_pyimport'] = function(block, generator) {
  var field_field_name = block.getFieldValue('field_NAME');
  var value_name_in = generator.valueToCode(block, 'NAME_in', python.Order.ATOMIC);

    var code = 
    
`
import sys
import os

# Pfad zur Bibliothek hinzufügen
library_path = ${value_name_in}
if library_path not in sys.path:
    sys.path.append(library_path)

# Bibliothek importieren
from Class_Arduino2Rest import Arduino2Rest

def bool_to_string(value):
    if value:
        return True
    else:
        return False\n

# Blockly liefert True / False --> der Arduino benötigt aber einen string
def bool_to_int(value):
    if value:
        return 1
    else:
        return 0\n`;

  return code;
};


python.pythonGenerator.forBlock['arduino2rest'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in', python.Order.ATOMIC);
  var field_ip_name = block.getFieldValue('IP_NAME');
  var value_ip_in = generator.valueToCode(block, 'ip_in', python.Order.ATOMIC);

    // arduino = Arduino2Rest("192.168.3.12")

    var _obj = value_obj_in.replace(/^'|'$/g, '');
    var _ip = value_ip_in.replace(/^'|'$/g, '');

    var code = 
    `${_obj} = Arduino2Rest("${_ip}")   \n`;

    return code;
};

python.pythonGenerator.forBlock['set_servo_position'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in', python.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in', python.Order.ATOMIC);
  var field_angle_name = block.getFieldValue('Angle_NAME');
  var value_angle_in = generator.valueToCode(block, 'angle_in', python.Order.ATOMIC);
  
// arduino.set_servo_position(9, 150)

  var _obj = value_obj_in.replace(/^'|'$/g, '');

  var code = 
//` ${_obj} = Arduino2Rest("${_ip}")   \n` ;
`${_obj}.set_servo_position(${value_pin_in}, ${value_angle_in})   \n` ;
  return code;
};

python.pythonGenerator.forBlock['set_analog'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in', python.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in', python.Order.ATOMIC);
  var field_analog_name = block.getFieldValue('Value_NAME');
  var value_analog_in = generator.valueToCode(block, 'value_in', python.Order.ATOMIC);
  
// arduino.set_servo_position(9, 150)

  var _obj = value_obj_in.replace(/^'|'$/g, '');

  var code = 
//` ${_obj} = Arduino2Rest("${_ip}")   \n` ;
`${_obj}.set_analog(${value_pin_in}, ${value_analog_in})\n` ;
  return code;
};

python.pythonGenerator.forBlock['set_digital'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in', python.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in', python.Order.ATOMIC);
  var field_analog_name = block.getFieldValue('Value_NAME');
  var value_analog_in = generator.valueToCode(block, 'value_in', python.Order.ATOMIC);
  
// arduino.set_servo_position(9, 150)

  var _obj = value_obj_in.replace(/^'|'$/g, '');

  var code = 

`${_obj}.set_analog(${value_pin_in}, bool_to_int(${value_analog_in}))\n`;

  return code;
};


python.pythonGenerator.forBlock['get_digital'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in', python.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in', python.Order.ATOMIC);

   var _obj = value_obj_in.replace(/^'|'$/g, '');

  var code = `(bool_to_string(${_obj}.get_digital(${value_pin_in})))`


  return [code, Blockly.Python.ORDER_ATOMIC];
};


python.pythonGenerator.forBlock['get_analog'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in', python.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in', python.Order.ATOMIC);

   var _obj = value_obj_in.replace(/^'|'$/g, '');


  var code = 
`(${_obj}.get_analog(${value_pin_in}))   \n` ;

  return [code, Blockly.Python.ORDER_ATOMIC];
};

