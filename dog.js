function calcAge()
{
    var h_age=document.getElementById('human_age').value;
    var d_age;
    if(Number(h_age)<=21)
    {
        
        age=Number(Number(h_age)/10.5);
        ageInMonths=(age-parseInt(age))*12;
    }
    else
    {
        if(h_age>65)
        {
            document.getElementById('display_msg').style.display="block";
        }
        else
        {
            document.getElementById('display_msg').style.display="none";
        }
        age=Number(2+(Number(h_age)-21)/4);
        ageInMonths=(age-parseInt(age))*12;
    }
    
    document.getElementById('dog_age').value=parseInt(age) +" Years "+parseInt(ageInMonths)+" Months";
}