import React from 'react';
import ReactDOM from 'react-dom';
import configurestore from './store/store';
import Root from './components/root';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if(window.currentUser){
      store = configurestore({session:{currentUser: window.currentUser}});
    }else{
      store = configurestore();
    }
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});
