import { GUIManagement, game } from "../util/GUIManagement";
import { EventHandle } from "../util/EventHandle";

// #region

const buttonOne = game.buttonOne;
const buttonTwo = game.buttonTwo;

buttonOne.addEventListener('click', () => {
    game.runButtonOne();
})

buttonTwo.addEventListener('click', () => {
    game.runButtonTwo();
})

document.body.onkeyup = function(e) {
    if (e.code == "Space") {
        main.skip();
    }
}

document.querySelector("#content")!.addEventListener('click', () => {
    main.skip();
})

document.querySelector("#skip")!.addEventListener('click', () => {
    main.skip();
})

// #endregion

const main = new EventHandle();

const branch1 = new EventHandle();

const branch2 = new EventHandle();

    const branch21 = new EventHandle();

        const branch211 = new EventHandle();

            const branch2111 = new EventHandle();
            const branch2112 = new EventHandle();

                const branch21121 = new EventHandle();

                    const branch211211 = new EventHandle();
                    const branch211212 = new EventHandle();

                        const branch2112121 = new EventHandle();

                            const branch21121211 = new EventHandle();
                            const branch21121212 = new EventHandle();

                        const branch2112122 = new EventHandle();

                            const branch21121221 = new EventHandle();
                            const branch21121222 = new EventHandle();

                const branch21122 = new EventHandle();

                    const branch211221 = new EventHandle();

                        const branch2112211 = new EventHandle();

                            const branch21122111 = new EventHandle();

                                const branch211221111 = new EventHandle();
                                const branch211221112 = new EventHandle();

                            const branch21122112 = new EventHandle();

                        const branch2112212 = new EventHandle();

                            const branch21122121 = new EventHandle();
                            const branch21122122 = new EventHandle();

                    const branch211222 = new EventHandle();

                        const branch2112221 = new EventHandle();
                        const branch2112222 = new EventHandle();

        
        const branch212 = new EventHandle();

    const branch22 = new EventHandle();

        const branch221 = new EventHandle();
        
            const branch2211 = new EventHandle();
            const branch2212 = new EventHandle();

                const branch22121 = new EventHandle();

                    const branch221211 = new EventHandle();
                    const branch221212 = new EventHandle();
                    
                const branch22122 = new EventHandle();

        const branch222 = new EventHandle();

// main
// #region

main.addAction(() => {

    game.setContent("你睜開眼睛，發現周圍白茫茫的一片。對周圍的感覺除了寒冷就是疼痛，感覺自己受了很重的傷，思索片刻，你決定：")

    game.toggleButton()

    game.setButtonText(
        "還是睡下去吧..",
        "艱難起身"
    )

    game.chooseButtonOne(() => {
        branch1.start()
    })

    game.chooseButtonTwo(() => {
        branch2.start()
    })
})

// #endregion

// branch1
// #region

branch1.addAction(() => {
    game.setContent("不對啊你怎麼想的 這情況也敢睡？(遊戲結束 妳在雪地裏長眠了) 收錄劇情<span class='plot' title='開局即結束'>《落地成盒》</span>")

    game.toggleButton(false, true)

    game.setButtonText(
        "重新開始",
        ""
    )

    game.chooseButtonOne(() => {
        location.reload()
    })

    game.chooseButtonTwo(() => {
        // null
    })
})

// #endregion

// branch2
// #region

branch2.addAction(() => {

    game.toggleButton()

    game.setContent("'怎麼想都不對勁啊！！' 帶著這樣的想法妳拼盡掙扎起身，環顧四周。發現自己身處在一片雪地中，站起來後身上的疼痛感突然全部消失了。")
    
    main.addAction(() => {
        game.setContent("零星的記憶在腦海中浮現，這個世界已經被怪物侵占了，現在必須想辦法活下去，可附近一點食物也沒有。此時，你注意到前方不遠處貌似有炊煙升起...")
    })
    
    main.addAction(() => {
        game.setContent("(前往")
    })

    main.addAction(() => {

        game.setContent("到了目的地後，只見一個詭異的老者佇立在篝火前，篝火燒烤著幾大串的肉。但不知道是什麼生物的肉類，飢餓的驅使下，你")

        game.toggleButton()

        game.setButtonText(
            "撿起了一塊石頭 往老者的左側丟去以製造聲響", // branch 21
            "主動走出並向老者請求分點肉吃" // branch 22
        )

        game.chooseButtonOne(() => {
            branch21.start()
        })

        game.chooseButtonTwo(() => {
            
        })

    })
})

