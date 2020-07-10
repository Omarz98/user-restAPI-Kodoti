const userData = require('../db/conntext')

class UserService{
    GetAllUser(){
        return userData;
    }

    GetIndex(id){
        return userData.findIndex( (data) => { return data.id.toString() === id.toString()});
    }

    GetUserById(id){
        let index = this.GetIndex(id);
        return userData[index];
    }

    CreateUser(data){
        userData.push(data);
        return "Usuario creado";
    }

    UpdateUserById(id, data){
        let index = this.GetIndex(id);
        userData[index].userName = data.userName;
        userData[index].email = data.email;
        userData[index].createData = data.createData;
        userData[index].password = data.password;
        return "Usuario actualizado";
    }

    DeleteUserById(id){
        let index = this.GetIndex(id);
        userData.splice(index,1);
        return "Usuario eliminado";
    }
    
}

module.exports = new UserService();