import time

import sys
import os

# Pfad zur Bibliothek hinzufügen
library_path = '/home/mrt/GIT/Arduino2Rest'
if library_path not in sys.path:
    sys.path.append(library_path)

# Bibliothek importieren
from Class_Arduino2Rest import Arduino2Rest

def bool_to_string(value):
    if value:
        return True
    else:
        return False


# Blockly liefert True / False --> der Arduino benötigt aber einen string
def bool_to_int(value):
    if value:
        return 1
    else:
        return 0
myarduino = Arduino2Rest("192.168.3.12")
for count in range(10):
  myarduino.set_servo_position(9, 1)
  time.sleep(0.5)
  myarduino.set_servo_position(9, 100)
  time.sleep(0.5)
