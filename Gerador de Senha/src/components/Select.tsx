type SelectProps = {
  content: string
  id: string
  stateCheckbox: (id: string) => void
};

export const Select = (props: SelectProps) => {
  return (
    <div className="mt-3">
      <input
        id={props.id}
        type="checkbox"
        onClick={e => props.stateCheckbox(e.currentTarget.id)}
        className={`
                    
                    align-middle
                    w-5
                    h-5
                    mr-3
                  accent-primaryColor
                `}
      />
      <label htmlFor={props.id} className="text-xl align-middle">
        {props.content}
      </label>
    </div>
  );
};
