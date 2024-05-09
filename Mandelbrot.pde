float scale = 1.5; 
float centre_x = -0.75, centre_y = 0; 

void setup(){
  size(400,400); 
  colorMode(HSB,360,100,100); 
  noStroke(); 
} 

void draw(){
  background(0); 
  for (int y = 0; y < height; y++){
    for (int x = 0; x < width; x++){
      color h = mandelbro(centre_x + map(x,0,width,-scale,scale), centre_y + map(y,0,height,-scale,scale)); 
      stroke(h); 
      point(x,y); 
    }
   } 
} 

color mandelbro(float ca, float cb){
  
  float za = ca, zb = cb;
  int count = 0; 
  float temp; 
  do{  
    temp = za*za - zb*zb + ca; 
    zb = 2*za*zb + cb; 
    za = temp; 
    count++; 
    
  }while((za*za + zb*zb) <= 7 && count < 500);
  if(count == 500){
    return(color(0,0,0)); 
  } 
  return (color(count/500.0 * 360, 100, 100));  
} 

void keyPressed(){
  if(key == 'i'){
    scale *= 0.9; 
  } 
  
  if(key == 'o'){
    scale = scale/0.9; 
  }
  
  if(key == 'd'){
    centre_y -= 0.2; 
  } 
  
  if(key == 'w'){
    centre_y += 0.2;  
  } 
} 
