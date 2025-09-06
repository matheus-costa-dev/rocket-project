#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

void setup(){

  Serial.begin(115200);
  delay(5000);
  Serial.println();

  wifiConnect();
  weatherStatus();
}

void wifiConnect(){
  const char* ssid = "Greatek-CD8C2C";
  const char* password = "doisreais";

  Serial.println("Conectando a rede wifi ");

  WiFi.begin(ssid, password);

  while(WiFi.status() != WL_CONNECTED){
    delay(500);
    Serial.println(".");
  }

  Serial.println(String("Wifi conectado, situação: ") + String(WiFi.status()));
  Serial.print("Endereço ip :");
  Serial.print(WiFi.localIP());


}

void weatherStatus(){
  String apiKey = "a69334c28e1542a8aa8185424242611";
  String city = "marica";
  String baseUrl = "http://api.weatherapi.com/v1/current.json?key=";


  String url = baseUrl + apiKey + "&q=" + city + "&aqi=no";

  Serial.print("\nIniciando conexão com o url: ");
  Serial.print(url);

  HTTPClient http;
  WiFiClient client; 

  http.begin(client, url);
  int httpCode =  http.GET();

  if(httpCode <= 0){
    Serial.println("falha ao fazer a requisição");
    Serial.println("Parando programa");
    return;
  } 

  Serial.println("\nConexão estabelecida");

  StaticJsonDocument<1024> doc;
  String payload = http.getString();

  DeserializationError error = deserializeJson(doc, payload);

  if (error){
    Serial.print("Erro ao parsear JSON: ");
    Serial.println(error.c_str());
    return;
  }

  float tempC = doc["current"]["temp_c"];       
  const char* condition = doc["current"]["condition"]["text"]; 
  const float windKph = doc["current"]["wind_kph"];
  const float feelslike_c = doc["current"]["feelslike_c"];

  Serial.println(String("Temperatura: ") + String(tempC));
  Serial.println(String("Condição: ") + String(condition));
  Serial.println(String("velocidade do vento: ") + String((int)windKph));
  Serial.println(String("Sensação termica: ") + String(feelslike_c));

  http.end(); 
}

void loop(){


}