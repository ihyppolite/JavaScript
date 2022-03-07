import firebase from '../util/firebase';

import ChatMessage from './ChatMessage';

import {useEffect, useState} from 'react';

const auth = firebase.auth();

export default function Main() {

    const [formValue, setFormValue] = useState(''); //valeur par default

    const [messages, setMessages] = useState();

    const sendMessage = (e) => {
        //stopper la propagation de l'event
        e.preventDefault();
    
        const { displayName, uid} = auth.currentUser;
    
        //insertion dans firebase
        firebase.database().ref('messages').push({
            user: displayName,
            body: formValue,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            uid: uid
        });

    
        //vider le champ de saisie
        setFormValue('');
        
    }

    useEffect(() => {
        //référence à la table Todo de firebase
        const msgRef = firebase.database().ref('messages');
 
        msgRef.on('value', (snapshot) => { //snapshot va représenter un enregistrement
 
             const msgs = snapshot.val(); //acces aux valeurs contenues dans snapshot
 
             const msgTemp = []; //tableau temporaire
 
             for (let id in msgs ) {
                 msgTemp.push({ id, ...msgs[id]}); //ajout de l' enregistrement de la tâche dans le tableau temporaire
             }
 
             //set du tableau
             setMessages(msgTemp);


        });
 
    }, []);


    return (
        <div className="chat-bg w-full sm:w-2/3 p-2 rounded">
            <div className="overflow-y-auto h-screen-90">
            {messages
                ? messages.map((msg, index) => <ChatMessage msg={msg} key={index} />)
              : ''}
            </div>
            <form onSubmit={sendMessage} className="pt-3 w-full inline-flex">
                <input className="rounded-3xl px-3 w-full py-1 outline-none focus:shadow" value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Say something" />
                <button className="material-icons p-2 mx-2 bg-white rounded-full transition-all duration-75 ease-in-out text-xl" type="submit">send</button> 
            </form>
        </div>
    )
  }