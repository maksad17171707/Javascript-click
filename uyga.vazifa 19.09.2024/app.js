document.addEventListener('DOMContentLoaded', function () {  
    const mainTitle = document.getElementById('mainTitle');  
    const button = document.getElementById('styleButton');  
    let isStyled = false;  

    button.addEventListener('click', function () {  
        console.log('Button clicked!');  
        if (!isStyled) {  
            mainTitle.style.color = 'red';  
            casio.style.textAlign = 'center';
            button.style.backgroundColor = 'yellow';
            button.style.color = 'black'; 
            document.querySelectorAll('ul li').forEach((li, index) => {  
                li.style.color = index === 0 ? 'red' : index === 1 ? 'blue' : 'green';  
            });  
        } else {   
            mainTitle.style.color = 'black';  
            casio.style.textAlign = 'initial';
            button.style.backgroundColor = 'initial';
            button.style.color = 'initial';
            document.querySelectorAll('ul li').forEach((li) => {  
                li.style.color = 'black';  
            });  
        }  
        isStyled = !isStyled;  
    });  
});