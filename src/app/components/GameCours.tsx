import { useTranslation } from "react-i18next";

const GameCours = ({ ncourse, setNcourse, setFlag }: { ncourse: number, setNcourse: any, setFlag: any }) => {

    const { t } = useTranslation()

    return (
        <div className="border border-black h-[500px] rounded flex items-center justify-center flex-col">
            <h2 className="mb-[70px]">{t('Please select a course')}</h2>
            <div className="grid grid-cols-10 w-full">
                <ul className="col-start-2 col-span-8 flex flex-col gap-3">
                    <li className="flex border border-black rounded items-center p-3 gap-4 hover:bg-red-200 cursor-pointer" onClick={() => { setNcourse(0); setFlag(2) }}>
                        <div>
                            <img src="/html-5.svg" alt="" className="w-[60px] h-[60px]" />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <p>{t('easy')}</p>
                                <p>{t('Frontend beginner course')}</p>
                            </div>
                            <div>
                                <p>HTML, CSS</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex border border-black rounded items-center p-3 gap-4 hover:bg-red-200 cursor-pointer" onClick={() => { setNcourse(1); setFlag(2) }}>
                        <div>
                            <img src="/javascript.svg" alt="" className="w-[60px] h-[60px]" />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <p>{t('nomarl')}</p>
                                <p>{t('Frontend intermediate course')}</p>
                            </div>
                            <div>
                                <p>HTML, CSS, JS</p>
                            </div>
                        </div>
                    </li>
                    <li className="flex border border-black rounded items-center p-3 gap-4 hover:bg-red-200 cursor-pointer" onClick={() => { setNcourse(2); setFlag(2) }}>
                        <div>
                            <img src="/react.svg" alt="" className="w-[60px] h-[60px]" />
                        </div>
                        <div className="flex items-center justify-between w-full">
                            <div>
                                <p>{t('hard')}</p>
                                <p>{t('Frontend senior course')}</p>
                            </div>
                            <div>
                                <p>React, Nextjs</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GameCours