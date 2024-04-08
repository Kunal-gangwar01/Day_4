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


// const submitForm = (e)=>{
//     e.preventDefault();

//     for(let i=0;i<5;i++){
//         console.log(e.target[i].value);
//     }
//     console.log(e);
// }


function submitForm(e) {
    e.preventDefault();
    const t = e.target;
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        const vl = t[i].value;
        console.log(ty, vl);
        if (ty == 'checkbox') {
            console.log(t[i].checked)
        }
    }
}

function submitForm(e) {
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    };
    for (let i = 0; i < t.length; i++) {
        const ty = t[i].type;
        if (ty != 'submit') {
            const vl = t[i].value;
            const nm = t[i].name;

            if (ty == 'checkbox' && t[i].checked) {
                res.hobbies.push(vl);
            }
            if (ty != 'checked') {
                res[nm] = vl;
            }
        }
    }
    console.log(res);
}




