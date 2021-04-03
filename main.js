var canvas = new fabric.Canvas('mycanvas');
block_w = 30;
block_h = 30;

player_x = 10;
player_y = 10;

var plOb = '';
var blk_ob = '';

 function player_update(){
     fabric.Image.fromURL('player (1).png', function(Img)
     {
         plOb = Img;
         plOb.scaleToWidth(150);
         plOb.scaleToHeight(140);
         plOb.set({
             top: player_y,
             left: player_x
         });
         canvas.add(plOb);
     }
     );
 }

 function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img)
    {
        blk_ob =  Img;
        blk_ob.scaleToWidth(block_w);
        blk_ob.scaleToHeight(block_h);
        blk_ob.set({
            top: player_y,
            left: player_x
        });
        canvas.add(blk_ob);
    }
    );
 }

 window.addEventListener('keydown', my_keydown);
 function my_keydown(e){
     keypress = e.keyCode;
     console.log(keypress);
     if (e.shiftKey && keypress == '80') {
         console.log('P and shift together');
         block_h = block_h + 10;
         block_w = block_w + 10;
         document.getElementById('current_width').innerHTML = block_w;
         document.getElementById('current_height').innerHTML = block_h;
     }
     
     if (e.shiftKey && keypress == '77') {
         console.log('M and shift together');
         block_h = block_h - 10;
         block_w = block_w - 10;
         document.getElementById('current_width').innerHTML = block_w;
         document.getElementById('current_height').innerHTML = block_h;
     }
     

 if(keypress == '70'){
    new_image('Groot.png');
    console.log('Face');
}

if(keypress == '66'){
    new_image('ironman_body.png');
    console.log('Body');
}

if(keypress == '72'){
    new_image('Scarlet Witch.png');
    console.log('Left Hand');
}

if(keypress == '82'){
    new_image('spiderman_right_hand.png');
    console.log('Right hand');
}

if(keypress == '76'){
    new_image('Strange.png');
    console.log('Legs');
}

if(keypress == '38'){
    up();
    console.log('up');
}

if(keypress == '40'){
    down();
    console.log('Down');
}

if(keypress == '37'){
    left();
    console.log('left');
}

if(keypress == '39'){
    right();
    console.log('Right');
}