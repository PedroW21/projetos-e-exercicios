type RectanglesProps = {
  qtdRectangules: number
  passwordStrength: string
};


const paintedRectangles = (passwordStrength: string, index: number) => {

  if(passwordStrength === 'forte' && index <= 3) return 'bg-green-500 border-green-500';

  if(passwordStrength === 'medio' && index <= 2) return 'bg-yellow-400 border-yellow-400'

  if(passwordStrength === 'fraco' && index <= 1) return 'bg-orange-600 border-orange-600';

  if(passwordStrength === 'muito fraco' && index === 0) return 'bg-red-600 border-red-600';

};

export const Rectangles = (props: RectanglesProps) => {

  return (
    <>
      {[...Array(props.qtdRectangules)].map((e, i) => (
        <div
          key={i}
          className={`
            ml-1 
            px-1 
            h-full 
            border-2 
            ${props.passwordStrength ? paintedRectangles(props.passwordStrength, i) : 'border-white bg-transparent'}
            `}
        ></div>
      ))}
    </>
  );
};
