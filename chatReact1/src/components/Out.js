import firebase from '../util/firebase';

const auth = firebase.auth();

export default function Out() {
    return auth.currentUser && (
      <div className="w-full">
        <button className="absolute hover:shadow-xl hover:text-pink-900 transition-all duration-75 ease-in-out rounded-full p-2 bg-white signout-btn material-icons" onClick={() => auth.signOut()}>exit_to_app</button>
      </div>
    )
  }