class Typescript {
    version: string

    constrctor(version: string) {
        this.version = version
    }

    info(name:string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

//
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }


//  same as


class Car {
    readonly numberOfWheel: number = 4;

    constructor(readonly model: string) {}
}

class Animal {
    protected voice: string = '';
    public color: string = 'black';
    private go() {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}