import React from 'react';
import ReactDOM from 'react-dom';
import configurestore from './store/store';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if(window.currentUser){
      store = configurestore({session:{currentUser: window.currentUser}});
    }else{
      store = configurestore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});
