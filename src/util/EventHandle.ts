

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

    start() {
        this.executeAction(0);
    }

    executeAction(index: number) {
        if (index < this.actions.length) {
            const { action, delay } = this.actions[index];
            setTimeout(() => {
                action();
                this.executeAction(index + 1);
            }, delay);
        }
    }

}