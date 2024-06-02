
javascript.javascriptGenerator.forBlock['rest_init'] = function(block, generator) {
    var code_python = 
    
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

    var code_js = `\n`




const code = `


function restCall(ip, pin,type) {
    const url = 'http://' + ip + '/' + type + '-' + pin + '-value';
    //alert(url);

    var result = null;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // Synchronisierte Anfrage
    xhr.onload = function() {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log('Antwort vom Server:', data);
            result = data[type + '-' + pin + '-value'];
        } else {
            console.error('Fehler beim Senden der Anfrage:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        console.error('Fehler beim Senden der Anfrage');
    };
    xhr.send();
    
    return result;
};


function set_rest_value(_obj, value_pin_in, value_analog_in ,type) {

    // URL für die Anfrage erstellen
    url = 'http://' + _obj + '/set_analog?params=' + type +'-' + value_pin_in + '-' + value_analog_in;
    // alert(url)
    // Fetch-Anfrage senden
    fetch(url)
      .then(response => {
        // Überprüfen, ob die Antwort erfolgreich war
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // JSON-Daten aus der Antwort extrahieren und zurückgeben
        return response.json();
      })
      .then(data => {
        // Antwort vom Server in der Konsole ausgeben
        console.log('Antwort vom Server:', data);
      })
      .catch(error => {
        // Fehlerbehandlung für die Anfrage
        console.error('Fehler beim Senden der Anfrage:', error);
      });
 };


function bool2int(value_analog_in) {
    var tempval;
    if (value_analog_in === "true") {
        tempval = 1;
    } else {
        tempval = 0;
    }
    return tempval;
};



`;

    return code;
};








//python.pythonGenerator.forBlock['rest_init_pyimport'] = function(block, generator) {
javascript.javascriptGenerator.forBlock['rest_init_pyimport'] = function(block, generator) {
  var field_field_name = block.getFieldValue('field_NAME');
  var value_name_in = generator.valueToCode(block, 'NAME_in',  javascript.Order.ATOMIC);

    var code_python = 
    
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


    var code_js = `\n`
    return code_js;
};


//python.pythonGenerator.forBlock['arduino2rest'] = function(block, generator) {
javascript.javascriptGenerator.forBlock['arduino2rest'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in',  javascript.Order.ATOMIC);
  var field_ip_name = block.getFieldValue('IP_NAME');
  var value_ip_in = generator.valueToCode(block, 'ip_in',  javascript.Order.ATOMIC);

    // arduino = Arduino2Rest("192.168.3.12")

    var _obj = value_obj_in.replace(/^'|'$/g, '');
    var _ip = value_ip_in.replace(/^'|'$/g, '');
    var code_python =`${_obj} = Arduino2Rest("${_ip}")   \n`;

    // store ip with a specific variable name

    var code = `var ${_obj} = ${value_ip_in};\n`;

    var code_js = `\n`
    return code;
};

//python.pythonGenerator.forBlock['set_servo_position'] = function(block, generator) {
javascript.javascriptGenerator.forBlock['set_servo_position'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in',  javascript.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in',  javascript.Order.ATOMIC);
  var field_angle_name = block.getFieldValue('Angle_NAME');
  var value_angle_in = generator.valueToCode(block, 'angle_in',  javascript.Order.ATOMIC);
  
// arduino.set_servo_position(9, 150)

  var _obj = value_obj_in.replace(/^'|'$/g, '');

  var code = 
`
set_rest_value(${_obj},${value_pin_in}, ${value_angle_in} ,'s') ;\n;

`;

 return code;
};

javascript.javascriptGenerator.forBlock['set_analog'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in',  javascript.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in',  javascript.Order.ATOMIC);
  var field_analog_name = block.getFieldValue('Value_NAME');
  var value_analog_in = generator.valueToCode(block, 'value_in',  javascript.Order.ATOMIC);
  
  var _obj = value_obj_in.replace(/^'|'$/g, '');

  var code = 
`
set_rest_value(${_obj},${value_pin_in}, ${value_analog_in} ,'a') ;\n;

`;

  return code;
};

javascript.javascriptGenerator.forBlock['set_digital'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in',  javascript.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in',  javascript.Order.ATOMIC);
  var field_analog_name = block.getFieldValue('Value_NAME');
  var value_analog_in = generator.valueToCode(block, 'value_in',  javascript.Order.ATOMIC);

  var _obj = value_obj_in.replace(/^'|'$/g, '');



  var code = 
`
set_rest_value(${_obj},${value_pin_in}, bool2int("${value_analog_in}")  ,'d') ;\n;

`;

  return code;
};

javascript.javascriptGenerator.forBlock['get_digital'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in',  javascript.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in',  javascript.Order.ATOMIC);

   var _obj = value_obj_in.replace(/^'|'$/g, '');

// http://192.168.3.12/d-5-value
// http://192.168.3.12/a-5-value
// http://192.168.3.12/a-0-value

 
var code =`( restCall(${_obj}, ${value_pin_in},'d')) `;

return [code,javascript.Order.ATOMIC];
};


javascript.javascriptGenerator.forBlock['get_analog'] = function(block, generator) {
  var field_obj_name = block.getFieldValue('OBJ_NAME');
  var value_obj_in = generator.valueToCode(block, 'obj_in',  javascript.Order.ATOMIC);
  var field_pin_name = block.getFieldValue('PIN_NAME');
  var value_pin_in = generator.valueToCode(block, 'pin_in',  javascript.Order.ATOMIC);

   var _obj = value_obj_in.replace(/^'|'$/g, '');

   var code =`( restCall(${_obj}, ${value_pin_in},'a')) `;

return [code,javascript.Order.ATOMIC];
};

