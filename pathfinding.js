var targetFound = false; //init goal
var world=[]; //init world
var move = 1; //first move

for(i=0;i<10;i++){
    let arr=[]
    for(j=0;j<10;j++){
        arr.push({move: 0,path: []})
    }
    world.push(arr)
}

world[0][1].move = "C";//location of character
world[9][9].move = "T";//location of target



while(!targetfound){
    //do the searching
    for(let i =0; i<world.length; i++){
        for(let j = 0; j< world[i].length; j++){
            ///////WRITE THIS CODE
        }
    }

}




function check(target, origin, move){   //target and origin are [ i , j ]
    //verify target exists in world
    if(world[0].length -1 < target[1] || (world.length -1 < target[0])){
        return;
    } 
    if(world[target[0][target[1]]].move == "C"){
        targetFound = true;
        world[target[0][target[1]]].path == [origin[0],origin[1]];
        return;
    }
    if(world[target[0]][target[1]].move == 0){ //has not been checked before
        world[target[0]][target[1]].move = move;
        world[target[0]][target[1]].path = [origin[0],origin[1]];
    }
    

}

/*
check([9,8], [9,9], move)
check([8,9], [9,9], move)
check([10,9], [9,9], move)
check([9,10], [9,9], move)
*/

