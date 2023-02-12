
document.getElementById('optionType').addEventListener('change', (e) => {
    var lista = document.getElementById('optionType');
    var indiceSeleccionado = lista.selectedIndex;
    var opcionSeleccionada = lista.options[indiceSeleccionado];
    var valorSeleccionado = opcionSeleccionada.value;

    console.log(valorSeleccionado);

    if(valorSeleccionado == 'Protein') {
        document.getElementById('food').innerHTML = `
        <option value="Beef">Beef</option>
        <option value="Fish">Fish</option>
        <option value="Chicken">Chicken</option>
        <option value="Egg">Egg</option>
        `
    }
    else if(valorSeleccionado == 'Vianda') {
        document.getElementById('food').innerHTML = `
        <option value="Banana">Platano</option>
        <option value="Yuca">Yuca</option>
        <option value="Potato">Papa</option>
        <option value="Boniato">Boniato</option>
        `
    }
    else if(valorSeleccionado == 'Vegetable') {
        document.getElementById('food').innerHTML = `
        <option value="Tomatoes">Tomatoes</option>
        <option value="Avocados">Avocados</option>
        <option value="Cucumber">Cucumber</option>
        <option value="KidneyBean">Kidney Bean</option>
        <option value="Lettuce">Lettuce</option>
        <option value="Onion">Onion</option>
        `
    }
    else if(valorSeleccionado == 'Cereal') {
        document.getElementById('food').innerHTML = `
        <option value="Rice">Rice</option>
        <option value="Beans">Frijoles</option>
        <option value="Garbanzo">Garbanzo</option>
        <option value="Chicharo">Chicharo</option>
        `
    }
    else if(valorSeleccionado == 'Pasta') {
        document.getElementById('food').innerHTML = `
        <option value="Spaghetti">Spaghetti</option>
        `
    }
    else if(valorSeleccionado == 'Spice') {
        document.getElementById('food').innerHTML = `
        <option value="Garlic">Garlic</option>
        <option value="Chili">Chili</option>
        `
    }
    else if(valorSeleccionado == 'Fruit') {
        document.getElementById('food').innerHTML = `
        <option value="Marteño">Marteño</option>
        <option value="Guava">Guava</option>
        <option value="Mango">Mango</option>
        <option value="Tangerines">Tangerines</option>
        `
    }
    else if(valorSeleccionado == 'Other') {
        document.getElementById('food').innerHTML = `
        <option value="Internet">Internet</option>
        <option value="Oil">Oil</option>
        <option value="Cookie">Cokkie</option>
        `
    }

    e.preventDefault();
});