// #endregion

// branch21
// #region

branch21.addAction(() => {

    game.toggleButton()

    game.setContent("老者被聲響吸引並警惕地躲回屋內，而你趁機上前從篝火架上拿了一根最大的烤肉串便頭也不回地逃走了。")

    main.addAction(() => {
        game.setContent("待你覺得逃出安全距離後，開始大口地吃肉，口感像極了回憶裏曾經吃過的烤全羊，且肉鮮甜無比，當然也可能是你太餓了")
    })

    main.addAction(() => {

        game.setContent("吃完後你決定選擇一個方向持續前進，爭取找到一個適合的庇護所。可冬天看不見太陽，你分不清東南西北")

        game.toggleButton()

        game.setButtonText(
            "總感覺繼續往前走下去也沒有什麼希望..", // branch211
            "順著逃跑路線繼續嚮前走吧！" // branch221
        )

        game.chooseButtonOne(() => {
            branch211.start()
        })

        game.chooseButtonTwo(() => {
            branch221.start()
        })

    })
})

// #endregion

// branch211
// #region

branch211.addAction(() => {

    game.toggleButton()

    game.setContent("你選擇了往左轉後再繼續前行，一路上你看到了一些浮在空中的迷你人頭。雖然場面很詭異但他們沒有傷害你的意思，反而詢問你能不能一起組隊，他們能提供你一些幫助。")

    main.addAction(() => {
        game.setContent("由於記憶力的缺失你不敢冒險 深怕這是某種詐騙 被怪物詐騙的話未免也太丟人了 於是你婉拒了他們 他們也沒再多作強求 就這麽放你走了 貌似是個不起眼的小插曲 (絕對不是製作組時間不足刪減了這些小可愛的劇情)")
    })

    main.addAction(() => {
        game.setContent("就這樣從白天走到了黑夜，路過一條小溪，剛剛吃了烤肉的能力感到口乾舌燥。就這樣趴在溪邊大口灌水，接著便心滿意足的離開了。")
    })

    main.addAction(() => {
        game.setContent("一路上， 你看到過許許多多的怪物，有渾身裹著一層白漿的人形巨像，看似被吊在樹上求助但腳下明顯有一張深淵巨口的明目張膽型陷阱怪..")
    })

    main.addAction(() => {
        game.setContent("夜深了 你依舊找不到適合躲藏的地方 哪怕是一個山洞都沒見著 黑夜裏總感覺身邊有影子跟著 但每次警惕地回頭換來的卻只是無邊的寂靜 你決定")

        game.toggleButton()

        game.setButtonText(
            "開始狂奔尋找適宜的住所", // branch2111
            "躲在樹上靜觀其變" //
        )

        game.chooseButtonOne(() => {
            branch2111.start()
        })

        game.chooseButtonTwo(() => {

        })
    })

})

// #endregion

// branch2111
// #region

branch2111.addAction(() => {

    game.toggleButton()

    game.setContent("你發現周圍的光越來越暗，直到最後竟是看不見一絲光亮。且除了視覺外，感覺其他五感也被剝奪了，你聽不見任何聲音..")

    main.addAction(() => {
        game.setContent("甚至擊打自己也沒有絲毫觸感 巨大的絕望與恐懼包裹著你的內心 你感到身子越來越虛弱... ...")
    })

    main.addAction(() => {
        game.setContent("你死了(回到節點從白天走到黑夜)獲得怪物情報-弒月-隱藏夜習性怪物，具有剝奪五感的能力。以對方的恐懼與絕望作為鏈接點吸取生命力直至對方死亡，弱點是周圍明亮度越高能力越弱。")
    })

    main.addAction(() => {
        game.setContent("可隨身攜帶火摺子之類的物品進行有效的能力剋制，一旦失去能力效果弒月本身的物理攻擊能力並不強，凡胎人身都可以輕易擊敗他。<br><br>收錄劇情<span class='plot' title='被怪物殺死'>《好黑喔 好可怕喔》</span>")
    })
})

// #endregion

main.start();