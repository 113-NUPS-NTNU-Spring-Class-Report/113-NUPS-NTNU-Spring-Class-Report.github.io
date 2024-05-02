
export class EventHandle {

    public actions: { action: Function, delay: number }[] = [];
    public totalDelay = <number>0;

    constructor() {
        this.actions = [];
        this.totalDelay = 0;
    }

    addAction(action: () => void, delay?: number) {
        this.totalDelay = this.totalDelay;
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

                this.actions.shift();
                action();

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