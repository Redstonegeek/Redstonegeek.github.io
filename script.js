new p5();
var testArray1 = [1,2,3,4,5,6];
var testArray2 = [1,0,1,1,0,0];
var list1Index = 0;
var list2Index = 0;
var tIndex = 0;
var board = [];
var X = 3.775;
var collides = [];
var bufferPiece = 0;
var testArray = [3,1,2];
var row = 0;
var ZPieceR1 = 
[
'/',0,4,4,0,0,'#',
'/',0,0,4,4,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var ZPieceR4 =
[
'/',0,0,0,4,0,'#',
'/',0,0,4,4,0,'#',
'/',0,0,4,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var ZPieceR3 =
[
'/',0,0,0,0,0,'#',
'/',0,4,4,0,0,'#',
'/',0,0,4,4,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var ZPieceR2 =
[
'/',0,0,4,0,0,'#',
'/',0,4,4,0,0,'#',
'/',0,4,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var pieceTemplate =
[
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var IPieceR1 =
[
'/',0,2,2,2,2,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var IPieceR2 =
[
'/',0,0,0,2,0,'#',
'/',0,0,0,2,0,'#',
'/',0,0,0,2,0,'#',
'/',0,0,0,2,0,'#',
'/',0,0,0,0,0,'#',
];
var LPieceR3 =
[
'/',0,0,0,0,0,'#',
'/',0,1,1,1,0,'#',
'/',0,1,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var LPieceR4 =
[
'/',0,0,1,0,0,'#',
'/',0,0,1,0,0,'#',
'/',0,0,1,1,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var LPieceR1 =
[
'/',0,0,0,1,0,'#',
'/',0,1,1,1,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var LPieceR2 =
[
'/',0,1,1,0,0,'#',
'/',0,0,1,0,0,'#',
'/',0,0,1,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var OPieceR1 =
[
'/',0,0,3,3,0,'#',
'/',0,0,3,3,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var TPieceR1 =
[
'/',0,0,5,0,0,'#',
'/',0,5,5,5,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var TPieceR2 =
[
'/',0,0,5,0,0,'#',
'/',0,5,5,0,0,'#',
'/',0,0,5,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var TPieceR3 =
[
'/',0,0,0,0,0,'#',
'/',0,5,5,5,0,'#',
'/',0,0,5,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var TPieceR4 =
[
'/',0,0,5,0,0,'#',
'/',0,0,5,5,0,'#',
'/',0,0,5,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var JPieceR1 =
[
'/',0,6,0,0,0,'#',
'/',0,6,6,6,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var JPieceR4 =
[
'/',0,0,6,6,0,'#',
'/',0,0,6,0,0,'#',
'/',0,0,6,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var JPieceR3 =
[
'/',0,0,0,0,0,'#',
'/',0,6,6,6,0,'#',
'/',0,0,0,6,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var JPieceR2 =
[
'/',0,0,6,0,0,'#',
'/',0,0,6,0,0,'#',
'/',0,6,6,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var SPieceR1 =
[
'/',0,0,7,7,0,'#',
'/',0,7,7,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var SPieceR4 =
[
'/',0,0,7,0,0,'#',
'/',0,0,7,7,0,'#',
'/',0,0,0,7,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var SPieceR3 =
[
'/',0,0,0,0,0,'#',
'/',0,0,7,7,0,'#',
'/',0,7,7,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var SPieceR2 =
[
'/',0,7,0,0,0,'#',
'/',0,7,7,0,0,'#',
'/',0,0,7,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var pieceTemplate =
[
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
'/',0,0,0,0,0,'#',
];
var SPieceQ =
[
0,7,7,
7,7,0
];
var TPieceQ =
[
0,5,0,
5,5,5
];
var LPieceQ =
[
0,0,1,
1,1,1
];
var JPieceQ =
[
6,0,0,
6,6,6
];
var ZPieceQ =
[
4,4,0,
0,4,4
];
var IPieceQ = 
[2,2,2,2,0,0,0,0];
var OPieceQ = 
[
0,3,3,0,
0,3,3,0
];
var rot = 0;
var moved = 1;
var kickTableCW1 = [0,-1,-11,20,19];
var kickTableCW2 = [0,1,11,-20,-19];
var kickTableCW3 = [0,1,-9,20,21];
var kickTableCW4 = [0,-1,9,-20,-21];
var kickTableCW4I = [-10,-12,-9,-2,-29];//ajhgfdjahsjhd
var kickTableCW3I = [20,19,22,-1,32];
var kickTableCW2I = [-21,-19,-22,-29,-2];
var kickTableCW1I = [11,12,9,31,-1];
var kickTableCCW3 = [0,1,-9,20,21];//correct?
var kickTableCCW2 = [0,-1,9,-20,-21];
var kickTableCCW1 = [0,-1,-11,20,19];
var kickTableCCW4 = [0,1,11,-20,-19];//correct
var kickTableCCW1I = [-11,-12,-9,-31,1];
var kickTableCCW2I = [21,19,22,29,2];
var kickTableCCW3I = [-20,-19,-22,1,-32];
var kickTableCCW4I = [10,12,9,2,29];
var kickTablesCWI = [kickTableCW1I,kickTableCW2I,kickTableCW3I,kickTableCW4I];
var kickTablesCCWI = [kickTableCCW4I,kickTableCCW1I,kickTableCCW2I,kickTableCCW3I];
var kickTablesCW = [kickTableCW4,kickTableCW3,kickTableCW2,kickTableCW1];
var kickTablesCCW = [kickTableCCW4,kickTableCCW3,kickTableCCW2,kickTableCCW1];
var queue = [];
var dropped = 1;
var fullRows = [];
var ghost = 0;
frameRate(60);
var boardReset = [];
var tIndex2 = 0;
var color = 0;
var gravity = 1000;
var opacity = 0.5;
var IPieceRot = [IPieceR1,IPieceR2,IPieceR1,IPieceR2];
var LPieceRot = [LPieceR1,LPieceR2,LPieceR3,LPieceR4];
var OPieceRot = [OPieceR1,OPieceR1,OPieceR1,OPieceR1];
var ZPieceRot = [ZPieceR1,ZPieceR2,ZPieceR3,ZPieceR4];
var TPieceRot = [TPieceR1,TPieceR2,TPieceR3,TPieceR4];
var JPieceRot = [JPieceR1,JPieceR2,JPieceR3,JPieceR4];
var SPieceRot = [SPieceR1,SPieceR2,SPieceR3,SPieceR4];
var Pieces = [LPieceRot,ZPieceRot,TPieceRot,JPieceRot,SPieceRot,IPieceRot,OPieceRot];
var frame = 0;
var pTime = millis();
var colors = [0,'rgb(255,127,0)','rgb(0,255,255)','rgb(255,255,0)','rgb(255,0,0)','rgb(127,0,127)','rgb(0,0,255)','rgb(0,255,0)'];
var ghostColors = [0,'rgba(255,127,0,0.5)','rgba(0,255,255,0.5)','rgba(255,255,0,0.5)','rgba(255,0,0,0.5)','rgba(127,0,127,0.5)','rgba(0,0,255,0.5)','rgba(0,255,0,0.5)'];
var currentPiece = 6;
var ghostDepth = 0;
var queueArray = [LPieceQ,ZPieceQ,TPieceQ,JPieceQ,SPieceQ,IPieceQ,OPieceQ];
var Y = 0;
var rotCol = [];
var ghostM = [];
var tempBagIndex = 0;
var overwriteIndex = [];
var floorIndex = 0;
var rotIndex = 0;
var currentBag = [0,1,2,3,4,5,6];
var edgeIndex = 0;
var containIndex = 0;
var piecePos = 12;
var holdPiece = -1;
var Side = 20;
var ghostPos = 0;
var Index = 0;
var M = [];
function getIndex(list,item){
  tIndex2 = 0;
  while (tIndex2 < list.length){
  if (list[tIndex2]==item){
    return(tIndex2);
  }
  tIndex2 += 1;
  }
}
function floorCollision(){
  floorIndex = 0;
for (var i = 0; i < 4; i++) {
 if (board[M[floorIndex]+10] > 0 || M[floorIndex]+10> 209){
   if (!listContains(M,M[floorIndex]+10)){
   return(false);
   }
 }
 floorIndex += 1;
}
return(true);
}
function listContains(list,item){
  containIndex = 0;
  while (containIndex < list.length){
    if (list[containIndex]==item){
      return(true);
    }
    containIndex += 1;
  }
  return(false);
}
function clearLine(row){
  moved = 1;
  tIndex = 9;
  while (tIndex > -1){
  if (listContains(overwriteIndex,row*10+tIndex)){
    overwriteIndex.splice(getIndex(overwriteIndex,row*10+tIndex),1)
  }
  tIndex -= 1;
  }
  for (var i = 0; i < 10; i++) {
    boardReset.splice(row*10-1,1)
  }
  
  for (var j = 0; j < 10; j++) {
    boardReset.splice(0,0,0)
  }
  tIndex2 = 0;
  //Moves id of previous pieces down.
  while (tIndex2 < overwriteIndex.length){
    if (overwriteIndex[tIndex2]<row*10){
      overwriteIndex.splice(tIndex2,1,overwriteIndex[tIndex2]+10);
    }
    if (overwriteIndex[tIndex2]>209){
      overwriteIndex.splice(tIndex2,1)
    }else{
    tIndex2 +=1;
    }
  }
}
//fIndex is function index. Used here for inserting each item at the correct spot.
function mergeLists(list1,list2,fIndex){
  if (ghost == 0){
  M = [];
  }else{
    ghostM = [];
  }
  list1Index = fIndex;
  list2Index = 0;
  for (;list2Index < list2.length;list2Index++){
  if (list2[list2Index] > 0){
    if (ghost == 0){
    append(M,list1Index)
    list1.splice(list1Index,1,list2[list2Index]);
  }else{
    append(ghostM,list1Index)
    list1.splice(list1Index,1,list2[list2Index]+10)
  }
  }
      list1Index += 1;
    if (list2[list2Index] == '#'){
      list1Index += 3
    }

  }
}
function rotCheck(direction){
  tIndex2 = 0;
  rotCol = [];
  rotIndex = 0;
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  edgeCollision();
  if (currentPiece == 5){
    if (direction == 0){
            piecePos += kickTablesCWI[rot][rotIndex];
    }else{
      if (direction == 1){
      piecePos += kickTablesCCWI[rot][rotIndex];
      }
    }
  }
  for (var j = 0; j < 5; j++) {
        tIndex2 = 0;
  for (var i = 0; i < 4; i++) {
      board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    mergeLists(board,Pieces[currentPiece][rot],piecePos-1);

    edgeCollision();
    if (listContains(collides,1)&&listContains(collides,2)){
      append(rotCol,1);
    }else{
    if (M[tIndex2]>209){
      append(rotCol,1);
    }else{
    if (listContains(overwriteIndex,M[tIndex2])){
      append(rotCol,1);
    }else{
        append(rotCol,0);
    }
    }
    }
    tIndex2 += 1;
  }
  if (rotIndex != 4){
  if (listContains(rotCol,1)){
    if (rotIndex < 4){
    rotCol = [];
    }
    rotIndex += 1;
    if (currentPiece != 5){
    if (direction == 0){
  piecePos -= kickTablesCW[rot][rotIndex-1];
  piecePos += kickTablesCW[rot][rotIndex];
    }else{
        piecePos -= kickTablesCCW[rot][rotIndex-1];
        piecePos += kickTablesCCW[rot][rotIndex];
    }
    }else{
      if(direction == 0){
      piecePos -= kickTablesCWI[rot][rotIndex-1];
      piecePos += kickTablesCWI[rot][rotIndex];
      }else{
      piecePos -= kickTablesCCWI[rot][rotIndex-1];
      piecePos += kickTablesCCWI[rot][rotIndex];
      }
    }
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
mergeLists(board,Pieces[currentPiece][rot],piecePos-1);

}
}
  }
  if (listContains(rotCol,1)){
    if (direction == 0){
      piecePos -= kickTablesCW[rot][4];
    }else{
      piecePos -= kickTablesCCW[rot][4];
    }
    return(true);
  }
}
function swapHold(){
  moved = 1;
  rot = 0;
  if (holdPiece == -1){
    holdPiece = currentPiece;
    queue.splice(0,1);
    currentPiece = queue[0];
  }else{
    bufferPiece = currentPiece;
    currentPiece = holdPiece;
    holdPiece = bufferPiece;
  }
  piecePos = 12;
}
function edgeCollision(){
  collides = [];
  //Check edges of board for piece
  edgeIndex = 0;
  tIndex = 0;
  for (var i = 0; i < 4; i++) {
    if (board[M[tIndex]+1]> 0){
     if (!listContains(M,M[tIndex]+1)){
       append(collides,2);
     }
    }
    if (board[M[tIndex]-1]>0){
      if (!listContains(M,M[tIndex]-1)){
        append(collides,1);
      }
    }
   tIndex += 1;
  }
  while (edgeIndex < 200){
    if (board[edgeIndex] > 0){
      if (listContains(M,edgeIndex)){
      append(collides,1);
      }
    }
    edgeIndex += 9;
    if (board[edgeIndex] > 0){
      if (listContains(M,edgeIndex)){
      append(collides,2);
      }
    }
    edgeIndex += 1;
  }
}
function piecePlaced(){
  for (var i = 0; i < overwriteIndex.length; i++) {
    board.splice(overwriteIndex[i],1,boardReset[overwriteIndex[i]])
  }
}
function hardDrop(){
  dropped = 1;
  for (var i = 0; i < 20; i++) {
      if (floorCollision()){
    piecePos += 10;
    mergeLists(board,Pieces[currentPiece][rot],piecePos-1);

      }
    }
  queue.splice(0,1);
}
function sevenBag(){
  //Reset bag when depleted.
 if (currentBag.length ==0){
   currentBag = [0,1,2,3,4,5,6];
 }
 tempBagIndex = floor(random(currentBag.length));
 append(queue,currentBag[tempBagIndex]);
  currentBag.splice(tempBagIndex,1)
  currentPiece = queue[0];
}
function keyPressed(){
  if (keyCode == ESCAPE){
    noLoop();
  }
  if (keyCode == LEFT_ARROW){
       pTime = millis();
    moved = 1;
    edgeCollision();
    if (!listContains(collides,1)){
    piecePos -= 1;
    }
  }
  if (keyCode == RIGHT_ARROW){
    pTime = millis();
    moved = 1;
    edgeCollision();
    if (!listContains(collides,2)){
    piecePos += 1;
    }
    
  }
  if (keyCode == 67){
    swapHold();
  }
  if (keyCode == 82){
    queue = [];
  currentBag = [];
  overwriteIndex = [];
  board = [];
  M = [];
  rot = 0;
  moved = 1;
  piecePos = 12;
  holdPiece = -1;
  for (var i = 0; i < 7; i++) {
    sevenBag();
  }
  }
  if (keyCode == 32){
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  piecePlaced();
    hardDrop();
  overwriteIndex.push.apply(overwriteIndex,M)
  overwriteIndex.sort();
  boardReset = board;
  sevenBag();
  piecePos = 12;
  rot = 0;
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  }
  if (keyCode == 90){
      rot += 1;
  moved = 1;
  rot = rot%4;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  if(rotCheck(1)){
    rot += 3;
    rot = rot%4;
  }
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  piecePlaced();
  }
  if (keyCode == UP_ARROW){
     rot += 3;
  rot = rot%4;
  moved = 1;
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  if(rotCheck(0)){
    rot += 1;
    rot = rot%4;
  }
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  piecePlaced();
  }
  if (keyCode == 65){
     rot += 2;
  rot  = rot%4;
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  if (rot < 2){
  if(rotCheck(2)){
  rot += 2;
  rot = rot%4;
  }
  }else{
    if(rotCheck(3)){
  rot += 2;
  rot = rot%4;
  }
  }
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  piecePlaced();
  }
  keyCode = null;
}
function ghostCollision(){
    floorIndex = 0;
for (var i = 0; i < 4; i++) {
 if (board[M[floorIndex]+ghostDepth] > 0 || M[floorIndex]+ghostDepth> 209){
   if (!listContains(M,M[floorIndex]+ghostDepth)){
   return(false);
   }
 }
 floorIndex += 1;
}
return(true);
}
function ghostPiece(){
  ghostM = [];
  //if (moved == 1){
  ghostPos = floor(piecePos/10)*10;
    ghostDepth = (floor(ghostPos/10)-floor(piecePos/10))*10;
  while (ghostCollision()){
    ghostPos += 10;
    ghostDepth = (floor(ghostPos/10)-floor(piecePos/10))*10;
  }
  //}
  ghost = 1;
  mergeLists(board,Pieces[currentPiece][rot],piecePos+ghostDepth-11);
  ghost = 0;
}
function renderQueue(){
    Y = 0.5;
  tIndex2 = 1;
  for (var a = 0; a < 5; a++) {
      tIndex = 0;
      if (queue[tIndex2] < 5){
  X = 15.5;
  for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
    if (queueArray[queue[tIndex2]][tIndex] > 0){
      stroke('black');
      fill(colors[queueArray[queue[tIndex2]][tIndex]]);
      square(X*Side,Y*Side,Side)
    }else{
      noStroke();
      noFill();
    }
    tIndex += 1;
    X += 1;
  }
  Y += 1;
  X = 15.5;
}
  }else{
    X = 15.225;
    for (var L = 0; L < 2; L++) {
  for (var K = 0; K < 4; K++) {
    if (queueArray[queue[tIndex2]][tIndex] > 0){
      stroke('black');
      fill(colors[queueArray[queue[tIndex2]][tIndex]]);
      square(X*Side,Y*Side,Side)
    }else{
      noStroke();
      noFill();
    }
    tIndex += 1;
    X += 1;
  }
  Y += 1;
  X = 15.225;
}
  }
  tIndex2 += 1;
  Y += 1;
  }

}
function gridTest(){
  X = 4.71;
  for (var i = 0; i < 11; i++) {
    line((X)*Side, 0, (X)*Side, 400);
    X += 1;
  }
  X = 4.71;
  Y = 0;
  for (var j = 0; j < 21; j++) {
    line((X)*Side, (Y)*Side, 14.71*Side,(Y)*Side);
    Y += 1;
  }
}
function grid(){
  for (var i = 0;i<4;i++){
    Index = M[i];
    X = Math.abs(Index%10);
    Y = floor(Index/10)-1;
    X += 4.71
    if (board[M[i]] > 0){
      fill(colors[board[M[i]]])
      square(X*Side,Y*Side,Side)
    }
  }
  for (var j = 0;j < 4;j++){
      Index = ghostM[j];
X = Index%10;
Y = floor(Index/10)-1;
X += 4.71
if (board[ghostM[j]]> 9){
fill(ghostColors[board[ghostM[j]]-10]);
  }
square(X*Side,Y*Side,Side)
tIndex += 1;
  }
  for (var k = 0;k < overwriteIndex.length;k++){
    Index = overwriteIndex[k];
X = Index%10;
X += 4.71
Y = floor(Index/10)-1;
if (Y+1 == floor(overwriteIndex[k-1]/10)){
  row += 1;
  if (row == 10){
    append(fullRows,Y+1);
  }
}else{
  row = 1;
}
fill(colors[board[Index]]);
square(X*Side,Y*Side,Side)
tIndex += 1;
  }
}
function renderHold(){
  tIndex = 0;
  Y = 0.5;
  if (holdPiece < 5){
    X = 1;
    for (var i = 0; i < 2; i++) {
      for (var J = 0; J < 3; J++) {
        if (holdPiece > -1){
        if (queueArray[holdPiece][tIndex] > 0){
          stroke('black');
      fill(colors[queueArray[holdPiece][tIndex]]);
      square(X*Side,Y*Side,Side)
        }else{
          noFill();
          noStroke();
        }
      }
        tIndex += 1;
        X += 1;
      }
      X = 1;
      Y += 1;
    }
    
  }else{
    X = 0.5;
    for (var k = 0; k < 2; k++) {
      for (var l = 0; l < 4; l++) {
        if (queueArray[holdPiece][tIndex] > 0){
          stroke('black');
      fill(colors[queueArray[holdPiece][tIndex]]);
      square(X*Side,Y*Side,Side)
        }else{
          noFill();
          noStroke();
        }
        tIndex += 1;
        X += 1;
      }
      Y += 1;
      X = 0.5;
    }
    
  }
}
console.clear();
for (var i = 0;i<7;i++){
  sevenBag();
}
function setup(){
  createCanvas(400,400)
  strokeWeight(1)
}
mergeLists(testArray1,testArray2,2)
console.log(testArray1)
function draw(){
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  piecePlaced()
  edgeCollision()
  if (fullRows.length>0){
  while (fullRows.length>0){
clearLine(fullRows[0]);
fullRows.splice(0,1)
}
}
  if (keyIsDown(DOWN_ARROW)){
    if (floorCollision()){
      piecePos+=10;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (millis()-pTime > 100){
      edgeCollision();
        moved = 1;

      if (!listContains(collides,2)){
          piecePos += 1;
      }
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    //measuring time elapsed since key pressed for DAS
    if (millis()-pTime > 100){
      edgeCollision();
        moved = 1;

      if (!listContains(collides,1)){
    piecePos -= 1;
      }
    }
  }
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  background('white')
  stroke('black')
  piecePlaced();
  boardReset = board;
  ghostPiece();
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  grid();
  gridTest();
  renderQueue();
  renderHold();
}
