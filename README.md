#configjs

The program is a function argument checker and default value generator   
###How it works:
* * *
**it is very simple.The function get argument list from a pattern, and check the properties in the argument.**
###Usage
* * *
To embed the script into your page,use the code below:   
*`<script src=""></script>`*   
And use in your script:
```javascript
function al(args){
  var args={
    message:["Hello world",false]
  }
  var a=testConfig(this.args);
  alert(a.message);
}
al();//will be "Hello world"
al({message:"Foobar"});//will be Foobar
al("Foobar");//no property called message in "Foobar" so comes the default:Hello world
```
with `testConfig` method
###References
* * *
####prototype of the function
```javascript
function testConfig(config,initial){
}
```
####explaination
#####config
your arguments(it must fit the form of initial)
#####initial
your pattern(it can auto give value)
######Format
```javascript
var initial={
  name:[value,Boolean(required)],
  name2:[value2,Boolean(required2)],
  name3...
}
```
###supporting
 - [x] pattern
 - [x] exception
 - [ ] rich extending API
 - [x] console.log error recording
 - [ ] String pattern
 - [x] Auto value fill   

> A good job!
