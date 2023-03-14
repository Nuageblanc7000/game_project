export default function NextButton({handleClick, content}) {
    return (
        <button
            onClick={handleClick}
            className="block mx-auto btn btn-success my-4"
        >
            {content}
        </button>
    )
}