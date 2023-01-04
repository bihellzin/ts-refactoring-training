export class Machine {
  constructor(public type: number, public machineName: string) {}

  // A refactor is a change that does not affect the
  // functionality of the code, so none of the business rules were changed.

  get name(): string {
    // Used object literal to get the machine name
    const nameByType = {
      0: 'bulldozer',
      1: 'crane',
      2: 'tractor',
      3: 'truck',
      4: 'car',
    };
    return this.machineName ? '' : nameByType[this.type]; // Used ternary operator to return a value from
    // the object literal only if this.machineName is a falsy value
  }

  get description(): string {
    let hasMaxSpeed = false;
    hasMaxSpeed = this.type === 3 || this.type === 4; // 3 and 4 are the only types of machines that have max speed
    // So i removed all the remaining logic

    // Used template string to format the description
    return ` ${this.color} ${this.name} [${this.getMaxSpeed(hasMaxSpeed)}].`;
  }

  get color(): string {
    // Removed the `color` variable and put it as default value in object literal.
    // Used object literal to get the color
    const colorByType = {
      0: 'red',
      1: 'blue',
      2: 'green',
      3: 'yellow',
      4: 'brown',
      default: 'white',
    };
    return colorByType[this.type] || colorByType['default']; // Used short circuit to return the default value
  }

  get trimColor(): string | null {
    // Removed the `let` from baseColor since i decided to use object literal
    // and used it as a const instead.
    const baseColorsByType = {
      0: 'red',
      1: 'blue',
      2: 'green',
      3: 'yellow',
      4: 'brown',
      default: 'white',
    };
    const baseColor =
      baseColorsByType[this.type] || baseColorsByType['default']; // Used short circuit to get the default value

    // Just removed the trimColor variable and changed to use early return
    if (this.type == 1 && !this.isDark(baseColor)) return 'white';
    if (this.type == 1 && this.isDark(baseColor)) return 'black';
    if (this.type == 2 && this.isDark(baseColor)) return 'gold';
    if (this.type == 3 && this.isDark(baseColor)) return 'silver';
    return '';
  }

  isDark(color: string): boolean {
    // Used an array with all the darkColors and used `some` array method to
    // check if the color passed to the function can be found in the array
    const darkColors = ['red', 'green', 'black', 'crimson'];

    return darkColors.some((darkColor) => color === darkColor);
  }

  getMaxSpeed(hasMax = true): number {
    // Removed the `type` because I already have this attribute available in my class
    // and changed the name and default value of `noMax` parameter to make it more concise
    // based on the `description` method of the class.
    // Also used early return and removed the `max` variable that was only be used to
    // reassign and return it the value. So i put the max initial value as default return value.
    // And remove the `absoluteMax` variable because it was not being used.
    if (!hasMax) {
      if (this.type === 0) return 80;
      if (this.type === 1) return 75;
      if (this.type === 2 || this.type === 4) return 90;
    }
    if (this.type === 2) return 60;
    return 70;
  }
}
