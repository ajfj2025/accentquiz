type PictoProps = {
    src: string;
    onClick: () => void;
}

export default function Picto(props: PictoProps) {
    return (
        <div>
            <button onClick={props.onClick}>
                <img src={props.src} style={{
                    width: "300px",
                }} />
            </button>
        </div>
    );
}