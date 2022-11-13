import fs from 'fs';
import path from 'path';

export const fetchData = (function(){
    try {
        const data: IProducts[] = JSON.parse(fs?.readFileSync(path.join(__dirname, '..', path.sep, '..', path.sep, '/database/database.json'), 'utf-8'));
        return data;
    } catch (error) {
        // Create database if it doesn't exist.
        fs.writeFileSync(path.join(__dirname, '..', path.sep, '..', path.sep, '/database/database.json'), JSON.stringify([]),'utf-8');
        const dataStore: IProducts[] = [];
        return dataStore;
    }
    
});


export const writeData = function(result: IProducts, dataStore: IProducts[]){
    dataStore.push(result)
    fs.writeFileSync(path.join(__dirname, '..', path.sep, '..', path.sep, '/database/database.json'),JSON.stringify(dataStore, null, 3),'utf-8');

}

export const writeUpdatedData = function(result: IProductUpdate []){
        fs.writeFileSync(path.join(__dirname, '..', path.sep, '..', path.sep, '/database/database.json'),JSON.stringify(result, null, 3),'utf-8');

}


/*********************************************Users Database************************************/

export const fetchUsersData = (function(){
    try {
        const data: IUser[] = JSON.parse(fs.readFileSync(path.join(__dirname, '..', path.sep, '..', path.sep, '/database/userDatabase.json'), 'utf-8'));
        return data;
    } catch (error) {
        // Create database if it doesn't exist.
        fs.writeFileSync(path.join(__dirname, '..', path.sep, '..', path.sep, '/database/userDatabase.json'), JSON.stringify([]),'utf-8');
        const dataStore: IUser[] = [];
        return dataStore;
    }
    
});


export const writeUsersData = function(result: IUser, userStore: IUser []){
    userStore.push(result)
    fs.writeFileSync(path.join(__dirname, '..', path.sep, '..', path.sep, '/database/userDatabase.json'), JSON.stringify(userStore, null, 3),'utf-8');

}