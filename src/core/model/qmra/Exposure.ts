import {GenericObject} from '../genericObject/GenericObject';
import IExposure from './Exposure.type';
import uuid from 'uuid';

class Exposure extends GenericObject<IExposure> {
  get id() {
    return this._props.id;
  }

  get name() {
    return this._props.name;
  }

  get type() {
    return this._props.type;
  }

  get value() {
    return this._props.value;
  }

  get min() {
    return this._props.min;
  }

  get max() {
    return this._props.max;
  }

  get mode() {
    return this._props.mode;
  }

  get mean() {
    return this._props.mean;
  }

  public static fromDefaults() {
    return new Exposure({
      id: uuid.v4(),
      name: 'New Exposure',
      type: 'value',
      value: 0,
      min: 0,
      max: 0,
      mode: 0,
      mean: 0
    });
  }

  public static fromObject(obj: IExposure) {
    return new Exposure(obj);
  }

  public toPayload() {
    if (this.type === 'triangle') {
      return {
        name: this.name,
        type: this.type,
        min: this.min,
        max: this.max,
        mode: this.mode,
        mean: this.mean
      };
    }
    return {
      name: this.name,
      type: this.type,
      value: this.value
    }
  }
}

export default Exposure;
