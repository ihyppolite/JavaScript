import firebase from '../util/firebase';

const auth = firebase.auth();

export default function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
      }
    
      return (
        <div className="flex flex-col h-screen items-center justify-center">
          <button className="mt-auto bg-white outline-none focus:outline-none p-2 m-3 border-b-4 border-gray-500 hover:bg-gray-200 hover:border-gray-500 transition-all duration-75 ease-in-out rounded inline-flex items-center" onClick={signInWithGoogle}>
            <span className="block">Sign In With Google</span>
          </button>
        </div>
      )
}