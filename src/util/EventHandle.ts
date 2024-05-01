

export class EventHandle {

    public actions: { action: Function, delay: number }[] = [];
    public totalDelay = <number>0;

    constructor() {
        this.actions = [];
        this.totalDelay = 0;
    }

    addAction(action: () => void, delay: number) {
        this.totalDelay = this.totalDelay + delay;
        this.actions.push({ action, delay: this.totalDelay });
    }

    skip() {
        if (this.actions.length > 0) {
            this.executeAction(true)
        }
    } 

    start() {
        this.executeAction()
    }

    executeAction(skip: boolean = false) {

        if (0 < this.actions.length) {

            let { action, delay } = this.actions[0];

            if (skip !== false) {

                action();
                this.actions.shift();

            } else {

                setTimeout(() => {
                    action();
                    this.actions.shift();
                }, delay);

            }

            return;

        }

    }

}