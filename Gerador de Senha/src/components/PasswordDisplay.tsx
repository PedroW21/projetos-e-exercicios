type PasswordDisplayProps = {
  inputValue: string;
};

export const PasswordDisplay = (props: PasswordDisplayProps) => {
  return (
    <div className="flex justify-between bg-darkerGray w-96 h-20">
      <input
        type="text"
        placeholder="P4$5W0rD!"
        value={props.inputValue}
        readOnly
        className={`
            focus:outline-none
            h-full
            w-5/6
            pl-4          
            text-whiteSmoked
            text-3xl
            font-bold
            bg-darkerGray
            placeholder:text-gray

            sm:max-sm:w-6/12
            `}
      />
      <button
      className="pr-4"
        onClick={() => {
          navigator.clipboard.writeText(props.inputValue);
        }}
      >
        <svg
          width="32"
          height="32"
          version="1.0"
          viewBox="0 0 512 512"
          className="fill-primaryColor active:fill-whiteSmoked"
        >
          <path d="M116.3 49.5c-17.5 4.8-31.7 19.6-35.2 36.7-.8 3.7-1.1 36.4-.9 106.5.3 100.4.3 101.2 2.4 103.9 3.9 5.3 7.1 6.9 13.4 6.9 6.3 0 9.5-1.6 13.4-6.9 2.1-2.7 2.1-3.7 2.6-104.6.5-100.9.5-101.9 2.6-104.6 1.1-1.5 3.3-3.7 4.8-4.8 2.7-2.1 3.8-2.1 88.6-2.6s85.9-.5 88.6-2.6c5.3-3.9 6.9-7.1 6.9-13.4 0-6.3-1.6-9.5-6.9-13.4-2.7-2.1-3.6-2.1-88.9-2.3-71.7-.2-87.1.1-91.4 1.2z" />
          <path d="M180.1 113.6c-16.9 4.5-30.1 18-34.6 35.1-2.3 8.7-2.2 270 0 278.8 4.5 17.2 17.9 30.5 35.2 35 8.6 2.2 206 2.2 214.6 0 17.3-4.5 30.7-17.8 35.2-35 1.3-5.2 1.5-22.8 1.5-139.5s-.2-134.3-1.5-139.5c-4.5-17.2-17.9-30.5-35.2-35-8.4-2.2-207-2.1-215.2.1zm212.5 33c1.5 1.1 3.7 3.3 4.8 4.8 2.1 2.7 2.1 3 2.1 136.6s0 133.9-2.1 136.6c-1.1 1.5-3.3 3.7-4.8 4.8-2.7 2.1-3.3 2.1-104.6 2.1s-101.9 0-104.6-2.1c-1.5-1.1-3.7-3.3-4.8-4.8-2.1-2.7-2.1-3.2-2.4-133.9-.1-72.2 0-132.6.3-134.4.7-4 4.9-9.1 9-10.9 2.4-1.1 21.5-1.3 103.7-1.1 99.9.2 100.7.2 103.4 2.3z" />
        </svg>
      </button>
    </div>
  );
};
