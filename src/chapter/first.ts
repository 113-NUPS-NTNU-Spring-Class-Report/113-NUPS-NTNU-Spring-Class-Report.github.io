import { GUIManagement, guiManagement } from "../util/GUIManagement";
import { EventHandle } from "../util/EventHandle";
import { OptionHandle } from '../util/OptionHandle'

// write down the event trigger and observer trigger 


// intro
guiManagement.toggleBackgroundImage();
guiManagement.toggleDialog();
guiManagement.toggleOptions();

const eventHandle = new EventHandle();

// branch 1
const branch1 = new EventHandle();

branch1.addAction(() => {
    guiManagement.toggleOptions();
    guiManagement.setContent("這裏到底是。。。？");
}, 0);

branch1.addAction(() => {
    guiManagement.setContent("我的身體在冰冷的地面上，再仔細地感受一下，地面上伴隨著逐漸變的强烈的震動。");
}, 4000);

branch1.addAction(() => {
    guiManagement.setOptions(
        [
            {
                text: '地面的震動我無法忽視，我的理智告訴我必須用盡全力起身。',
                event: () => {
                    
                }
            },
            {
                text: '我的身體好痛，肋骨好像刺穿了我的肺部。要不。。。就別起了。就這樣死去，也沒事吧。。。',
                event: () => {
                    guiManagement.toggleOptions();
                    branch2.start();
                }
            },
        ]
    );
    guiManagement.toggleOptions();
}, 4000);

// branch 2
const branch2 = new EventHandle();

branch2.addAction(() => {
    guiManagement.setContent("此時，大腦傳來陣痛感。一些零碎畫面逐漸在我腦海中浮現。");
}, 2000);

// Add action
eventHandle.addAction(() => {
    guiManagement.setTitle('Chp 1');
}, 0);

eventHandle.addAction(() => {
    guiManagement.toggleDialog();
    guiManagement.setContent('醒醒！快醒醒！');
}, 6000);

eventHandle.addAction(() => {
    guiManagement.setContent('我感受到一股力量在搖晃我的身體，耳朵也不時傳來焦慮的低語聲。');
}, 1000);

eventHandle.addAction(() => {
    guiManagement.setContent('我的眼前一片黑暗，而空氣中。。。似乎還迷茫著血腥味。。。我的大腦一片模糊，但我的第六感告訴我："我必須馬上起身！"');
}, 0);

eventHandle.addAction(() => {
    guiManagement.toggleOptions();
    guiManagement.setOptions(
        [
            {
                text: '搖晃我的是誰？不對！我應該在等等，先裝死。',
                event: () => {
                    branch1.start();
                }
            },
            {
                text: '我强撐著身體，在攙扶下勉强坐起。',
                event: () => {
                    guiManagement.toggleOptions();
                    guiManagement.setContent("此時，大腦傳來陣痛感。貌似有什麽畫面從我腦海中一閃而過，但我現在來不及多想。");
                }
            },
        ]
    );
}, 0);

// run event serial
eventHandle.start();