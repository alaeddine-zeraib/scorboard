import React, { useState, useCallback, useRef, useEffect } from "react";

const AddPlayerForm = ({addPlayer}) => {
  const [value, setValue] = useState({
    new_player: "",
  });

  const handleValueChange = useCallback (
    (event) => {
      setValue({
        [event.target.name]: event.target.value,
      });
    }, []
  );

  const handleSubmit = useCallback (
    (event) => {
      event.preventDefault();
      if (value.new_player && value.new_player !== " ") {
        addPlayer(value.new_player);
        setValue({ new_player: "" });
      }
    }, [addPlayer, value]
  );

  const ref = useRef(null);

  useEffect(() => {
    if(ref.current) ref.current.focus();
  }, []);

    return (
      <form onSubmit={handleSubmit}>
        <input
          ref={ref}
          name="new_player"
          type="text"
          placeholder="Entre a player's name"
          onChange={handleValueChange}
          value={value.new_player}
        />
        <input type="submit" value="Add Player" />
      </form>
    );
}

export default AddPlayerForm;