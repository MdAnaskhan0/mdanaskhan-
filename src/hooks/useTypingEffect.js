import { useEffect, useState } from 'react';

/**
 * Types and deletes a list of words in a loop.
 * Returns the text that should currently be on screen.
 */
export const useRotatingText = (
    words,
    { typeSpeed = 70, deleteSpeed = 38, hold = 1600 } = {}
) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[index % words.length];
        let delay = deleting ? deleteSpeed : typeSpeed;

        if (!deleting && text === word) delay = hold;
        if (deleting && text === '') delay = 350;

        const timeout = setTimeout(() => {
            if (!deleting && text === word) {
                setDeleting(true);
            } else if (deleting && text === '') {
                setDeleting(false);
                setIndex((i) => (i + 1) % words.length);
            } else {
                setText(
                    deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
                );
            }
        }, delay);

        return () => clearTimeout(timeout);
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, hold]);

    return text;
};
