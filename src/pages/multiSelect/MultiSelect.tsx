import React, { useState } from "react";

const mockData = [
  { name: "Afghanistan", code: "AF" },
  { name: "land Islands", code: "AX" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "American Samoa", code: "AS" },
  { name: "AndorrA", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Anguilla", code: "AI" },
  { name: "Antarctica", code: "AQ" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
];

const MultiSelect = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const handleSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked === true) {
      setSelected([...selected, e.target.name]);
    } else {
      const arrSelected = selected.filter(
        (select: any) => select !== e.target.name
      );
      setSelected([...arrSelected]);
    }
  };

  return (
    <div>
      <h1>Multi Select</h1>
      <h4>{selected.length} selected</h4>
      {mockData.map((country) => {
        return (
          <div style={{ textAlign: "left" }} key={country.code}>
            <input
              type="checkbox"
              onChange={(e) => handleSelected(e)}
              value={country.code}
              name={country.code}
            />
            <p>{country.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MultiSelect;
