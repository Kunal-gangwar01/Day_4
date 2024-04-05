// console.log(res);
// div[0].innerHTML = "<p>Hello<p/>";

//how to remove the tag in html

// const  res =document.querySelector('div');
// const  c =document.querySelector('p:nth-of-type(2)');

// res.removeChild(c);

// function getInfo (e){
//     console.log("btn Clicked")
//     console.log(e);
//     const d = document.querySelector("div");//on click on button write the paragraph--
//     d.append("My name is kunal");
// e.target.setAttribute('style','color')
// e.target.style.backgroundColor = 'green';
// e.target.style.color = 'red';
// }

// const firstNameChange = (e) =>
//  {
//     console.log(e.target.value);
// }
const submitForm = (e)=>{
    e.preventDefault();
    for(let i=0;i<6;i++){
        console.log(e.target[i].value);

    }
    console.log(e);
}

