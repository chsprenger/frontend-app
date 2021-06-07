import {Array2D} from '../../../../../core/model/geometry/Array2D.type';
import {ICells} from '../../../../../core/model/geometry/Cells.type';
import {Polygon} from 'geojson';
import {defaultSoilmodelParameters} from '../../../../../scenes/t03/defaults/soilmodel';

export const eSoilmodel = {
    layers: [
        {
            id: '9c48d404-fedb-446d-bab2-10631c5ba79a',
            name: 'Top Layer',
            description: '',
            number: 0,
            layavg: 0,
            laytyp: 0,
            laywet: 0,
            parameters: [
                {
                    name: 'top',
                    value: [
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 0, 0, 0, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
                        [1, 1, 0, 0, 0, 0, 1, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                    ]
                },
                {
                    name: 'botm',
                    value: [
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                    ]
                },
                {
                    name: 'hk',
                    value: [
                        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                        [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
                    ]
                },
                {
                    name: 'hani',
                    value: [
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                    ]
                },
                {
                    name: 'vka',
                    value: [
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
                    ]
                },
                {
                    name: 'ss',
                    value: [
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
                        [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5]
                    ]
                },
                {
                    name: 'sy',
                    value: [
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
                        [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15]
                    ]
                }
            ]
        }
    ],
    properties: {
        parameters: defaultSoilmodelParameters,
        relations: [
            {
                id: 'r1',
                layerId: '9c48d404-fedb-446d-bab2-10631c5ba79a',
                zoneId: 'd088274e-1864-4a57-a0f5-08183e59c855',
                parameter: 'top',
                value: 1,
                priority: 0
            },
            {
                id: 'r2',
                layerId: '9c48d404-fedb-446d-bab2-10631c5ba79a',
                zoneId: 'd088274e-1864-4a57-a0f5-08183e59c855',
                parameter: 'botm',
                value: 0,
                priority: 0
            },
            {
                id: 'r3',
                layerId: '9c48d404-fedb-446d-bab2-10631c5ba79a',
                zoneId: 'd088274e-1864-4a57-a0f5-08183e59c855',
                parameter: 'hk',
                value: 10,
                priority: 0
            },
            {
                id: 'r4',
                layerId: '9c48d404-fedb-446d-bab2-10631c5ba79a',
                zoneId: 'd088274e-1864-4a57-a0f5-08183e59c855',
                parameter: 'hani',
                value: 1,
                priority: 0
            },
            {
                id: 'r5',
                layerId: '9c48d404-fedb-446d-bab2-10631c5ba79a',
                zoneId: 'd088274e-1864-4a57-a0f5-08183e59c855',
                parameter: 'vka',
                value: 1,
                priority: 0
            },
            {
                id: 'r6',
                layerId: '9c48d404-fedb-446d-bab2-10631c5ba79a',
                zoneId: 'd088274e-1864-4a57-a0f5-08183e59c855',
                parameter: 'ss',
                value: 2.0e-5,
                priority: 0
            },
            {
                id: 'r7',
                layerId: '9c48d404-fedb-446d-bab2-10631c5ba79a',
                zoneId: 'd088274e-1864-4a57-a0f5-08183e59c855',
                parameter: 'sy',
                value: 0.15,
                priority: 0
            },
            {
                id: 'r8',
                layerId: '9c48d404-fedb-446d-bab2-10631c5ba79a',
                zoneId: 'e257f2dc-890c-449f-9668-e5961b7fbd81',
                parameter: 'top',
                value: 0,
                priority: 0
            }
        ],
        zones: [
            {
                id: 'd088274e-1864-4a57-a0f5-08183e59c855',
                name: 'Default',
                geometry: null,
                cells: []
            },
            {
                id: 'e257f2dc-890c-449f-9668-e5961b7fbd81',
                name: 'Zone 2',
                geometry: {
                    type: 'Polygon',
                    coordinates: [[
                        [11.170349, 50.067718], [10.950623, 49.735131], [11.395569, 49.649848],
                        [11.774597, 49.961822], [11.170349, 50.067718]]
                    ]
                },
                cells: [
                    [2, 7], [3, 7], [4, 7], [2, 6], [3, 6], [4, 6], [5, 6],
                    [3, 5], [4, 5], [5, 5], [3, 4], [4, 4], [5, 4]
                ]
            }
        ]
    }
};

export const eSoilmodelLegacy = {
    properties: [],
    layers: [{
        id: '9c48d404-fedb-446d-bab2-10631c5ba79a',
        name: 'Top Layer',
        _meta: {
            zones: [{
                id: 'd088274e-1864-4a57-a0f5-08183e59c855',
                name: 'Default',
                geometry: null,
                cells: [],
                priority: 0,
                top: {
                    defaultValue: 1,
                    isActive: true,
                    label: 'top',
                    name: 'Top elevation',
                    unit: 'm a.s.l.',
                    value: 1
                },
                botm: {
                    defaultValue: 0,
                    isActive: true,
                    label: 'botm',
                    name: 'Bottom elevation',
                    unit: 'm a.s.l.',
                    value: 0
                },
                hk: {
                    defaultValue: 10,
                    isActive: true,
                    label: 'hk',
                    name: 'Horizontal conductivity along rows',
                    unit: 'm/day',
                    value: 10
                },
                hani: {
                    defaultValue: 1,
                    isActive: true,
                    label: 'hani',
                    name: 'Horizontal hydraulic anisotropy',
                    unit: '-',
                    value: 1
                },
                vka: {
                    defaultValue: 1,
                    isActive: true,
                    label: 'vka',
                    name: 'Vertical hydraulic conductivity',
                    unit: 'm/day',
                    value: 1
                },
                ss: {
                    defaultValue: 2.0e-5,
                    isActive: true,
                    label: 'ss',
                    name: 'Specific storage',
                    unit: '-',
                    value: 2.0e-5
                },
                sy: {
                    defaultValue: 0.15,
                    isActive: true,
                    label: 'sy',
                    name: 'Specific yield',
                    unit: '1/m',
                    value: 0.15
                }
            }, {
                id: 'e257f2dc-890c-449f-9668-e5961b7fbd81',
                name: 'Zone 2',
                geometry: {
                    type: 'Polygon',
                    coordinates: [[
                        [11.170349, 50.067718], [10.950623, 49.735131], [11.395569, 49.649848],
                        [11.774597, 49.961822], [11.170349, 50.067718]]
                    ]
                } as Polygon,
                cells: [[2, 7], [3, 7], [4, 7], [2, 6], [3, 6], [4, 6], [5, 6], [3, 5], [4, 5], [5, 5], [3, 4],
                    [4, 4], [5, 4]] as ICells,
                priority: 1,
                top: {
                    defaultValue: 0,
                    id: '0d0f5bf0-4795-4af7-a28b-71534b603ad1',
                    isActive: true,
                    label: 'param',
                    name: 'Soilmodel Parameter',
                    unit: '-',
                    value: 0
                },
                botm: {
                    defaultValue: 0,
                    id: '364f25aa-6c92-40d0-90ba-0a1d5181097b',
                    isActive: false,
                    label: 'param',
                    name: 'Soilmodel Parameter',
                    unit: '-',
                    value: 0
                },
                hk: {
                    defaultValue: 0,
                    id: '652d37a9-beae-4619-bee1-2ab19e882426',
                    isActive: false,
                    label: 'param',
                    name: 'Soilmodel Parameter',
                    unit: '-',
                    value: 0
                },
                hani: {
                    defaultValue: 0,
                    id: '0fc13245-cd24-4832-b63a-96fe35b1ab97',
                    isActive: false,
                    label: 'param',
                    name: 'Soilmodel Parameter',
                    unit: '-',
                    value: 0
                },
                vka: {
                    defaultValue: 0,
                    id: '85a8af14-e048-48b3-876e-dd247279a8ef',
                    isActive: false,
                    label: 'param',
                    name: 'Soilmodel Parameter',
                    unit: '-',
                    value: 0
                },
                ss: {
                    defaultValue: 0,
                    id: 'f433d789-9302-40bd-89bf-852e8395dd13',
                    isActive: false,
                    label: 'param',
                    name: 'Soilmodel Parameter',
                    unit: '-',
                    value: 0
                },
                sy: {
                    defaultValue: 0,
                    id: '864673fb-198d-4016-90c5-e409233db9b3',
                    isActive: false,
                    label: 'param',
                    name: 'Soilmodel Parameter',
                    unit: '-',
                    value: 0
                }
            }]
        },
        description: '',
        number: 0,
        laytyp: 0,
        top: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 1, 1, 1, 1], [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
            [1, 1, 0, 0, 0, 0, 1, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ] as Array2D<number>,
        botm: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ] as Array2D<number>,
        hk: [
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
        ] as Array2D<number>,
        hani: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ] as Array2D<number>,
        vka: [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ] as Array2D<number>,
        layavg: 0,
        laywet: 0,
        ss: [
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5],
            [2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5, 2.0e-5]
        ] as Array2D<number>,
        sy: [
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15],
            [0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15, 0.15]
        ] as Array2D<number>
    }]
};
