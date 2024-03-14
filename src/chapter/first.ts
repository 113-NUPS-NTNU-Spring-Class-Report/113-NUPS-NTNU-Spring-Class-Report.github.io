import { GUIManagement, guiManagement } from "../util/GUIManagement";

guiManagement.toggleBackgroundImage();
guiManagement.setTitle('測試 第一章節');
guiManagement.showTitle();
setTimeout( () => {
    guiManagement.setTitle('第二次修改内容');
    guiManagement.showTitle();
}, 7000)