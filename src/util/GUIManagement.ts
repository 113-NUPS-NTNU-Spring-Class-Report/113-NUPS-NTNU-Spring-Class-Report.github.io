
export class GUIManagement
{

    public content: HTMLParagraphElement;
    public buttonOne: HTMLButtonElement;
    public buttonTwo: HTMLButtonElement;
    private actionOne!: Function;
    private actionTwo!: Function;

    constructor(guiManagementHTMLDocument: GUIManagementHTMLElement) {
        this.content = guiManagementHTMLDocument['content'],
        this.buttonOne = guiManagementHTMLDocument['buttonOne'],
        this.buttonTwo = guiManagementHTMLDocument['buttonTwo']
    }

    setContent(content: string): void {

        const data = content.split('')
        const container = this.content;

        if(container.innerHTML.split('').length > 0) {
            container.innerHTML = '';
        }

        let index = 0
        function writing() {
            if (index < data.length) {
                container.innerHTML += data[index ++];
                setTimeout(writing, 60);
            }
        }
        writing();

    };

    toggleButton(): void {
        if (this.buttonOne.disabled) {
            buttonOne.disabled = false;
            buttonTwo.disabled = false;
        } else {
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
        }
    }

    chooseButtonOne(action: () => void): void {
        this.actionOne = action;
    }

    chooseButtonTwo(action: () => void): void {
        this.actionTwo = action;
    }

    runButtonOne() {
        this.toggleButton()
        this.actionOne()
    }

    runButtonTwo() {
        this.toggleButton()
        this.actionTwo()
    }

    setButtonText(textOne: string, textTwo: string): void {
        this.buttonOne.innerText = textOne;
        this.buttonTwo.innerText = textTwo;
    }

}

class GUIManagementHTMLElement
{
    public content: HTMLParagraphElement;
    public buttonOne: HTMLButtonElement;
    public buttonTwo: HTMLButtonElement;

    constructor(
        content: HTMLParagraphElement,
        buttonOne: HTMLButtonElement,
        buttonTwo: HTMLButtonElement,
    ) {
        this.content = content;
        this.buttonOne = buttonOne;
        this.buttonTwo = buttonTwo;
    }
}

const content = document.querySelector<HTMLParagraphElement>('#content')!;
const buttonOne = document.querySelector<HTMLButtonElement>('#option-one')!;
const buttonTwo = document.querySelector<HTMLButtonElement>('#option-two')!;

const config = new GUIManagementHTMLElement(
    content,
    buttonOne,
    buttonTwo
);

export const guiManagement = new GUIManagement(config);
