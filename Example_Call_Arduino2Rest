###
from Class_Arduino2Rest import Arduino2Rest
arduino = Arduino2Rest("192.168.3.12")

# Setze einen Servo auf Position 150 an Port 9
arduino.set_servo_position(9, 150)
arduino.set_servo_position(9, 15)

# Get status of the digital IO Pin 5
rv = arduino.get_digital(5)
print( "ReturnValue ",rv)

# Get the value of the analog IO Pin 
rv = arduino.get_analog(0)
print( "ReturnValue ",rv)

# Example to read in a loop
while(True):
    analog = arduino.get_analog(0)
    if analog>1000:
        print( "Analog Value",analog)
    if arduino.get_digital(5) == 1:
        print("button pressed")
