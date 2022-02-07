const existingNum = [5,234,51,61];
    const newNums = [6,1,8];
    var name="ibrahim";
//     console.log(name.charCodeAt(0)); //105 it is ascii number for i
//  var name="1";
//     console.log(name.charCodeAt(0)); //49 it is ascii number for i
//  var name="2";
//     console.log(name.charCodeAt(0)); //50 it is ascii number for i




// //this is how we can join multiple array objects
    var allNums = [existingNum,newNums]; //[[5, 234, 51, 61], [6, 1, 8]
      console.log(allNums);


//     //we can also use spread operators to combine array elements
    allNums = [...existingNum, ...newNums];
    console.log(allNums);//[5, 234, 51, 61, 6, 1, 8]


//      //we can also use spread operators to combine array elements
    allNums = [...existingNum, newNums];
    console.log(allNums);  //[5, 234, 51, 61, [6, 1, 8]]
    
allNums = [1000, ...newNums, true, ...existingNum, 'apple'];
    console.log(allNums);//[1000, 6, 1, 8, true, 5, 234, 51, 61, "apple"]