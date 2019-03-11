import { cloneDeep } from "lodash";

import { FLAG_HEIGHT } from "./constants";

export const addTotalsAndFlagsToData = data =>
  data.map((data, ind) => {
    const { gold, silver, bronze } = data;
    const total = gold + silver + bronze;
    const flagStyle = { backgroundPositionY: `${ind * -FLAG_HEIGHT}px` };

    return { ...data, total, flagStyle };
  });

export const sortByValues = (data, primary, secondary) =>
  cloneDeep(data).sort((a, b) =>
    b[primary] === a[primary]
      ? b[secondary] - a[secondary]
      : b[primary] - a[primary]
  );
