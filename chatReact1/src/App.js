import firebase from './util/firebase';

import SignIn from './components/SignIn';

import Out from './components/Out';

import Main from './components/Main';

import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();



function App() {
  const [user] = useAuthState(auth);
    return (
      <div className="App border-bg h-screen">
        <Out />
        <section className="flex justify-center items-center h-screen">
          {user ? <Main />  : <SignIn />}
        </section>
      </div>
    );
}

export default App;