type T_props = {
  label: string;
  value: boolean;
  change: React.Dispatch<React.SetStateAction<boolean>>;
};

function ToggleState(props: T_props) {
  return (
    <div>
      <label>
        {`${props.label}: `}
        <input
          type="checkbox"
          checked={props.value}
          onChange={(event) => props.change((previous) => !previous)}
        />
      </label>
    </div>
  );
}

export { ToggleState };
