import {Point} from 'geojson';
import {IDataDropperObject} from '../../../services/dataDropper/DataDropper.type';
import FileDataSource from './FileDataSource';
import {IDateTimeValue} from './Sensor.type';
import SensorDataSource from './SensorDataSource';

export interface ISensor {
    id: string;
    name: string;
    geolocation: Point;
    parameters: ISensorParameter[];
}

export interface ISensorParameter {
    id: string;
    type: string;
    description: string;
    dataSources: IDataSource[];
}

export type DataSource = FileDataSource | SensorDataSource;
export type IDataSource = ISensorDataSource | IFileDataSource;

export type IFileDataSource = IReducedFileDataSource & IFetchDataSource;
export type ISensorDataSource = IReducedSensorDataSource & IFetchDataSource;

export interface IReducedSensorDataSource {
    id: string;
    url: string;
}

export interface IReducedFileDataSource {
    id: string;
    file: IDataDropperObject;
}

export interface IFetchDataSource {
    fetching?: boolean;
    fetched?: boolean;
    error?: any;
    data?: IDateTimeValue[] | null;
}

export interface IDateTimeValue {
    timeStamp: number;
    value: number;
}

export interface ISensorData {
    url: string;
}

export interface IServerSensorData {
    date_time: string;

    [key: string]: number | string;
}
