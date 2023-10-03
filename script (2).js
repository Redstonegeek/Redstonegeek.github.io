new p5();
var SDF = 0;
var fadeAllClear = 0;
var testArray1 = [1,2,3,4,5,6];
var testArray2 = [1,0,1,1,0,0];
var list1Index = 0;
var list2Index = 0;
var SDFTime = 0;
var tIndex = 0;
var x180Kicks = [10,1,-10,-1]
var board = [];
var allClearText = document.getElementById('allClearText')
var X = 3.775;
var collides = [];
var bufferPiece = 0;
var testArray = [3,1,2];
var row = 0;
var DAS = 120;
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
var DASInputActive = 0;
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
var ARR = 0;
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
var currentFrame = 0;
var pFrame = 0;
var dasvalue =document.getElementById('dasValue')
var arrvalue = document.getElementById('arrValue')
var sdfvalue = document.getElementById('sdfValue')
function setDAS(){
  console.log(dasvalue.value)
  if (dasvalue.value > -1){
  DAS = dasvalue.value
  }
}
function setARR(){
  if (arrvalue.value > -1){
  ARR = arrvalue.value
  }
}
function setSDF(){
  if (sdfvalue.value > -1){
  SDF = sdfvalue.value
  }
}
var pTime = millis();
var colors = [0,'rgb(255,127,0)','rgb(0,255,255)','rgb(255,255,0)','rgb(255,0,0)','rgb(170,0,170)','rgb(40,40,255)','rgb(0,255,0)'];
var ghostColors = [0,'rgba(255,127,0,0.75)','rgba(0,255,255,0.75)','rgba(255,255,0,0.75)','rgba(255,0,0,0.75)','rgba(170,0,170,0.75)','rgba(0,0,255,0.75)','rgba(0,255,0,0.75)'];
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
var keyboardMap = [
  "", // [0]
  "", // [1]
  "", // [2]
  "CANCEL", // [3]
  "", // [4]
  "", // [5]
  "HELP", // [6]
  "", // [7]
  "BACK_SPACE", // [8]
  "TAB", // [9]
  "", // [10]
  "", // [11]
  "CLEAR", // [12]
  "ENTER", // [13]
  "ENTER_SPECIAL", // [14]
  "", // [15]
  "SHIFT", // [16]
  "CONTROL", // [17]
  "ALT", // [18]
  "PAUSE", // [19]
  "CAPS_LOCK", // [20]
  "KANA", // [21]
  "EISU", // [22]
  "JUNJA", // [23]
  "FINAL", // [24]
  "HANJA", // [25]
  "", // [26]
  "ESC", // [27]
  "CONVERT", // [28]
  "NONCONVERT", // [29]
  "ACCEPT", // [30]
  "MODECHANGE", // [31]
  "SP", // [32]
  "PAGE_UP", // [33]
  "PAGE_DOWN", // [34]
  "END", // [35]
  "HOME", // [36]
  "←", // [37]
  "↑", // [38]
  "→", // [39]
  "↓", // [40]
  "SELECT", // [41]
  "PRINT", // [42]
  "EXECUTE", // [43]
  "PRINTSCREEN", // [44]
  "INSERT", // [45]
  "DELETE", // [46]
  "", // [47]
  "0", // [48]
  "1", // [49]
  "2", // [50]
  "3", // [51]
  "4", // [52]
  "5", // [53]
  "6", // [54]
  "7", // [55]
  "8", // [56]
  "9", // [57]
  "COLON", // [58]
  "SEMICOLON", // [59]
  "LESS_THAN", // [60]
  "EQUALS", // [61]
  "GREATER_THAN", // [62]
  "QUESTION_MARK", // [63]
  "AT", // [64]
  "A", // [65]
  "B", // [66]
  "C", // [67]
  "D", // [68]
  "E", // [69]
  "F", // [70]
  "G", // [71]
  "H", // [72]
  "I", // [73]
  "J", // [74]
  "K", // [75]
  "L", // [76]
  "M", // [77]
  "N", // [78]
  "O", // [79]
  "P", // [80]
  "Q", // [81]
  "R", // [82]
  "S", // [83]
  "T", // [84]
  "U", // [85]
  "V", // [86]
  "W", // [87]
  "X", // [88]
  "Y", // [89]
  "Z", // [90]
  "OS_KEY", // [91] Windows Key (Windows) or Command Key (Mac)
  "", // [92]
  "CONTEXT_MENU", // [93]
  "", // [94]
  "SLEEP", // [95]
  "NUMPAD0", // [96]
  "NUMPAD1", // [97]
  "NUMPAD2", // [98]
  "NUMPAD3", // [99]
  "NUMPAD4", // [100]
  "NUMPAD5", // [101]
  "NUMPAD6", // [102]
  "NUMPAD7", // [103]
  "NUMPAD8", // [104]
  "NUMPAD9", // [105]
  "MULTIPLY", // [106]
  "ADD", // [107]
  "SEPARATOR", // [108]
  "SUBTRACT", // [109]
  "DECIMAL", // [110]
  "DIVIDE", // [111]
  "F1", // [112]
  "F2", // [113]
  "F3", // [114]
  "F4", // [115]
  "F5", // [116]
  "F6", // [117]
  "F7", // [118]
  "F8", // [119]
  "F9", // [120]
  "F10", // [121]
  "F11", // [122]
  "F12", // [123]
  "F13", // [124]
  "F14", // [125]
  "F15", // [126]
  "F16", // [127]
  "F17", // [128]
  "F18", // [129]
  "F19", // [130]
  "F20", // [131]
  "F21", // [132]
  "F22", // [133]
  "F23", // [134]
  "F24", // [135]
  "", // [136]
  "", // [137]
  "", // [138]
  "", // [139]
  "", // [140]
  "", // [141]
  "", // [142]
  "", // [143]
  "NUM_LOCK", // [144]
  "SCROLL_LOCK", // [145]
  "WIN_OEM_FJ_JISHO", // [146]
  "WIN_OEM_FJ_MASSHOU", // [147]
  "WIN_OEM_FJ_TOUROKU", // [148]
  "WIN_OEM_FJ_LOYA", // [149]
  "WIN_OEM_FJ_ROYA", // [150]
  "", // [151]
  "", // [152]
  "", // [153]
  "", // [154]
  "", // [155]
  "", // [156]
  "", // [157]
  "", // [158]
  "", // [159]
  "CIRCUMFLEX", // [160]
  "EXCLAMATION", // [161]
  "DOUBLE_QUOTE", // [162]
  "HASH", // [163]
  "DOLLAR", // [164]
  "PERCENT", // [165]
  "AMPERSAND", // [166]
  "UNDERSCORE", // [167]
  "OPEN_PAREN", // [168]
  "CLOSE_PAREN", // [169]
  "ASTERISK", // [170]
  "PLUS", // [171]
  "PIPE", // [172]
  "HYPHEN_MINUS", // [173]
  "OPEN_CURLY_BRACKET", // [174]
  "CLOSE_CURLY_BRACKET", // [175]
  "TILDE", // [176]
  "", // [177]
  "", // [178]
  "", // [179]
  "", // [180]
  "VOLUME_MUTE", // [181]
  "VOLUME_DOWN", // [182]
  "VOLUME_UP", // [183]
  "", // [184]
  "", // [185]
  "SEMICOLON", // [186]
  "EQUALS", // [187]
  "COMMA", // [188]
  "MINUS", // [189]
  "PERIOD", // [190]
  "SLASH", // [191]
  "BACK_QUOTE", // [192]
  "", // [193]
  "", // [194]
  "", // [195]
  "", // [196]
  "", // [197]
  "", // [198]
  "", // [199]
  "", // [200]
  "", // [201]
  "", // [202]
  "", // [203]
  "", // [204]
  "", // [205]
  "", // [206]
  "", // [207]
  "", // [208]
  "", // [209]
  "", // [210]
  "", // [211]
  "", // [212]
  "", // [213]
  "", // [214]
  "", // [215]
  "", // [216]
  "", // [217]
  "", // [218]
  "OPEN_BRACKET", // [219]
  "BACK_SLASH", // [220]
  "CLOSE_BRACKET", // [221]
  "QUOTE", // [222]
  "", // [223]
  "META", // [224]
  "ALTGR", // [225]
  "", // [226]
  "WIN_ICO_HELP", // [227]
  "WIN_ICO_00", // [228]
  "", // [229]
  "WIN_ICO_CLEAR", // [230]
  "", // [231]
  "", // [232]
  "WIN_OEM_RESET", // [233]
  "WIN_OEM_JUMP", // [234]
  "WIN_OEM_PA1", // [235]
  "WIN_OEM_PA2", // [236]
  "WIN_OEM_PA3", // [237]
  "WIN_OEM_WSCTRL", // [238]
  "WIN_OEM_CUSEL", // [239]
  "WIN_OEM_ATTN", // [240]
  "WIN_OEM_FINISH", // [241]
  "WIN_OEM_COPY", // [242]
  "WIN_OEM_AUTO", // [243]
  "WIN_OEM_ENLW", // [244]
  "WIN_OEM_BACKTAB", // [245]
  "ATTN", // [246]
  "CRSEL", // [247]
  "EXSEL", // [248]
  "EREOF", // [249]
  "PLAY", // [250]
  "ZOOM", // [251]
  "", // [252]
  "PA1", // [253]
  "WIN_OEM_CLEAR", // [254]
  "" // [255]
];
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
let leftButton = document.getElementById('left')
let rightButton = document.getElementById('right')
let downButton = document.getElementById('down')
let reset = document.getElementById('reset')
let exit = document.getElementById('exit')
let CW = document.getElementById('CW')
let hold = document.getElementById('hold')
let CCW = document.getElementById('CCW')
let hd = document.getElementById('hd')
let x180 = document.getElementById('180')
var inputToPoll = 0;
var inputNames = [0, leftButton,rightButton,downButton,CW,CCW,x180,reset,exit,hd,hold]
var inputAssignments = [0,LEFT_ARROW,RIGHT_ARROW,DOWN_ARROW,UP_ARROW,90,65,82,ESCAPE,32,67];
var settingKeybind = 0
var waitingForInput = 0;
function startInputPoll(Input){
  waitingForInput = 1;
  inputNames[Input].style.borderStyle = 'inset'
  inputAssignments[Input] = 1;
  inputToPoll = Input
  console.log(inputToPoll)
}
function setKeybind(){
  inputAssignments[inputToPoll] = keyCode
  inputNames[inputToPoll].style.borderStyle = 'outset'
  inputNames[inputToPoll].innerHTML = keyboardMap[keyCode]
  inputToPoll = null
  waitingForInput = 0;
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
function toppedOut(){
  for (var x = 0; x < 4;x++){
    if (listContains(overwriteIndex,M[x])){
      queue = [];
  currentBag = [];
  overwriteIndex = [];
  board = [];
  M = [];
  rot = 0;
  moved = 1;
  piecePos = 12;
  holdPiece = -1;
      board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  for (var i = 0; i < 7; i++) {
    sevenBag();
  }
      return(0)
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
    //Kicks are different for the I piece, seperate instructions for that
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
    //Each iteration is for a different offset
  for (var i = 0; i < 4; i++) {
    //Checks each mino for collision
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
    //Applies offset if the piece cant rotate
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
      if (direction == 1){
        piecePos -= kickTablesCCW[rot][rotIndex-1];
        piecePos += kickTablesCCW[rot][rotIndex];
      }else{
          if (rotIndex < 2){
            piecePos += x180Kicks[rot]
            console.log(x180Kicks[rot])
          }
      }
    }
    }else{
      console.log(direction)
      if(direction == 0){
      piecePos -= kickTablesCWI[rot][rotIndex-1];
      piecePos += kickTablesCWI[rot][rotIndex];
      }else{
        if (direction == 1){
      piecePos -= kickTablesCCWI[rot][rotIndex-1];
      piecePos += kickTablesCCWI[rot][rotIndex];
        }else{
          if (rotIndex < 2){
            piecePos += x180Kicks[rot]
            console.log(x180Kicks[rot])
          }
        }
      }
    }
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
mergeLists(board,Pieces[currentPiece][rot],piecePos-1);

}
}
  }
  if (listContains(rotCol,1)){
    //If the piece still collides, remove last offset and revert rotation of 180 if used, then return true
    if (direction == 0){
      if (currentPiece != 5){
      piecePos -= kickTablesCW[rot][4];
      }else{
        piecePos -= kickTablesCWI[rot][4]
      }
    }else{
      if (direction == 1){
        if (currentPiece != 5){
      piecePos -= kickTablesCCW[rot][4];
        }else{
        piecePos -= kickTablesCCWI[rot][4]
        }
      }else{
        piecePos -= x180Kicks[rot]
        rot += 2
        rot = rot%4
         board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
      }
        
      
    }
    return(true);
  }
}
function swapHold(){
  //Swaps the hold piece
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
  //Checks if there is a mino in front or behind the minos in the piece.
  edgeIndex = 0;
  tIndex = 0;
  for (var i = 0; i < 4; i++) {
    if (board[M[i]+1]> 0 && board[M[i]+1]< 10){
     if (!listContains(M,M[tIndex]+1)){
       append(collides,2);
     }
    }
    if (board[M[i]-1]>0&&board[M[i]-1]<10){
      if (!listContains(M,M[tIndex]-1)){
        append(collides,1);
      }
    }
   tIndex += 1;
  }
  //Check edges of board for a mino of the current piece
  while (edgeIndex < 220){
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
    //Adds previously placed minos onto the board
    board.splice(overwriteIndex[i],1,boardReset[overwriteIndex[i]])
  }
}
function hardDrop(){
  dropped = 1;
  for (var i = 0; i < 20; i++) {
    //Repeatedly moves the piece down until it hits the floor
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
  if (waitingForInput == 1){
  //Used when changing keybind.
    if (listContains(inputAssignments,keyCode)){    
      //detects if keybind is already used, if true unbinds the previous keybind
          inputNames[getIndex(inputAssignments,keyCode)].innerHTML = '&nbsp'
      inputAssignments.splice(getIndex(inputAssignments,keyCode),0,'')
    console.log(inputAssignments)
    }
    //Set the new keybind
    setKeybind()
    keyCode = null
    SDFTime = currentFrame
    pFrame = currentFrame
    pTime = millis()
    //Exit function
    return(1)
  }
  if (keyCode == inputAssignments[3]){
    //Set the delay for next down movement to 0 to start.
   SDFTime == 0
  }
  if (keyCode == inputAssignments[8]){
    //Stops the loop. Will eventually change functionality(eg go to menu) or remove
    noLoop();
  }
  if (keyCode == inputAssignments[1]){
    //Move left before DAS
    pFrame = currentFrame
       pTime = millis();
    moved = 1;
    edgeCollision();
    if (!listContains(collides,1)){
    piecePos -= 1;
    }
  }
  if (keyCode == inputAssignments[2]){
    //Move right before DAS
    pFrame = currentFrame
    pTime = millis();
    moved = 1;
    edgeCollision();
    if (!listContains(collides,2)){
    piecePos += 1;
    }
    
  }
  if (keyCode == inputAssignments[10]){
    //Hold
    swapHold();
  }
  if (keyCode == inputAssignments[7]){
    //Reset
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
  if (keyCode == inputAssignments[9]){
    //Hard Drop
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  piecePlaced();
    hardDrop();
  overwriteIndex.push.apply(overwriteIndex,M)
  overwriteIndex.sort();
    
  boardReset = board;
      grid();
  sevenBag();
  piecePos = 12;
  rot = 0;
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  }
  if (keyCode == inputAssignments[5]){
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
  if (keyCode == inputAssignments[4]){
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
  if (keyCode == inputAssignments[6]){
     rot += 2;
  rot  = rot%4;
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  rotCheck(2)
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  piecePlaced();
  }
  keyCode = null;
}
function ghostCollision(){
  //Returns false if the ghost collides with the floor. used to determine depth of ghost
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
  //Renders the ghost
  ghostM = [];
  ghostPos = floor(piecePos/10)*10;
    ghostDepth = (floor(ghostPos/10)-floor(piecePos/10))*10;
  while (ghostCollision()){
    ghostPos += 10;
    ghostDepth = (floor(ghostPos/10)-floor(piecePos/10))*10;
  }
  ghost = 1;
  mergeLists(board,Pieces[currentPiece][rot],piecePos+ghostDepth-11);
  ghost = 0;
}
function renderQueue(){
  //Renders the queue. Kind of like rendering the hold piece except this repeats 5 times
    Y = 0.5;
  tIndex2 = 1;
  for (var a = 0; a < 5; a++) {
      tIndex = 0;
      if (queue[tIndex2] < 5){
  X = 15.5;
  for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
    if (queueArray[queue[tIndex2]][tIndex] > 0){
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
  //Renders the grid using lines, not squares.
  stroke('rgba(255,255,255,0.5)')
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
  noStroke()
}
function grid(){
  for (var i = 0;i<4;i++){
    //Renders each of the 4 current minos
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
    //Renders each of the 4 current ghost minos
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
    //Iterates through the minos on the board and render them
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
      //Each piece is 2 high, so this does the top of the piece, then the bottom
      for (var J = 0; J < 3; J++) {
        //Renders each mino in the row
        if (holdPiece > -1){
        if (queueArray[holdPiece][tIndex] > 0){
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
    //This is for the pieces with an odd width, i o
    X = 0.5;
    for (var k = 0; k < 2; k++) {
      for (var l = 0; l < 4; l++) {
        if (queueArray[holdPiece][tIndex] > 0){
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
  //initializes the bag
}
function setup(){
  createCanvas(windowWidth-20,400)
  strokeWeight(1)
}
function windowResized() {
  resizeCanvas(windowWidth-30, 400);
}
function draw(){
  if (width < 400){
    //changes scale if window shrinks past a certain point.
  scale(width/400)
  }
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  piecePlaced();
  edgeCollision()
  currentFrame += 1;
  if (fullRows.length>0){
  while (fullRows.length>0){
    //Clears full lines
clearLine(fullRows[0]);
fullRows.splice(0,1)
    if (overwriteIndex == 0){
      //Checks if an all clear was performed
      //Starts the effects for an all clear if true
      allClearText.style.animation = 'none'
    allClearText.offsetHeight;
    allClearText.style.animation = null; 
    if (!allClearText.classList.contains('allClear')){
    allClearText.classList.add('allClear')
    }
    }
}
}
  if (keyIsDown(inputAssignments[3])){
    //All of these are for the various inputs.
    if (SDF > 0){
    if (floorCollision()){
      if ((currentFrame-SDFTime)%SDF == 0){
      piecePos+=10;
      }
    }
  }else{
    while (floorCollision()){
      piecePos+=10;
       mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
    }
  }
  }
  if (keyIsDown(inputAssignments[2])){
    if (millis()-pTime > DAS){
      edgeCollision();
        moved = 1;
      if (ARR > 0){
      if (!listContains(collides,2)){
        if ((currentFrame-pFrame)%ARR == 0){
          piecePos += 1;
        }
      }
    }else{
      while (!listContains(collides,2)){
        piecePos += 1
         mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
        edgeCollision()
      }
    }
    }
  }
  if (keyIsDown(inputAssignments[1])){
    if (millis()-pTime > DAS){
      edgeCollision();
        moved = 1;
      if (ARR > 0){
      if (!listContains(collides,1)){
        if ((currentFrame-pFrame)%ARR == 0){
          piecePos -= 1;
        }
      }
    }else{
      while (!listContains(collides,1)){
        piecePos -= 1
         mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
        edgeCollision()
      }
    }
    }
  }
  //Sets board to make sure all changes are applied
    board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  toppedOut()
  background(0)
  piecePlaced();
  boardReset = board;
  //Renders the elements
  ghostPiece();
  mergeLists(board,Pieces[currentPiece][rot],piecePos-1);
  grid();
  gridTest();
  renderQueue();
  renderHold();
}
