<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <script>

        //Random Color Generator

//Random Color Generator - Your method
function randomColor() {
    const arr = ['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];
    let result = '#'
    while(result.length <= 6){
        result += arr[Math.floor(Math.random() * arr.length)];
    }
    return result;
}

//Random Color Generator - the right way
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 2 ** 24).toString(16).padStart(0, 6);
}




    </script>
</body>

</html>