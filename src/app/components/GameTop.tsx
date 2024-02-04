"use client"

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faQuestion } from "@fortawesome/free-solid-svg-icons"
import '../../lib/i18n';
import { DialogDescription } from "@radix-ui/react-dialog";

const GameTop = ({ setFlag, isTypingSound, setIsTypingSound, isBGM, setIsBGM }: { setFlag: any, isTypingSound: boolean, setIsTypingSound: any, isBGM: boolean, setIsBGM: any }) => {

    const [lang, setLang] = useState<string>('');
    const { t, i18n } = useTranslation();

    const handleStart = () => {
        setFlag(1);
    }

    useEffect(() => {
        setLang(localStorage.getItem('i18nextLng') || 'ja')
    }, [])

    useEffect(() => {
        //localstorageにデータを送る
        //bool値を送るときはjson化
        localStorage.setItem('typingSound', JSON.stringify(isTypingSound))
    }, [isTypingSound])

    useEffect(() => {
        //localstorageにデータを送る
        //bool値を送るときはjson化
        localStorage.setItem('isBGM', JSON.stringify(isBGM))
    }, [isBGM])

    useEffect(() => {
        if (lang === 'ja') {
            i18n.changeLanguage('ja')
        } else if (lang === 'en') {
            i18n.changeLanguage('en')
        }
    }, [lang])

    return (
        <div className="border border-black h-[500px] rounded flex justify-center items-center flex-col relative">
            <p>タイピングゲーム</p>
            <h2 className="text-[70px] text-center leading-[85px] mb-3 font-bold">Frontend Type<br /> Master</h2>
            <Button type="button" className="bg-green-500 text-white rounded w-[200px]" onClick={handleStart}>{t('Start')}</Button>
            <ul className="absolute bottom-2 right-2 flex gap-3">
                <li>
                    <Dialog>
                        <DialogTrigger className="bg-green-500 w-[30px] h-[30px] flex items-center justify-center text-white font-bold rounded-full shadow-lg cursor-pointer">
                            <FontAwesomeIcon icon={faQuestion} />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-4xl mb-3">ルール説明</DialogTitle>
                            </DialogHeader>
                            <div>
                                <div>
                                    <img src="/rule-2.jpg" alt="" />
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </li>
                <li>
                    <Dialog>
                        <DialogTrigger className="bg-green-500 w-[30px] h-[30px] flex items-center justify-center text-white font-bold rounded-full shadow-lg cursor-pointer">
                            <FontAwesomeIcon icon={faGear} />
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className="text-4xl mb-3">{t('Settings')}</DialogTitle>
                            </DialogHeader>
                            <ul className="flex flex-col gap-3 mb-[10px]">
                                <li className="flex items-center justify-between">
                                    <Label htmlFor="bgm">{t('BGM')}</Label>
                                    <Switch
                                        id="bgm"
                                        checked={isBGM}
                                        onCheckedChange={() => setIsBGM(!isBGM)}
                                    />
                                </li>
                                <li className="flex items-center justify-between">
                                    <Label htmlFor="airplane-mode">{t('Type Sound')}</Label>
                                    <Switch
                                        id="airplane-mode"
                                        checked={isTypingSound}
                                        onCheckedChange={() => setIsTypingSound(!isTypingSound)}
                                    />
                                </li>
                            </ul>
                            <ul className="flex flex-col gap-3">
                                <li className="flex items-center justify-between">
                                    <Checkbox id="ja" checked={lang === 'ja'} onCheckedChange={() => { setLang('ja') }} />
                                    <Label htmlFor="ja">{t('Japanese')}</Label>
                                </li>
                                <li className="flex items-center justify-between">
                                    <Checkbox id="en" checked={lang === 'en'} onCheckedChange={() => setLang('en')} />
                                    <Label htmlFor="en">{t('English')}</Label>
                                </li>
                            </ul>
                        </DialogContent>
                    </Dialog>
                </li>
            </ul>
        </div>
    )
}

export default GameTop
