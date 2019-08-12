import {LineString, Point, Polygon} from 'geojson';
import Uuid from 'uuid';
import BoundingBox from '../../geometry/BoundingBox';
import {ICells} from '../../geometry/Cells.type';
import {GeoJson} from '../../geometry/Geometry.type';
import GridSize from '../../geometry/GridSize';
import {Cells, Geometry} from '../index';
import {
    BoundaryType,
    IBoundary,
    IBoundaryFeature,
    IBoundaryImportData, IObservationPointImportData,
    ISpValues
} from './Boundary.type';
import ConstantHeadBoundary from './ConstantHeadBoundary';
import {IConstantHeadBoundary} from './ConstantHeadBoundary.type';
import DrainageBoundary from './DrainageBoundary';
import {IDrainageBoundary} from './DrainageBoundary.type';
import EvapotranspirationBoundary from './EvapotranspirationBoundary';
import {IEvapotranspirationBoundary} from './EvapotranspirationBoundary.type';
import GeneralHeadBoundary from './GeneralHeadBoundary';
import {IGeneralHeadBoundary} from './GeneralHeadBoundary.type';
import HeadObservationWell from './HeadObservationWell';
import {IHeadObservationWell} from './HeadObservationWell.type';
import {Boundary, LineBoundary} from './index';
import {IObservationPoint} from './ObservationPoint.type';
import RechargeBoundary from './RechargeBoundary';
import {IRechargeBoundary} from './RechargeBoundary.type';
import RiverBoundary from './RiverBoundary';
import {IRiverBoundary} from './RiverBoundary.type';
import WellBoundary from './WellBoundary';
import {IWellBoundary} from './WellBoundary.type';

export default abstract class BoundaryFactory {

    public static availableTypes = ['chd', 'drn', 'evt', 'ghb', 'hob', 'rch', 'riv', 'wel'];

    public static fromObject = (obj: IBoundary): Boundary => {
        let type;
        if (obj.type === 'Feature') {
            type = obj.properties.type;
        }

        if (obj.type === 'FeatureCollection') {
            obj.features.forEach((feature: IBoundaryFeature | IObservationPoint) => {
                if (feature.properties.type !== 'op') {
                    type = feature.properties.type;
                }
            });
        }

        if (type) {
            switch (type) {
                case 'chd':
                    return new ConstantHeadBoundary(obj as IConstantHeadBoundary);
                case 'drn':
                    return new DrainageBoundary(obj as IDrainageBoundary);
                case 'evt':
                    return new EvapotranspirationBoundary(obj as IEvapotranspirationBoundary);
                case 'ghb':
                    return new GeneralHeadBoundary(obj as IGeneralHeadBoundary);
                case 'hob':
                    return new HeadObservationWell(obj as IHeadObservationWell);
                case 'rch':
                    return new RechargeBoundary(obj as IRechargeBoundary);
                case 'riv':
                    return new RiverBoundary(obj as IRiverBoundary);
                case 'wel':
                    return new WellBoundary(obj as IWellBoundary);
                default:
                    throw new Error('BoundaryType ' + type + ' not implemented yet.');
            }
        }

        throw new Error('BoundaryType ' + type + ' not implemented yet.');
    };

    public static fromImport = (obj: IBoundaryImportData, boundingBox: BoundingBox, gridSize: GridSize) => {
        const type = obj.type;

        const id = Uuid.v4();
        const name = obj.name;
        const geometry = obj.geometry;
        const layers = obj.layers;
        const spValues = obj.sp_values;
        const cells = Cells.fromGeometry(Geometry.fromGeoJson(obj.geometry), boundingBox, gridSize).toObject();

        const boundary = BoundaryFactory.createNewFromProps(type, id, geometry, name, layers, cells, spValues);

        if (boundary instanceof LineBoundary && obj.ops) {
            boundary.cells.calculateValues(boundary, boundingBox, gridSize);
            obj.ops.forEach((op: IObservationPointImportData) => {
                boundary.addObservationPoint(Uuid.v4(), op.name, op.geometry, op.sp_values);
            });

            return boundary;
        }

        if (boundary instanceof WellBoundary) {
            boundary.wellType = obj.well_type;
        }

        if (boundary instanceof EvapotranspirationBoundary && obj.nevtop) {
            boundary.nevtop = obj.nevtop;
        }

        if (boundary instanceof RechargeBoundary && obj.nrchop) {
            boundary.nrchop = obj.nrchop;
        }

        return boundary;
    };

    public static createNewFromProps(type: BoundaryType, id: string, geometry: GeoJson, name: string,
                                     layers: number[], cells: ICells, spValues: ISpValues) {
        switch (type) {
            case 'chd':
                return ConstantHeadBoundary.create(id, geometry as LineString, name, layers, cells, spValues);
            case 'drn':
                return DrainageBoundary.create(id, geometry as LineString, name, layers, cells, spValues);
            case 'evt':
                return EvapotranspirationBoundary.create(id, geometry as Polygon, name, layers,
                    cells, spValues, 1);
            case 'ghb':
                return GeneralHeadBoundary.create(id, geometry as LineString, name, layers, cells, spValues);
            case 'hob':
                return HeadObservationWell.create(id, geometry as Point, name, layers, cells, spValues);
            case 'rch':
                return RechargeBoundary.create(id, geometry as Polygon, name, layers, cells,
                    spValues, 1);
            case 'riv':
                return RiverBoundary.create(id, geometry as LineString, name, layers, cells, spValues);
            case 'wel':
                return WellBoundary.create(id, geometry as Point, name, layers, cells, spValues);
            default:
                throw new Error('BoundaryType ' + type + ' not implemented yet.');
        }
    }

    public static valuePropertiesByType(type: BoundaryType) {
        switch (type) {
            case 'chd':
                return ConstantHeadBoundary.valueProperties();
            case 'drn':
                return DrainageBoundary.valueProperties();
            case 'evt':
                return EvapotranspirationBoundary.valueProperties();
            case 'ghb':
                return GeneralHeadBoundary.valueProperties();
            case 'hob':
                return HeadObservationWell.valueProperties();
            case 'rch':
                return RechargeBoundary.valueProperties();
            case 'riv':
                return RiverBoundary.valueProperties();
            case 'wel':
                return WellBoundary.valueProperties();
            default:
                throw new Error('BoundaryType ' + type + ' not implemented yet.');
        }
    }

    public static geometryTypeByType(type: BoundaryType) {
        switch (type) {
            case 'chd':
                return ConstantHeadBoundary.geometryType();
            case 'drn':
                return DrainageBoundary.geometryType();
            case 'evt':
                return EvapotranspirationBoundary.geometryType();
            case 'ghb':
                return GeneralHeadBoundary.geometryType();
            case 'hob':
                return HeadObservationWell.geometryType();
            case 'rch':
                return RechargeBoundary.geometryType();
            case 'riv':
                return RiverBoundary.geometryType();
            case 'wel':
                return WellBoundary.geometryType();
            default:
                throw new Error('BoundaryType ' + type + ' not implemented yet.');
        }
    }
}
