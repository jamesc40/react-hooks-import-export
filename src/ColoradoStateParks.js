import React from "react";
import howManyParks from "./parks/howManyParks";
import { 
  trees as parkTrees, 
  wildlife as parkWildlife,
} from './parks/RockyMountain'

function ColoradoStateParks() {

  console.log(parkTrees);
  parkWildlife();
  // RMFunctions.elevation();

  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;