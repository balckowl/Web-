import { Progress } from "@/components/ui/progress";
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from "react-i18next";


const Game = ({ wordList, setFlag, typedLettersCount, setTypedLettersCount, typingErrorsCount, setTypingErrorsCount, completedWordsCount, setCompletedWordsCount, isTypingSound }: { wordList: string[], setFlag: any, typedLettersCount: number, setTypedLettersCount: any, typingErrorsCount: number, setTypingErrorsCount: any, completedWordsCount: number, setCompletedWordsCount: any, isTypingSound: boolean }) => {

    //問題を手前のとこで設定する
    // const wordList: string[] = ['nextjs', 'vuejs', 'svelte', 'getserversideprops']
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [letterArray, setLetterArray] = useState<string[]>([])
    const [currentWord, setCurrentWord] = useState<number>(0)
    const [currentPosition, setCurrentPosition] = useState<number>(0)
    const [typingError, setTypingError] = useState<boolean>(false)
    const [timer, setTimer] = useState<number>(20);
    const [correctSteak, setCorrectSteak] = useState<number>(0)
    const typingSound = new Audio('/typingSound.mp3');
    const [showTimeBonus, setShowTimeBonus] = useState(false)
    const { t } = useTranslation();

    useEffect(() => {
        const timerId = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 1) {
                    clearInterval(timerId);
                    // タイマーが終了した後に状態を更新する
                    setTimeout(() => setFlag(4), 0);
                    return 0;
                } else {
                    return prevTimer - 1;
                }
            });
        }, 1000);
    
        // クリーンアップ関数
        return () => clearInterval(timerId);
    }, []);
    
    useEffect(() => {
        console.log(wordList[currentWord].split(''))

        //バラした文字をセットする
        setLetterArray(wordList[currentWord].split(''))
        //inputにフォーカスを当てる
        inputRef.current?.focus();
    }, [currentWord])

    useEffect(() => {
        //10文字連続で間違えなかったら、時間を延ばす
        if (correctSteak === 30) {
            setTimer(timer + 1)
            //リセット
            setCorrectSteak(0)
            setShowTimeBonus(true)
        }
    }, [correctSteak])

    // アニメーションが完了した後に実行する関数
    const handleAnimationComplete = () => {
        setShowTimeBonus(false);
    };

    const isCorrectTypedLetter = (e: any) => {
        //タイプ音がONかどうか
        if (isTypingSound) {
            // キーが押されたら音を鳴らす
            typingSound.play()
        }

        if (e.key === letterArray[currentPosition]) {
            //打つ文字をずらす
            setCurrentPosition(currentPosition + 1)
            //ミス判定を元に戻す
            setTypingError(false)
            //連続成功数を更新
            setCorrectSteak(correctSteak + 1)
            //打った文字数
            setTypedLettersCount(typedLettersCount + 1)

            if (currentPosition + 1 === letterArray.length) {
                //次の問題へ
                setCurrentWord(Math.floor(Math.random() * wordList.length))
                //文字位置を初期化
                setCurrentPosition(0)
                // クリアしたワード数を更新
                setCompletedWordsCount(completedWordsCount + 1)
            }

        } else {
            setTypingError(true)
            //間違えたのでリセット
            setCorrectSteak(0)
            //ミスの回数をカウント
            setTypingErrorsCount(typingErrorsCount + 1)
        }
    }

    return (
        <div className="border border-black h-[500px] rounded flex flex-col justify-between">
            <div className="flex items-center justify-between p-3">
                <div className="relative w-full">
                    <h2 className="text-[30px]">{t('timer', { timer: timer })}</h2>
                    <div className="absolute top-0 left-[120px]">
                        <AnimatePresence>
                            {showTimeBonus && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    onAnimationComplete={handleAnimationComplete}
                                    className="text-red-500"
                                >
                                    {t('+1 second')}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
                <Progress className="w-[60%]" value={correctSteak} max={30} />
            </div>
            <div className="flex items-center justify-center p-3 outline-none border-0"
                onKeyDown={(e) => isCorrectTypedLetter(e)}
                tabIndex={0}
                ref={inputRef}
            >
                <span className={`text-[60px] mb-[40px] text-green-500`}>
                    {wordList[currentWord].slice(0, currentPosition)}
                </span>
                {typingError ? (
                    <span className="text-[50px] mb-[40px] text-red-400">
                        {letterArray[currentPosition]}
                    </span>
                ) : (
                    <span className="text-[50px] mb-[40px] text-gray-400">
                        {letterArray[currentPosition]}
                    </span>
                )}
                <span className="text-[50px] mb-[40px] text-gray-200">
                    {wordList[currentWord].slice(currentPosition + 1, wordList[currentWord].length)}
                </span>
            </div>
            <ul className="flex items-center gap-4 border-t border-black p-3">
                <li className="flex gap-2 items-center">
                    <div>
                        <img src="/nextjs.svg" alt="" className="w-[30px] h-[30px]" />
                    </div>
                    <p>Nextjs</p>
                </li>
                <li className="flex gap-2 items-center">
                    <div>
                        <img src="/react.svg" alt="" className="w-[30px] h-[30px]" />
                    </div>
                    <p>React</p>
                </li>
            </ul>
        </div>
    )
}

export default Game