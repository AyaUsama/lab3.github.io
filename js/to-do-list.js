
document.getElementById("add-task").addEventListener("click", myFunction);
var i=0;
var j='A';
var  delTask="mmm";
function allStorage() {
        var archive = [];
        for (let i = 0; i<localStorage.length; i++) {
            archive[i] = localStorage.getItem(j+i);
console.log(archive,i);

            var para = document.createElement("P");
	        para.setAttribute("id", i);
	        var t = document.createTextNode( archive[i]);
	        para.appendChild(t);
	        document.getElementById("tdl-list").appendChild(para);

	        var btn = document.createElement("BUTTON");
	        btn.setAttribute("id", j+i);
	        var t = document.createTextNode("X");
	        btn.appendChild(t);
	        console.log(btn)
	        btn.addEventListener("click", function(){
						    localStorage.removeItem(j+i);
						    console.log(document.getElementById("tdl-list"),document.getElementById(i),i)
						    document.getElementById("tdl-list").removeChild(document.getElementById(i));
						    document.getElementById("tdl-list").removeChild(document.getElementById(j+i));
						
	         });
	        document.getElementById("tdl-list").appendChild(btn);
	        // i++;
           }


        }


allStorage();

function myFunction() {
	localStorage.setItem(j+i,document.getElementById("new-task").value);

	var para = document.createElement("P");
	para.setAttribute("id", i);
	var t = document.createTextNode(localStorage.getItem(j+i));
	para.appendChild(t);
	document.getElementById("tdl-list").appendChild(para);

	var btn = document.createElement("BUTTON");
	btn.setAttribute("id", j+i);
	var t = document.createTextNode("X");
	btn.appendChild(t);
	console.log(btn)
	btn.addEventListener("click", function(){
					  i--;
					 // delTask=document.getElementById(i).value;
					  //console.log(delTask);
					 // afterDel(delTask);
					 
                
                     //console.log(delTask);
                     
					console.log(document.getElementById("tdl-list"),document.getElementById(i),i)
					document.getElementById("tdl-list").removeChild(document.getElementById(i));
					document.getElementById("tdl-list").removeChild(document.getElementById(j+i));
                     
					localStorage.removeItem(j+i);

	});
	document.getElementById("tdl-list").appendChild(btn);
	i++;

	//return i;
}
function clearLocal() {
        localStorage.clear();
    } 

 
//clearLocal();
/*function afterDel(delTask)
{

	var para = document.createElement("P");
	para.setAttribute("id", i);
	var t = document.createTextNode(delTask);
	para.appendChild(t);
	document.getElementById("del-list").appendChild(para);

	console.log(delTask);

	//i++;


}*/