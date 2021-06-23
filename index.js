
function myFunction()
{


     var a = document.getElementById("grade1").value;
     var b = document.getElementById("grade2").value;

     let pointGrade1 = parseFloat(a);
     let pointGrade2 = parseFloat(b);

     let gpa = (pointGrade1 + pointGrade2) / 2;



      if (gpa >= 2.5 )
      {
         document.getElementById("result").innerHTML = "Congrats! you are eligible to apply for a position with us! <br> Please visit the link below to continue!<br> https://uncw.edu/career/";
      }
      else{
         document.getElementById("result").innerHTML = "GPA too low to apply for a position with our organization.";
      }

   
      
}
