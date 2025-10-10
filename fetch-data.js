

async function fetchUserData(){
    const apiURL ='https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');
    try{
       const response =await fetch(apiURL);
  
       const users = await response.json();
       console.log('Success', users)
       dataContainer.innerHTML = ''
       const userList = document.createElement('ul');
       users.forEach(user =>{
            const li = document.createElement('li');
            li.textContent = user.name;
            userList.appendChild(li);        
       })
       dataContainer.appendChild(userList);
    }
    catch(error){
        console.Error('Error', error)
    }



}
fetchUserData();