import { Rectangles } from "./Rectangles/Rectangles"

type CardInfoProps = {
    passwordStrength: string
}

export const CardInfo = (props: CardInfoProps) => {
    return (
        <section
            className={`
                h-16
                mt-5
                mb-5
                p-4
                flex
                items-center
                justify-between
                text-lg
                bg-black
            `}
        >
            <p className="text-gray font-bold">SEGURANÇA</p>

            <div className="flex h-full items-center">
                <span className="text-2xl font-bold mr-2">{(props.passwordStrength).toUpperCase()}</span>
                <Rectangles qtdRectangules={4} passwordStrength={props.passwordStrength}/>
            </div>

        </section>
    )
}