const getConfig = () => ({
    BASE_URL: process.env.REACT_APP_API_URL + '/v3',
    DATADROPPER_URL: process.env.REACT_APP_DATADROPPER_URL || 'https://datadropper.inowas.com',
    GEOPROCESSING_URL: process.env.REACT_APP_GEOPROCESSING_URL || 'https://processing.inowas.com/rasters',
    MODFLOW_CALCULATION_URL: process.env.REACT_APP_MODFLOW_CALCULATION_URL || 'https://modflow.inowas.com',
    JSON_SCHEMA_URL: process.env.REACT_APP_JSON_SCHEMA_URL || 'https://schema.inowas.com',
    USERS_CAN_REGISTER: process.env.REACT_APP_USERS_CAN_REGISTER !== 'false',
    PUBLIC_PROJECTS_ACCESS: process.env.REACT_APP_PUBLIC_PROJECTS_ACCESS !== 'false',
    VERSION: process.env.REACT_APP_VERSION || 'dev'
});

export default getConfig;
