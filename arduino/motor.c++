const int in_relevador =10; // puede ser cualquier salida digital
void setup() {
  Serial.begin (9600);
  pinMode(in_relevador,OUTPUT);
}

void loop () {
 
  digitalWrite(in_relevador,LOW);//prende el motor

  digitalWrite(in_relevador,HIGH);//apaga el motor
}



void loop () {

  delay(10000); //regara la planta cada 2 minutos 
  
  delay(60000); //regara 10 segundos la planta 
  
   
}