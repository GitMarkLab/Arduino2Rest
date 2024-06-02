Blockly.Blocks['rest_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Init_Rest");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rest_init_pyimport'] = {
  init: function() {
    this.appendValueInput("NAME_in")
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("Init_Rest - PyLibPath"), "field_NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['arduino2rest'] = {
  init: function() {
    this.appendValueInput("obj_in")
        .setCheck(null)
        .appendField("")
        .appendField(new Blockly.FieldLabelSerializable("Object"), "OBJ_NAME");
    this.appendValueInput("ip_in")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("IP"), "IP_NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_servo_position'] = {
  init: function() {
    this.appendValueInput("obj_in")
        .setCheck("String")
        .appendField("set_servo_position")
        .appendField(new Blockly.FieldLabelSerializable("Object"), "OBJ_NAME");
    this.appendValueInput("pin_in")
        .setCheck("Number")
        .appendField(new Blockly.FieldLabelSerializable("Pin"), "PIN_NAME");
    this.appendValueInput("angle_in")
        .setCheck("Number")
        .appendField(new Blockly.FieldLabelSerializable("Angle"), "Angle_NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_analog'] = {
  init: function() {
    this.appendValueInput("obj_in")
        .setCheck("String")
        .appendField("set_analog")
        .appendField(new Blockly.FieldLabelSerializable("Object"), "OBJ_NAME");
    this.appendValueInput("pin_in")
        .setCheck("Number")
        .appendField(new Blockly.FieldLabelSerializable("Pin"), "PIN_NAME");
    this.appendValueInput("value_in")
        .setCheck("Number")
        .appendField(new Blockly.FieldLabelSerializable("Analog"), "Value_NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_digital'] = {
  init: function() {
    this.appendValueInput("obj_in")
        .setCheck("String")
        .appendField("set_digital")
        .appendField(new Blockly.FieldLabelSerializable("Object"), "OBJ_NAME");
    this.appendValueInput("pin_in")
        .setCheck("Number")
        .appendField(new Blockly.FieldLabelSerializable("Pin"), "PIN_NAME");
    this.appendValueInput("value_in")
        .setCheck("Boolean")
        .appendField(new Blockly.FieldLabelSerializable("Digital"), "Value_NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['get_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_digital");
    this.appendValueInput("obj_in")
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("Object"), "OBJ_NAME");
    this.appendValueInput("pin_in")
        .setCheck("Number")
        .appendField(new Blockly.FieldLabelSerializable("Pin"), "PIN_NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['get_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get_analog");
    this.appendValueInput("obj_in")
        .setCheck("String")
        .appendField(new Blockly.FieldLabelSerializable("Object"), "OBJ_NAME");
    this.appendValueInput("pin_in")
        .setCheck("Number")
        .appendField(new Blockly.FieldLabelSerializable("Pin"), "PIN_NAME");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
