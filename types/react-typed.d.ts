// Ambient declaration for react-typed
declare module 'react-typed' {
    import { Component } from 'react';

    interface TypedProps {
        strings: string[];
        typeSpeed?: number;
        backSpeed?: number;
        backDelay?: number;
        startDelay?: number;
        loop?: boolean;
        loopCount?: number;
        showCursor?: boolean;
        cursorChar?: string;
        contentType?: 'html' | 'null';
        onComplete?: (self: unknown) => void;
        preStringTyped?: (arrayPos: number, self: unknown) => void;
        onStringTyped?: (arrayPos: number, self: unknown) => void;
        onLastStringBackspaced?: (self: unknown) => void;
        onTypingPaused?: (arrayPos: number, self: unknown) => void;
        onTypingResumed?: (arrayPos: number, self: unknown) => void;
        onReset?: (self: unknown) => void;
        onStop?: (arrayPos: number, self: unknown) => void;
        onStart?: (arrayPos: number, self: unknown) => void;
        onDestroy?: (self: unknown) => void;
        smartBackspace?: boolean;
        shuffle?: boolean;
        fadeOut?: boolean;
        fadeOutClass?: string;
        fadeOutDelay?: number;
        attr?: string;
        bindInputFocusEvents?: boolean;
        className?: string;
        style?: React.CSSProperties;
    }

    export class ReactTyped extends Component<TypedProps> {}
    export { ReactTyped as Typed };
}
