import { GUIManagement, guiManagement } from "../util/GUIManagement";
import { EventHandle } from "../util/EventHandle";

const main = new EventHandle();

const buttonOne = guiManagement.buttonOne;
const buttonTwo = guiManagement.buttonTwo;

buttonOne.addEventListener('click', () => {
    guiManagement.runButtonOne();
})

buttonTwo.addEventListener('click', () => {
    guiManagement.runButtonTwo();
})

document.body.onkeyup = function(e) {
    if (e.code == "Space") {
        main.skip();
    }
}

main.addAction(() => {
    guiManagement.setContent("你好啊")
}, 0)

main.addAction(() => {
    guiManagement.setContent("我要很久哦")
}, 4000)

main.addAction(() => {
    guiManagement.toggleButton()
    guiManagement.setButtonText(
        "不要選我",
        "你好啊"
    )
    guiManagement.chooseButtonOne(
        function() {
            guiManagement.setContent("你怎麽選我了？")
        }
    );
    guiManagement.chooseButtonTwo(
        function() {
            guiManagement.setContent("你好")
        }
    );
}, 4000)


main.start()