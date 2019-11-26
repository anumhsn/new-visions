const data = [
    {"_id":{"$oid":"5dc194991c9d4400004c640a"},"name":"Stuart Dent","grade": 6,

    "scores":[{"subject":"Math","value": 85},{"subject":"English","value": 65},{"subject":"Science","value": 70},{"subject":"Social Studies","value": 95}]},

    {"_id":{"$oid":"5dc1956a1c9d4400004c640c"},"name":"Christine Walls","grade": 7,"scores":[{"subject":"Math","value": 95},{"subject":"English","value": 80},{"subject":"Science","value": 85},{"subject":"Social Studies","value": 95}]},
    {"_id":{"$oid":"5dc196c71c9d4400004c640d"},"name":"Mirza Carney","grade": 8,"scores":[{"subject":"Math","value": 55},{"subject":"English","value": 85},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc1971e1c9d4400004c640e"},"name":"Ishmael Wade","grade": 6,"scores":[{"subject":"Math","value": 50},{"subject":"English","value": 90},{"subject":"Science","value": 95},{"subject":"Social Studies","value": 60}]},
    {"_id":{"$oid":"5dc197461c9d4400004c640f"},"name":"Aanya Legge","grade": 8,"scores":[{"subject":"Math","value": 75},{"subject":"English","value": 75},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 75}]},
    {"_id":{"$oid":"5dc197651c9d4400004c6410"},"name":"Elsie-Rose Ramirez","grade": 7,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 95},{"subject":"Science","value": 100},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc1979b1c9d4400004c6411"},"name":"Reanne Simons","grade": 6,"scores":[{"subject":"Math","value": 95},{"subject":"English","value": 75},{"subject":"Science","value": 60},{"subject":"Social Studies","value": 80}]},
    {"_id":{"$oid":"5dc198051c9d4400004c6412"},"name":"Amelia-Rose Mullins","grade": 7,"scores":[{"subject":"Math","value": 60},{"subject":"English","value": 90},{"subject":"Science","value": 90},{"subject":"Social Studies","value": 85}]},
    {"_id":{"$oid":"5dc198291c9d4400004c6413"},"name":"Shae Paterson","grade": 8,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 70},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc1984a1c9d4400004c6414"},"name":"Kailan Quintero","grade": 6,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 80},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 60}]},
    {"_id":{"$oid":"5dc198871c9d4400004c6415"},"name":"Rahim Williams","grade": 7,"scores":[{"subject":"Math","value": 95},{"subject":"English","value": 90},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 70}]},
    {"_id":{"$oid":"5dc199101c9d4400004c6416"},"name":"Davey Barrow","grade": 8,"scores":[{"subject":"Math","value": 50},{"subject":"English","value": 70},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc199561c9d4400004c6417"},"name":"Rosa Cervantes","grade": 6,"scores":[{"subject":"Math","value": 70},{"subject":"English","value": 80},{"subject":"Science","value": 90},{"subject":"Social Studies","value": 100}]},
    {"_id":{"$oid":"5dc199731c9d4400004c6418"},"name":"Aneeka Leal","grade": 7,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 70},{"subject":"Science","value": 75},{"subject":"Social Studies","value": 80}]},
    {"_id":{"$oid":"5dc199991c9d4400004c6419"},"name":"Helin Holder","grade": 8,"scores":[{"subject":"Math","value": 80},{"subject":"English","value": 75},{"subject":"Science","value": 70},{"subject":"Social Studies","value": 65}]},
    {"_id":{"$oid":"5dc199ba1c9d4400004c641a"},"name":"Zayn Bains","grade": 6,"scores":[{"subject":"Math","value": 65},{"subject":"English","value": 95},{"subject":"Science","value": 70},{"subject":"Social Studies","value": 85}]},
    {"_id":{"$oid":"5dc199d71c9d4400004c641b"},"name":"Monty Bevan","grade": 7,"scores":[{"subject":"Math","value": 75},{"subject":"English","value": 55},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 80}]},
    {"_id":{"$oid":"5dc199f61c9d4400004c641c"},"name":"Mia Hanson","grade": 8,"scores":[{"subject":"Math","value": 75},{"subject":"English","value": 75},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 60}]},
    {"_id":{"$oid":"5dc19a281c9d4400004c641d"},"name":"Ewan Rosario","grade": 6,"scores":[{"subject":"Math","value": 60},{"subject":"English","value": 90},{"subject":"Science","value": 55},{"subject":"Social Studies","value": 90}]},
    {"_id":{"$oid":"5dc19a531c9d4400004c641e"},"name":"Gino Dickerson","grade": 7,"scores":[{"subject":"Math","value": 75},{"subject":"English","value": 70},{"subject":"Science","value": 80},{"subject":"Social Studies","value": 65}]}
  ]

// takes in array of students as parameter and returns objects based on grade, containing grade and name
  function groupByGrade(arr){
    arr.sort((x, y) => (x.grade > y.grade) ? 1 : -1)
    students = arr, 
    keys = ['grade', 'name'], 
    studentGrade = students.map(a => Object.assign(...keys.map(b=>({[b]: a[b]}))))
    return studentGrade
}

// takes in array of student objects and return student with lowest grade average per grade
function findLowestAverages(arr){
    // initially set avg of grade 6 to 100, as that is the max grade
    let avg6 = 100;
    let avg7 = 100;
    let avg8 = 100; 
    let temp6 = 0;
    let temp7 = 0;
    let temp8 = 0;
    let names6 = [];
    let names7 = [];
    let names8 =[];
    for (let i=0; i <arr.length; i++ ){
        if(arr[i].grade===6){
            for (let r=0; r < arr[i].scores.length; r++){
                temp6 += (arr[i].scores[r].value)/arr[i].scores.length;
           }
            names6.push(arr[i].name)
            if(temp6<avg6){
                avg6 = temp6
                names6.pop();
                names6.push(arr[i].name)

            }
            else{
                names6.pop();
            }
            temp6=0;
            
        }
        if(arr[i].grade===7){
            for (let r=0; r < arr[i].scores.length; r++){
                temp7 += (arr[i].scores[r].value)/arr[i].scores.length;
                
           }
           names7.push(arr[i].name)
            if(temp7<avg7){
                avg7 = temp7
                names7.pop();
                names7.push(arr[i].name)
            }
            else{
                names7.pop();
            }
            temp7=0;
        }
        if(arr[i].grade===8){
            for (let r=0; r < arr[i].scores.length; r++){
                temp8 += (arr[i].scores[r].value)/arr[i].scores.length;    
           }
           names8.push(arr[i].name)
            if(temp8<avg8){
                avg8 = temp8    
                names8.pop();
                names8.push(arr[i].name)
            }
            else{
                names8.pop();
            
            }
            temp8=0;
        }  
    }
    const lowestAvgs = [{'grade': 6, 'name': names6[names6.length-1],'average': avg6},{'grade': 7, 'name': names7[names7.length-1], 'average': avg7},{'grade': 8, 'name': names8[names8.length-1], 'average': avg8}]    
    return lowestAvgs
}

console.log(groupByGrade(data));
console.log(findLowestAverages(data));
