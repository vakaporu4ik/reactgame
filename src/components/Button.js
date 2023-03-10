import "./Button.css";

export function Button({ children, onClick, disabled }) {
  return (
    <button disabled={disabled} onClick={onClick} className="button">
      {children}
    </button>
  );
}

// const abc = true
// const a = 1
{
  /* <Button disabled="hello world" />;
<Button disabled={"hello world"} />;

<Button disabled={(event) => {}} />;

<Button disabled />;
<Button disabled={true} />;

<Button>
  Hello
  <div>world</div>
</Button>;
<Button children={["Hello", <div>world</div>]} />; */
}

// children: ["Hello",  <div>world</div>]
