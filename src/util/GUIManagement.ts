
export class GUIManagement
{

    public content: HTMLParagraphElement;
    public buttonOne: HTMLButtonElement;
    public buttonTwo: HTMLButtonElement;
    public image: HTMLImageElement;
    private actionOne!: Function;
    private actionTwo!: Function;

    constructor(guiManagementHTMLDocument: GUIManagementHTMLElement) {
        this.content = guiManagementHTMLDocument['content'],
        this.buttonOne = guiManagementHTMLDocument['buttonOne'],
        this.buttonTwo = guiManagementHTMLDocument['buttonTwo']
        this.image = guiManagementHTMLDocument['image']
    }

    setContent(content: string): void {

        const data = content.split('')
        const container = this.content;
        container.innerHTML = ""

        if(container.innerHTML.split('').length > 0) {
            container.innerHTML = '';
        }

        let tag: boolean = false;
        let tagContent = '';
        let loop = true;

        const writing = () => {

            if (loop === false) {
                return 
            }

            for (let index = 0; index < data.length; index++) {

                if(index >= data.length - 1) {
                    loop = false;
                }

                console.log(data[index], data[index] === "<" || tag === true)

                // are html tag
                if(data[index] === "<" || tag === true){

                    if (data[index] === ">") {
                        tag = false
                    } else {
                        tag = true;
                    }
                    
                    tagContent += data[index];
                    console.log(tagContent)

                } else if (data[index] === ">" && tag === false) {

                    container.innerHTML += tagContent
                    console.log(container.innerHTML)
                    tagContent = ''
                    
                } else {
    
                    container.innerHTML += data[index];
                    setTimeout(writing, 5);

                }

                // console.log(tagContent)
            }

            // container.innerHTML = content;
        }

        writing();
    };

    toggleButton(one: boolean | null = null, two: boolean | null = null): void {

        if (one !== null && two !== null) {
            buttonOne.disabled = one;
            buttonTwo.disabled = two;
        } else {

            if (this.buttonOne.disabled == true || this.buttonTwo.disabled == true) {
                buttonOne.disabled = false;
                buttonTwo.disabled = false;
            } else {
                buttonOne.disabled = true;
                buttonTwo.disabled = true;
            }

        }

    }

    chooseButtonOne(action: () => void): void {
        this.actionOne = action;
    }

    chooseButtonTwo(action: () => void): void {
        this.actionTwo = action;
    }

    runButtonOne() {
        this.actionOne()
    }

    runButtonTwo() {
        this.actionTwo()
    }

    setButtonText(textOne: string, textTwo: string): void {
        this.buttonOne.innerText = textOne;
        this.buttonTwo.innerText = textTwo;
    }

    setImage(src: string) {
        image.src = `/image/game/${src}`;
    }

}

class GUIManagementHTMLElement
{
    public content: HTMLParagraphElement;
    public buttonOne: HTMLButtonElement;
    public buttonTwo: HTMLButtonElement;
    public image: HTMLImageElement;

    constructor(
        content: HTMLParagraphElement,
        buttonOne: HTMLButtonElement,
        buttonTwo: HTMLButtonElement,
        image: HTMLImageElement
    ) {
        this.content = content;
        this.buttonOne = buttonOne;
        this.buttonTwo = buttonTwo;
        this.image = image;
    }
}

const content = document.querySelector<HTMLParagraphElement>('#content')!;
const buttonOne = document.querySelector<HTMLButtonElement>('#option-one')!;
const buttonTwo = document.querySelector<HTMLButtonElement>('#option-two')!;
const image = document.querySelector<HTMLImageElement>('#img')!;

const config = new GUIManagementHTMLElement(
    content,
    buttonOne,
    buttonTwo,
    image
);

export const game = new GUIManagement(config);
