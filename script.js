async function fetchUsers() {
  //função para puxar API
  const usr = await fetch("https://6597ee73668d248edf23ba81.mockapi.io/User");
  const users = await usr.json();
  return users;
}

async function renderAllUsers() {   //Função para renderizar
  const users = await fetchUsers(); // Lista de usuarios já chamando a função fatchUsers
  const caixaPesquisa = document.getElementById('caixaPesquisa'); // Corrigido para 'caixaPesquisa'
  const searchName = caixaPesquisa.value.toLowerCase();  
  const filteredUsers = users.filter(user => user.name.toLowerCase().startsWith(searchName));
  const usersContainer = document.getElementById("usersContainer"); //container onde os usuários serão renderizados

  usersContainer.innerHTML = ""; //só para limpar o conteúdo

  // Itera sobre a lista de usuários para criar elementos HTML e adicioná-los ao container
  for (const user of filteredUsers) {
    const userDiv = document.createElement("div"); // Cria um elemento div para cada usuário
    const imageEl = document.createElement("img"); // Cria uma tag img para cada usuario
    imageEl.src = user.avatar;  //adiciona imagem a tag criada acima
    userDiv.appendChild(imageEl);
    const userInfoDiv = document.createElement("div");
    userInfoDiv.textContent = `Nome: ${user.name}, Email: ${user.email}`;
    userDiv.appendChild(userInfoDiv);
    usersContainer.appendChild(userDiv);
  }
}


  // Adicione um listener de evento para chamar renderAllUsers quando o conteúdo do input mudar
  document.getElementById('caixaPesquisa').addEventListener('input', renderAllUsers);

  
  renderAllUsers();