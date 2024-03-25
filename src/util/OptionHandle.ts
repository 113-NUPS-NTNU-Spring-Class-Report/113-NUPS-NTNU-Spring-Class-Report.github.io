
export class OptionHandle
{

    public optionPoint = <number>0;

    addOptionPoint(point: number)
    {
        this.optionPoint += point;
    }

    calcuOptionPoint(): number
    {
        return this.optionPoint;;
    }

}