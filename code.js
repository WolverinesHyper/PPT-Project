var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2ece21cc-30d6-48dd-9b68-6a5c222d965a","f0f7d56c-e3b7-4be7-85fe-8d5b9064f4bf","1b3858f5-0af1-477a-83fb-c4e4929fb9d2","2c96d1e3-b59a-42e7-8b6c-8a706c96b184"],"propsByKey":{"2ece21cc-30d6-48dd-9b68-6a5c222d965a":{"name":"bunny2_walk1_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png","frameSize":{"x":152,"y":193},"frameCount":2,"looping":true,"frameDelay":2,"version":"Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu","loadedFromSource":true,"saved":true,"sourceSize":{"x":304,"y":193},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Q06Mtp7OA9HZ97lXOvJ7J59dO3jcjyLu/category_animals/bunny2_walk1.png"},"f0f7d56c-e3b7-4be7-85fe-8d5b9064f4bf":{"name":"ice_cream_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ewv1CoVpLikMCrFTr6w.v_kIjO9ZuAIY/category_food/ice_cream.png","frameSize":{"x":146,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"ewv1CoVpLikMCrFTr6w.v_kIjO9ZuAIY","loadedFromSource":true,"saved":true,"sourceSize":{"x":146,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ewv1CoVpLikMCrFTr6w.v_kIjO9ZuAIY/category_food/ice_cream.png"},"1b3858f5-0af1-477a-83fb-c4e4929fb9d2":{"name":"rockGrassDown_1","sourceUrl":"assets/api/v1/animation-library/gamelab/rd9oh060owV1Tug6HNh3TsO_MuJFZCK9/category_obstacles/rockGrassDown.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"rd9oh060owV1Tug6HNh3TsO_MuJFZCK9","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rd9oh060owV1Tug6HNh3TsO_MuJFZCK9/category_obstacles/rockGrassDown.png"},"2c96d1e3-b59a-42e7-8b6c-8a706c96b184":{"name":"bronze_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png","frameSize":{"x":86,"y":86},"frameCount":6,"looping":true,"frameDelay":2,"version":"dZ98jetKnt5ZogX102g5XO3252U0D8oc","loadedFromSource":true,"saved":true,"sourceSize":{"x":516,"y":86},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dZ98jetKnt5ZogX102g5XO3252U0D8oc/category_gameplay/bronze.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bunny = createSprite(50,50,10,10);
bunny.setAnimation("bunny2_walk1_1");
bunny.scale = 0.3;

var icecream = createSprite(372,324,10,10);
icecream.setAnimation("ice_cream_1");
icecream.scale = 0.3;

var laser1 = createSprite(291,140,10,70);
laser1.setAnimation("rockGrassDown_1");
laser1.scale = 0.3;

var wall1 = createSprite(120,100,420,10);

var wall2 = createSprite(250,250,400,10);

var wall3 = createSprite(100,370,700,10);

var laser2 = createSprite(300,325,10,10);
var laser3 = createSprite(225,364,10,10);
var laser4 = createSprite(150,325,10,10);
var laser5 = createSprite(75,364,10,10);

var money1 = createSprite(166,70,10,10);
money1.setAnimation("bronze_1");
money1.scale = 0.3;

var money2 = createSprite(166,220,10,10);
money2.setAnimation("bronze_1");
money2.scale = 0.3;

var money3 = createSprite(166,350,10,10);
money3.setAnimation("bronze_1");
money3.scale = 0.3;

var money4 = createSprite(266,230,10,10);
money4.setAnimation("bronze_1");
money4.scale = 0.3;

var money5 = createSprite(266,70,10,10);
money5.setAnimation("bronze_1");
money5.scale = 0.3;

var box = createSprite(210,211,50,70);

var Deathscount = 0;
var score = 0;


wall1.shapeColor = 'green';
wall2.shapeColor = 'green';
wall3.shapeColor = 'green';


box.shapeColor = 'orange';
laser2.shapeColor='red';
laser3.shapeColor='red';
laser4.shapeColor='red';
laser5.shapeColor='red';

laser1.velocityX=6;
laser2.velocityY=6;
laser3.velocityY=6;
laser4.velocityY=6;
laser5.velocityY=6;

function draw() {
  background("lightblue");
  
  textSize(17);
text("Deaths:" +Deathscount,250,29);
  
  createEdgeSprites() ;
bunny.collide(wall1) ;
bunny.collide(wall2) ;
bunny.collide(wall3) ;
bunny.collide(box);


laser1.bounceOff(edges);
laser2.bounceOff(wall3); 
laser3.bounceOff(wall3); 
laser4.bounceOff(wall3);  
laser5.bounceOff(wall3);  

laser2.bounceOff(wall2); 
laser3.bounceOff(wall2); 
laser4.bounceOff(wall2);  
laser5.bounceOff(wall2);  
  
  if (keyDown("left")) {
  bunny.x = bunny.x-10;
}

 if (keyDown("right")) {
 bunny.x = bunny.x+10;
} 

if (keyDown("space") || keyDown("up")) {
 bunny.velocityY=-10;
  
  
}
  bunny.velocityY= bunny.velocityY+0.5;
  
  
  textSize(20);
 fill("black");
 text(score,25,20);
  
  
  if (bunny.isTouching(money1)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money1.y = 1000;
  
 score=+200; 
  
}

 if (bunny.isTouching(money2)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money2.y = 1000;
  
 score=+800; 
  
}

 if (bunny.isTouching(money3)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money3.y = 1000;
  
 score=+1000; 
  
}

 if (bunny.isTouching(money4)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money4.y = 1000;
  
 score=+600; 
  
}

 if (bunny.isTouching(money5)) {
  playSound("assets/category_alerts/vibrant_game_shutter_alert_1_short_quick.mp3");
  money5.y = 1000;
  
 score=+400; 
  
}
  
  if (bunny.isTouching(laser1) || bunny.isTouching(laser2) || bunny.isTouching(laser3) || bunny.isTouching(laser4) || bunny.isTouching(laser5)) {
  reset();
playSound("assets/category_explosion/melodic_loss_6.mp3");
Deathscount = Deathscount + 1; 
}

if (bunny.isTouching(icecream)) {
  
 textSize(25);
fill("white");
text("icecream eated",200,144);
text("Press R to Reset",208,196);
}

if (keyDown("r")) {
    reset();
  }
 





  drawSprites();
}

function reset (){

score=0;
bunny.x=50;
bunny.y=60;

money1.y=70;
money2.y=220;
money3.y=350;
money4.y =230;
money5.y =70;

laser1.x=0;



}




















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
