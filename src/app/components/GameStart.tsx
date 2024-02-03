"use client"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const GameStart = ({ setFlag, setWordList, ncourse, setLogoList }: { setFlag: any, setWordList: any, ncourse: number, setLogoList: any }) => {

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

            setLogoList([
                { logo: '/html-5.svg', name: 'html' }, { logo: 'css-3.svg', name: 'css' }
            ]);

        } else if (ncourse == 1) {
            setWordList([
                'function', 'variable', 'array', 'object', 'string',
                'number', 'boolean', 'undefined', 'null', 'let',
                'const', 'if', 'else', 'for', 'while',
                'do...while', 'switch', 'trycatch', 'throw', 'promise',
                'async', 'await', 'callback', 'event', 'addeventlistener',
                'removeeventlistener', 'dom', 'getelementbyid', 'queryselector', 'createelement',
                'appendchild', 'innerhtml', 'textcontent', 'json', 'fetch',
                'axios', 'consolelog', 'typeof', 'instanceof', 'this',
                'new', 'class', 'constructor', 'extends', 'super',
                'import', 'export', 'module', 'require', 'settimeout',
                'setinterval', 'clearinterval', 'clearinterval', 'map', 'filter',
                'reduce', 'foreach', 'find', 'findindex', 'concat',
                'slice', 'splice', 'math', 'date', 'regexp',
                'set', 'get', 'delete', 'has', 'proxy',
                'reflect', 'iterator', 'generator', 'symbol', 'templateliterals'
            ])

            setLogoList([
                { logo: '/javascript.svg', name: 'javasript' },
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

            setLogoList([
                { logo: '/react.svg', name: 'react' }, { logo: '/nextjs.svg', name: 'nextjs' },
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