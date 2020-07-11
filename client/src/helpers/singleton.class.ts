export default class Singleton {
    private static instance: Singleton;

    public static getInstance() {
        if(!Singleton.instance) {
            Singleton.instance = new this;
        }

        return Singleton.instance;
    };
}