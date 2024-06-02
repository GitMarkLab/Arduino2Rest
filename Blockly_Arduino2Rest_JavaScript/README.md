# Arduino2Rest
## Class_Arduino2Rest.py
## This is a Blockly Program based on the Class_Arduino2Rest.py
### Note: 
- this lib is independent from any additional file
- the code will direct generated and executed IN the browser

1) first install the program on the arduino mega
2) configure your Ethernet card 192.168.3.x - my device has 192.168.3.12
3) open "index.html" from "Blockly_Arduino2Rest_JavaScript". You will "hopefully" see the block libs
4) create the program like examples. There are two inits possible (the second with an absolute path)
5) Press "Ausführen", The code will be generated in the back and executed 

## How it works

the HTML File provides the blocks to the web front end.
it grabs the code snippes from each block as String parts and append them to the final complete code

### Definition of the blocks (created with Blockly Block creator)
Arduino2Rest_block.js

### code snippes (python as string)
Arduino2Rest_code.js
