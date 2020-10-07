import React from "react";
import { DropdownItem } from "reactstrap";

const CityData = ({city}) => {
return <DropdownItem>{city.cityName}</DropdownItem>;
};
export default CityData;
