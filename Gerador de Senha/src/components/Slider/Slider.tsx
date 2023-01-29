import './Slider.css';

type SliderProps = {
    passwordLength: string
    setPasswordLength: (value: string) => void
}

export const Slider = (props: SliderProps) => 
{
    return (
        <section className="w-full">
           <label htmlFor='slider'
           className="w-full flex justify-between text-xl"
           >
            Quantidade Caracteres 
                <span
                className="text-3xl text-primaryColor font-bold"
                >
                    {props.passwordLength}
                </span>
            </label> 

            <input 
            id='slider'
            onChange={(e) => props.setPasswordLength(e.target.value)}
            type="range" 
            min="0" 
            max="20" 
            value={props.passwordLength}
            className={
                `
                appearance-none
                w-full 
                h-2
                mt-3 
                rounded-lg
                bg-black
                slider
                `
            }
            />
        </section>
    )
}