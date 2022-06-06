Design and iteration 

I started with Covey Quadrants，in my assessment 3 I also based on the function of covey quadrants and, in assessment 4, I realize that Kanhan board can clarify the content and task easily. "urgent","not urgent","important","not important". These function is the covey quadrants. In kanhan board, 

#Website prototype

<img width="786" alt="截屏2022-06-06 下午9 30 35" src="https://user-images.githubusercontent.com/100390021/172171304-79dbc108-ed02-4e82-b922-d5a02c29e187.png">

This the design I'd like to achieve.However I found it is very hard to reduction.





Improvements from tut

code improvement 
I combined what I learned from youtube with Week 5 tasklist and get a good reflection:https://youtu.be/m3StLl-H4CY
/* create todo  */
const todo_submit = document.getElementById("todo_submit");
todo_submit.addEventListener("click", createTodo);

//task name, duedate, completiontime, estimatetime and priority.The tasklist code leanred from DECO2017 week 5
function createTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const input_val2 = document.getElementById("duedate_input").value;
  const input_val3 = document.getElementById("completionTime_input").value;
  const input_val4 = document.getElementById("estimatedTime_input").value;
  const input_val5 = document.getElementById("priority_input").value;



//eable the conent show in the console log.
  const txt = document.createTextNode(input_val);
  const dte = document.createTextNode(input_val2);
  const ct = document.createTextNode(input_val3);
  const et = document.createTextNode(input_val4);
  const pr = document.createTextNode(input_val5);

  todo_div.appendChild(txt);
  todo_div.appendChild(dte);
  todo_div.appendChild(ct);
  todo_div.appendChild(et);
  todo_div.appendChild(pr);

  console.log(todo_div)
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");
  
  
  This is picture showing the task
  
  
<img width="1185" alt="截屏2022-06-06 下午9 42 08" src="https://user-images.githubusercontent.com/100390021/172172387-76147fd4-50a5-4c6f-a36e-76715fe11520.png">



It can move the task randomly with the user'needs


<img width="1313" alt="截屏2022-06-06 下午9 46 32" src="https://user-images.githubusercontent.com/100390021/172173348-d0ce5a9c-2100-4f6f-b24b-477f646860b9.png">




Pomodoro


<img width="324" alt="截屏2022-06-06 下午9 47 30" src="https://user-images.githubusercontent.com/100390021/172173511-401f771a-e9d1-4dcd-8d3d-843b4515abd8.png">



User can set the study time and break time freely, when times up, there have bell to mention user.





Music



<img width="975" alt="截屏2022-06-06 下午9 49 15" src="https://user-images.githubusercontent.com/100390021/172173767-05f5e8eb-5226-4b0a-8f76-242d5c2a89c5.png">


There have three music in the web, if you want listen more music you can click the Exellent music went to the youtube music list 




<img width="1305" alt="截屏2022-06-06 下午9 52 09" src="https://user-images.githubusercontent.com/100390021/172174241-87af0004-4284-4a09-8585-98c974cb6df3.png">



Reference code was show in the File.




Reference:

https://youtu.be/MtYR2vCs2R0
https://youtu.be/m3StLl-H4CY
https://youtu.be/ecT42O6I_WI
https://codepen.io/yoyo/pen/LYPmvPo
https://www.w3schools.com/html/html_favicon.asp
https://www.favicon.cc/
https://www.audiolibrary.com.co/

