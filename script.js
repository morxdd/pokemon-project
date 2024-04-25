async function fetchPokemon() {
    let pokemonId = document.getElementById('pokemonId').value;
    let pokemonPic = document.getElementById('pokemonPic');
    let pokemonName = document.getElementById('pokemonName');
    let errorMessage = document.getElementById('errorMessage');
    console.log(pokemonId);
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
            // window.alert(data.name);
            errorMessage.innerHTML = '';
            pokemonName.textContent = data.name;
            pokemonPic.src = data.sprites.front_default;
        } else {
            errorMessage.innerHTML = 'undefind';
            pokemonName.textContent = '';
            pokemonPic.src = '';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        errorMessage.textContent = 'Failed to fetch Pokémon data. Please check your network connection and try again.';
        pokemonName.textContent = '';  // 清空名字
        pokemonPic.src = '';  // 清空圖片
    }
}
