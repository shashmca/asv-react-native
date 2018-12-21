


//model
let tnr = { name: 'Nag' }

//service
let service = {
    doTeach: function () {
        console.log(this.name + " teaching .js");
    }
};

let teachBtn = document.getElementById('teach-btn')
// teachBtn.addEventListener('click', e => {
//     service.doTeach.call(tnr)
// })

teachBtn.addEventListener('click', service.doTeach.bind(tnr))