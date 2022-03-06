function getData(e) {
    event.preventDefault();

    let rb1 = document.getElementById('male')
    let rdb2 = document.getElementById('female')

    let nameEl = document.getElementById('here')








    let dateEl = new Date(document.getElementById('date').value);

    let male = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

    let female = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']


    let finalEl = dateEl.getDay();


    if (rb1.checked == true) {
        nameEl.innerText = "your name   is : " + (male[finalEl])


    } else if (rdb2.checked == true) {
        nameEl.innerText = "your name   is : " + (female[finalEl])


    }







}

function clearData() {



    let dateEl = new Date(document.getElementById('date').value == null)

}