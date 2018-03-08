function refreshInventoryGui(){
  var invtitle = document.getElementById("inventorydivheader").textContent
  var invmode = Game.InventoryMode
  var target = Game.InventoryTarget
  if(InventoryVisible==true){
    refreshInventory()
    inventoryGUI(true,invtitle,invmode,target)
    inventoryGUI(false,invtitle,invmode,target)
  }
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function inventoryLength(){
  var clength = 0
  for(num=0;num<Object.keys(Game.Inventory).length;num++){
    if(Game.Inventory[num+1]!=null){
      clength = clength+1
    }
  }
  return(clength)
}

// function clone(obj) {
//     // Handle the 3 simple types, and null or undefined
//     if (null == obj || "object" != typeof obj) return obj;

//     // Handle Date
//     if (obj instanceof Date) {
//         var copy = new Date();
//         copy.setTime(obj.getTime());
//         return copy;
//     }

//     // Handle Array
//     if (obj instanceof Array) {
//         var copy = [];
//         for (var i = 0, len = obj.length; i < len; i++) {
//             copy[i] = clone(obj[i]);
//         }
//         return copy;
//     }

//     // Handle Object
//     if (obj instanceof Object) {
//         var copy = {};
//         for (var attr in obj) {
//             if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
//         }
//         return copy;
//     }

//     throw new Error("Unable to copy obj! Its type isn't supported.");
// }

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max+1 - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getHatByName(name){
  for(i=0;i<Object.keys(Hats).length;i++){
    if(Hats[Object.keys(Hats)[i]].Name==name){
      return Hats[Object.keys(Hats)[i]]
    }
  }
}

function save(){
  localStorage.clear()
  localStorage.setItem("CowboyPoints",Game.Money)
  for(num=0;num<Object.keys(Game.Cowboys).length;num++){
    var current = Game.Cowboys["Cowboy"+(num+1)]
    if(current.Equipped!=null){localStorage.setItem("Cowboy"+(num+1)+"Equipped",current.Equipped.Name)}else{localStorage.setItem("Cowboy"+(num+1)+"Equipped",null)}
    localStorage.setItem("Cowboy"+(num+1)+"PerClick",current.PerClick)
    localStorage.setItem("Cowboy"+(num+1)+"PerSecond",current.PerSecond)
  }
  for(num=0;num<Object.keys(Game.Inventory).length;num++){
    console.log(Game.Inventory[num+1].Name)
    localStorage.setItem("Inventory"+(num+1),Game.Inventory[num+1].Name)
  }
  console.log("Game Saved")
}

function load(){
  Game.Money = parseInt(localStorage.getItem("CowboyPoints"))
  Game.Inventory = []
  for(num=0;num<Object.keys(localStorage).length;num++){
    if(localStorage["Cowboy"+(num+1)+"PerClick"]!=null){
      if(Game.Cowboys["Cowboy"+(num+1)]==null){
        createCowboy()
      }
      if(Game.Cowboys["Cowboy"+(num+1)]!=null){
        Game.Cowboys["Cowboy"+(num+1)].Equipped = getHatByName(localStorage["Cowboy"+(num+1)+"Equipped"])
        Game.Cowboys["Cowboy"+(num+1)].PerClick = parseInt(localStorage["Cowboy"+(num+1)+"PerClick"])
        Game.Cowboys["Cowboy"+(num+1)].PerSecond = parseInt(localStorage["Cowboy"+(num+1)+"PerSecond"])
      }
    }
    if(localStorage["Inventory"+(num+1)]!=null){
      Game.Inventory[num+1] = getHatByName(localStorage["Inventory"+(num+1)])
    }
  }
  console.log("Game Loaded")
  refreshInventoryGui()
}

function eraseSave(){
  localStorage.clear()
}