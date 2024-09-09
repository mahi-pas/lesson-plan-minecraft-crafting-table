



function gatherMaterials() {
    // Generates the input from the text boxes
    let recipe = [];
    for (let i = 1; i <= 3; i++){
        let row = [];
        for (let j = 1; j <= 3; j++) {
            // Get element by id, like the name, gets elements by their id number. What is the for loop doing here?
            row.push(document.getElementById(`${i}${j}`).value); // This is string formatting, look up "Template Strings"
        }
        recipe.push(row);
    }
    console.log(recipe); // See this by using inspect element and clicking on the console tag
    craftedItem = craft(recipe);

    document.getElementById('output').innerText = craftedItem;
}

function craft(recipe) {
    // return a recipe, make your own

    return "Item Not Found";
}