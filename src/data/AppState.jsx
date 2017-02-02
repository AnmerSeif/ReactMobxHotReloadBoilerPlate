import { observable } from 'mobx';

class Message{
}


class AppState {
    @observable hello = "Hello, world!"; //

    constructor()
    {

    }

}

export default AppState;