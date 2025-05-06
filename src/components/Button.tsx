// https://www.reddit.com/r/tailwindcss/comments/1ahaf1w/i_have_built_a_tailwind_css_button_collection/

interface ButtonProps {
    text: string
    onClick?: () => void
}

export function Button(props: ButtonProps) {
    return <button
        onClick={props.onClick}
        className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 shadow-lg shadow-neutral-500/20 transition active:scale-95">
        {props.text}
    </button>
}