var form = document.getElementById('formGenerator');




function formGenerator(e) {

    var PersonName = document.getElementById('PersonName').value;
    var photo = document.getElementById('photo').value;
    var birthday = document.getElementById('birthday').value;
    var initial = document.getElementById('initial').value;
    var placet = document.getElementById('placet').value;
    var rg = document.getElementById('rg').value;
    var cpf = document.getElementById('cpf').value;
    var motherName = document.getElementById('motherName').value;
    var fatherName = document.getElementById('fatherName').value;
    var infos = [PersonName, photo, birthday, initial, placet, rg, cpf, motherName, fatherName];

    var txtPersonName = document.getElementById('txt-person-name');

    console.log("DATA === > ", infos);

    if (infos.value == "") {
        console.log('no-info');

        txtPersonName.innerHTML = "PersonName";
        console.log()

        return false;

    } else {
        console.log('info');
        return false
    }

    e.preventDefault();
}

function generateNewCard() {


}