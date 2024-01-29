import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const GameStart = ({ setFlag, setWordList, ncourse }: { setFlag: any, setWordList: any, ncourse: number }) => {

    const { t } = useTranslation()
 
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            setFlag(3)
        }
    };

    useEffect(() => {
        if (ncourse == 0) {
            setWordList([
                'html', 'css', 'div', 'h1', 'href', 'backgroundcolor',
                'margin', 'padding', 'flexbox', 'grid', 'fontfamily',
                'textalign', 'border', 'id', 'class', 'header', 'footer',
                'main', 'section', 'article', 'aside', 'nav',
                'ul', 'ol', 'li', 'a', 'p', 'span', 'img', 'src',
                'alt', 'table', 'th', 'tr', 'td', 'mediaquery',
                'animation', 'transform', 'transition', 'boxshadow',
                'hover', 'active', 'focus', 'pseudoclass', 'pseudoelement',
                'viewport', 'responsive', 'flex', 'justifycontent',
                'alignitems', 'float', 'clear', 'display', 'position',
                'zindex', 'opacity', 'lineargradient', 'rgba',
                'em', 'rem', 'vh', 'vw', 'calc', 'var'
            ]);

        } else if (ncourse == 2) {
            setWordList([
                'react', 'component', 'props', 'state', 'context',
                'hooks', 'usestate', 'useeffect', 'usecontext', 'usereducer',
                'usecallback', 'usememo', 'useref', 'useimperativehandle', 'uselayouteffect',
                'functionalcomponent', 'classcomponent', 'lifecycle', 'render',
                'virtualdom', 'jsx', 'fragment', 'key', 'ref',
                'propdrilling', 'higherordercomponent', 'contextapi', 'memoization',
                'forwardref', 'suspense', 'lazy', 'errorboundary', 'portals',
                'profiler', 'strictmode', 'fiberalgorithm', 'reconciliation', 'hooksapi',
                'customhooks', 'usehistory', 'uselocation', 'useparams', 'usenavigate',
                'reactrouter', 'link', 'route', 'switch', 'reactdom',
                'createref', 'createcontext', 'createref', 'cloneelement', 'children',
                'memo', 'purecomponent', 'syntheticevent', 'redux', 'flux'
            ]);
        }

        // キーボードイベントのリスナーを追加
        window.addEventListener('keydown', handleKeyDown);

        // コンポーネントがアンマウントされる際にイベントリスナーを削除
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="border border-black h-[500px] rounded flex justify-center items-center flex-col">
            <h2>{t('Press Enter to start the game')}</h2>
        </div>
    )
}

export default GameStart