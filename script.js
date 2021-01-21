var form = document.getElementById('formGenerator').value;
var PersonName = document.getElementById('PersonName');
var photo = document.getElementById('photo').value;
var birthday = document.getElementById('birthday').value;
var initial = document.getElementById('initial').value;
var placet = document.getElementById('placet').value;
var rg = document.getElementById('rg').value;
var cpf = document.getElementById('cpf').value;
var motherName = document.getElementById('motherName').value;
var fatherName = document.getElementById('fatherName').value;


function formGenerator(e) {
    alert(PersonName.value);

    e.preventDefault();
}