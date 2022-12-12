const API_URL="http://localhost:8080/user/";
export async function loadUser() {
    const res = await fetch(API_URL);
    return await res.json();
    
   }

export async function findUserByID(id){
    const options = {method: 'GET'}; //cuando es metodo GET no es necesario especificarlo
    const res= await fetch(API_URL+id,options);
    return await res.json();
}

export async function deleteUserById(id){
    const options = {method: 'DELETE'}; //cuando es metodo GET no es necesario especificarlo
    const res= await fetch(API_URL+id,options);
    const text =await res.text();
    return text;
    
}

export async function saveUser(user){

    const options = {
        method: 'POST',
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(user)
      };
      
      const response = await fetch(API_URL, options);
      return await response.text();    
}