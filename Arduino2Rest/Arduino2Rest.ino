#include <Servo.h>

#include <SPI.h>
#include <Ethernet.h>
#include <aREST.h>
#include <avr/wdt.h>

byte mac[] = { 0x90, 0xA2, 0xDA, 0x0E, 0xFE, 0x40 };

IPAddress ip(192, 168, 3, 12);
IPAddress gateway(192, 168, 3, 1);
IPAddress subnet(255, 255, 255, 0);
IPAddress myDns(8, 8, 8, 8);

EthernetServer server(80);

aREST rest = aREST();

int temperature;
int humidity;

int ai0_pin = A0;  
int ai1_pin = A0;   

int ai0_value = 0;  
int ai1_value = 0;  

int di5_pin = 5;   
int di5_value = 0; 

Servo s8;  
Servo s9; 

void setup(void) {

  Serial.begin(115200);

  //pinMode(11, OUTPUT);
  //pinMode(10, OUTPUT);
  //pinMode(9, OUTPUT);
  s9.attach(9);  // attaches the servo on pin 9 to the servo object
  //pinMode(8, OUTPUT);
  s8.attach(8);  // attaches the servo on pin 9 to the servo object

  pinMode(7, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(5, INPUT);
  //pinMode(4, OUTPUT);



  rest.variable("a-0-value", &ai0_value);
  rest.variable("a-1-value", &ai1_value);
  rest.variable("d-5-value", &di5_value);  

  rest.function("servo", servo);
  rest.function("set_analog", set_analog);
  // Give name & ID to the device (ID should be 6 characters long)
  rest.set_id("Rev1.2");
  rest.set_name("aREST");

  Ethernet.begin(mac, ip, myDns, gateway, subnet);

  server.begin();
  Serial.print("server is at ");
  Serial.println(Ethernet.localIP());

  wdt_enable(WDTO_4S);
}

void loop() {

  ai0_value = analogRead(ai0_pin);
  ai1_value = analogRead(ai1_pin);
  di5_value = digitalRead(di5_pin);

  EthernetClient client = server.available();
  rest.handle(client);
  wdt_reset();
}

int servo(String position) {

  int state = position.toInt();
  return state;
}

int set_analog(String data) {

  int firstDashIndex = data.indexOf('-');
  int secondDashIndex = data.indexOf('-', firstDashIndex + 1);
  String type = data.substring(0, firstDashIndex);
  int port = data.substring(firstDashIndex + 1, secondDashIndex).toInt();
  int value = data.substring(secondDashIndex + 1).toInt();

  if (type == "a") {
    // Set analog value (PWM) max 1023
    analogWrite(port, value);
    Serial.println("Analog (PWM) value set.");
    Serial.print("Port:  ");
    Serial.println(port);
    Serial.print("Value:  ");
    Serial.println(value);    
  } 
  else if (type == "d") {
    // Set digital value (HIGH or LOW)
    digitalWrite(port, value == 0 ? LOW : HIGH);
    Serial.println("Digital value set.");
    Serial.print("Port:  ");
    Serial.println(port);
    Serial.print("Value:  ");
    Serial.println(value);    
  } 
  else if (type == "s") {
    if(port == 8)   s8.write(value);  
    if(port == 9)   s9.write(value);  
  }   
  else {
    Serial.print("Type unknown:  ");
    Serial.println(type);
    Serial.print("Port:  ");
    Serial.println(port);
    Serial.print("Value:  ");
    Serial.println(value);    
  }
  return port;
}
