"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Trans, useTranslation } from "react-i18next"

const GameOver = ({ setFlag, typedLettersCount, typingErrorsCount, completedWordsCount, setTypedLettersCount, setTypingErrorsCount, setCompletedWordsCount }: { setFlag: any, typedLettersCount: number, typingErrorsCount: number, completedWordsCount: number, setTypedLettersCount: any, setTypingErrorsCount: any, setCompletedWordsCount: any }) => {

    const { t } = useTranslation()
    const [score, setScore] = useState<number>(completedWordsCount * 10 + typingErrorsCount * -2 + typedLettersCount * 1)
    const postMessage = `あなたの推定エンジニアレベル💪${score}Lv.`

    const returnSelectCourse = () => {
        //初期化
        setTypedLettersCount(0)
        setTypingErrorsCount(0)
        setCompletedWordsCount(0)

        setFlag(1)
    }

    const returnTop = () => {
        //初期化
        setTypedLettersCount(0)
        setTypingErrorsCount(0)
        setCompletedWordsCount(0)

        setFlag(0)
    }

    return (
        <div className="border border-black h-[500px] rounded flex justify-center items-center flex-col">
            <h2 className="text-[18px] mb-3">{t('Estimated frontend engineer level')}</h2>
            <p className="text-[100px]"><span className="me-[10px]">💪</span>{score}Lv.</p>
            <ul className="flex justify-between mb-5">
                <li className="border-e border-dotted border-black p-3">
                    <p className="text-red-500">{t('Number of hits correctly')}</p>
                    <p className="text-end text-[20px]">{t('Number of times', { times: typedLettersCount })}</p>
                </li>
                <li className="border-e border-dotted border-black p-3">
                    <p className="text-red-500">{t('Number of times cleared')}</p>
                    <p className="text-end text-[20px]">{t('Number of times', { times: completedWordsCount })}</p>
                </li>
                <li className="p-3">
                    <p className="text-red-500">{t('Number of misses')}</p>
                    <p className="text-end text-[20px]">{t('Number of times', { times: typingErrorsCount })}</p>
                </li>
            </ul>
            <div className="flex gap-4">
                <Button className="bg-black text-white"><a
                    href={`http://twitter.com/share?url=yurukei-career.com&text=${postMessage}&via=yurukei20&hashtags=ハッシュタグのテキスト`}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                ><Trans
                        i18nKey="postResults"
                        values={{ X: '' }} // ここで X の値を空文字に設定
                        components={[<FontAwesomeIcon icon={faXTwitter} />]}
                    /></a>
                </Button>
                <Button className="bg-orange-300" onClick={returnTop}>{t('Return to top')}</Button>
                <Button className="bg-purple-300" onClick={returnSelectCourse}>{t('Return to select course')}</Button>
            </div>
        </div>
    )
}

export default GameOver