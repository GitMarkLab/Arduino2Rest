Blockly.Blocks['time_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Init_Timer");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.appendValueInput("sleep_ms_in")
        .setCheck("Number")
        .appendField("Sleep_ms");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
