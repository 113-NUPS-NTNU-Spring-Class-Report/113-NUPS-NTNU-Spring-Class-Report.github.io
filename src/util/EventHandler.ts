

export class EventHandler
{

    public eventArray: Array<any> = [];

    constructor(eventFunction: Function, delay: number)
    {
        const event = {
            function: eventFunction,
            delay: delay,
        }; 
        this.eventArray.push(event);
    }

    /**
     * Start the event process
     */
    public run ()
    {
        this.eventArray.forEach( (event, index) => {

            let delay = 

            setTimeout( () => {
                event.function();
            }, )

        });
    }

}