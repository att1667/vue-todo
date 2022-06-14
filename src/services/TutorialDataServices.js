// CRUD에 필요한 함수 만들어줌
import firebase from "@/firebase";
const db = firebase.collection("/tutorials");

class TutorialDataService {
    gettAll() {
        return db;
    }
    create(tutorial) {
        return db.add(tutorial);
    }
    update(id, value) {
        return db.doc(id).update(value);
    }
    delete(id) {
        return db.doc(id).delete();
    }
}

export default new TutorialDataService();