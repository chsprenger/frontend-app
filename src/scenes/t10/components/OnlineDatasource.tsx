import {uniqBy} from 'lodash';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ResponsiveContainer, Scatter, ScatterChart, XAxis, YAxis} from 'recharts';
import {Form, Grid, Header, Label, Segment} from 'semantic-ui-react';
import {IDateTimeValue, IOnlineDataSource} from '../../../core/model/rtm/Sensor.type';
import {fetchUrl} from '../../../services/api';

interface IProps {
    dataSource: IOnlineDataSource;
    onChange: (ds: IOnlineDataSource) => void;
}

export const servers = [{
    protocol: 'https',
    url: 'uit-sensors.inowas.com',
    path: 'sensors'
}];

interface ISensorMetaData {
    name: string;
    location: string;
    project: string;
    properties: string[];
    last: {
        date_time: string,
        data: { [name: string]: number };
    };
}

const onlineDataSource = (props: IProps) => {

    const [data, setData] = useState<IDateTimeValue[] | null>(null);
    const [fetchingMetadata, setFetchingMetaData] = useState<boolean>(false);
    const [fetchingData, setFetchingData] = useState<boolean>(false);
    const [fetchingError, setFetchingError] = useState<boolean>(false);

    const [server, setServer] = useState<string | null>(null);
    const [sensorMetaData, setSensorMetaData] = useState<ISensorMetaData[]>([]);

    const [project, setProject] = useState<string | null>(null);
    const [sensor, setSensor] = useState<string | null>(null);
    const [parameter, setParameter] = useState<string | null>(null);

    const [beginEnabled, setBeginEnabled] = useState<boolean>(false);
    const [begin, setBegin] = useState<number>(0);
    const [lBegin, setLBegin] = useState<number>(0);

    const [endEnabled, setEndEnabled] = useState<boolean>(false);
    const [end, setEnd] = useState<number>(moment.utc().unix());
    const [lEnd, setLEnd] = useState<number>(moment.utc().unix());

    const [minValueEnabled, setMinValueEnabled] = useState<boolean>(false);
    const [minValue, setMinValue] = useState<number | string>(0);
    const [maxValueEnabled, setMaxValueEnabled] = useState<boolean>(false);
    const [maxValue, setMaxValue] = useState<number | string>(0);

    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        const {dataSource} = props;

        if (dataSource.server) {
            setServer(dataSource.server);
        }

        if (dataSource.queryParams) {
            setProject(dataSource.queryParams.project);
            setSensor(dataSource.queryParams.sensor);
            setParameter(dataSource.queryParams.property);
        }

        if (dataSource.timeRange) {
            const [minTime, maxTime] = dataSource.timeRange;

            if (minTime) {
                setBeginEnabled(true);
                setBegin(minTime);
                setLBegin(minTime);
            }

            if (maxTime) {
                setEndEnabled(true);
                setEnd(maxTime);
                setLEnd(maxTime);
            }
        }

        if (dataSource.valueRange) {
            const [minVal, maxVal] = dataSource.valueRange;
            if (minVal) {
                setMinValueEnabled(true);
                setMinValue(minVal);
            }

            if (maxVal) {
                setMaxValueEnabled(true);
                setMaxValue(maxVal);
            }
        }

        if (dataSource.url) {
            setUrl(dataSource.url);
        }

    }, []);

    useEffect(() => {
        fetchServerMetadata(server);
    }, [server]);

    useEffect(() => {
        executeQuery();
    }, [begin, end, beginEnabled, endEnabled, minValue, minValueEnabled, maxValueEnabled, maxValue, parameter]);

    useEffect(() => {
        updateDataSource();
    }, [begin, beginEnabled, end, endEnabled, minValue, minValueEnabled, maxValueEnabled, maxValue, url]);

    useEffect(() => {
        if (!data || data.length === 0) {
            return;
        }

        if (!beginEnabled) {
            setBeginEnabled(true);
            setBegin(data[0].timeStamp);
            setLBegin(data[0].timeStamp);
        }

        if (!endEnabled) {
            setEndEnabled(true);
            setEnd(data[data.length - 1].timeStamp);
            setLEnd(data[data.length - 1].timeStamp);
        }

    }, [data]);

    const updateDataSource = () => {
        if (server && project && sensor && parameter && url) {
            const ds = {
                ...props.dataSource,
                server,
                queryParams: {
                    sensor,
                    project,
                    property: parameter
                },
                valueRange: [
                    minValueEnabled ? minValue as number : null,
                    maxValueEnabled ? maxValue as number : null
                ],
                timeRange: [
                    beginEnabled ? begin : null,
                    endEnabled ? end : null
                ],
                url
            };

            props.onChange(ds);
        }
    };

    const handleChangeParameter = (e: any, d: any) => {
        const {value} = d;
        setParameter(value);
        setBeginEnabled(false);
        setEndEnabled(false);
        setMinValueEnabled(false);
        setMaxValueEnabled(false);
    };

    const handleChange = (f: (v: any) => void) => (e: any, d: any) => {

        if (d && d.hasOwnProperty('value')) {
            return f(d.value);
        }

        if (d && d.hasOwnProperty('checked')) {
            return f(d.checked);
        }

        return f(e.target.value);
    };

    const handleBlur = (f: (v: any) => void) => (v: any) => {
        f(v);
    };

    const fetchServerMetadata = (serverUrl: string | null) => {
        if (!serverUrl) {
            return;
        }

        const filteredServers = servers.filter((s) => s.url = serverUrl);
        if (filteredServers.length === 0) {
            return;
        }

        const srv = filteredServers[0];

        setFetchingMetaData(true);
        fetchUrl(
            new URL(`${srv.path}/`, `${srv.protocol}://${srv.url}`).toString(),
            (d: ISensorMetaData[]) => {
                setSensorMetaData(d);
                setFetchingMetaData(false);
            },
            () => {
                setFetchingMetaData(false);
                setFetchingError(true);
            });
    };

    const executeQuery = () => {
        if (!(server && project && sensor && parameter)) {
            return;
        }

        const filteredServers = servers.filter((s) => s.url = server);
        if (filteredServers.length === 0) {
            return;
        }

        const srv = filteredServers[0];

        setData(null);
        setFetchingError(false);
        setFetchingData(true);

        let queryUrl = new URL(
            `${srv.path}/project/${project}/sensor/${sensor}/property/${parameter}`,
            `${srv.protocol}://${srv.url}`
        ).toString();

        if (beginEnabled || endEnabled || minValueEnabled || maxValueEnabled) {
            queryUrl += '?';

            if (beginEnabled) {
                queryUrl += 'begin=' + begin + '&';
            }

            if (endEnabled) {
                queryUrl += 'end=' + end + '&';
            }

            if (minValueEnabled) {
                queryUrl += 'min=' + minValue + '&';
            }

            if (maxValueEnabled) {
                queryUrl += 'max=' + maxValue + '&';
            }

            if (queryUrl.endsWith('&')) {
                queryUrl = queryUrl.substr(0, queryUrl.length - 1);
            }
        }

        fetchUrl(
            queryUrl,
            (response: any) => {
                const d: any = response.map((ds: any) => {
                    const [dateTime, value] = Object.values(ds);
                    return {
                        timeStamp: moment.utc(dateTime).unix(),
                        value
                    };
                });

                setData(d);
                setUrl(queryUrl);
                setFetchingData(false);
            },
            () => {
                setFetchingData(false);
                setFetchingError(true);
            });
    };

    const formatDateTimeTicks = (dt: number) => {
        return moment.unix(dt).format('YYYY/MM/DD');
    };

    const renderDiagram = () => {
        if (!data || !parameter) {
            return (
                <Header as={'h2'}>No data</Header>
            );
        }

        return (
            <ResponsiveContainer height={300}>
                <ScatterChart>
                    <XAxis
                        dataKey={'timeStamp'}
                        domain={[
                            beginEnabled ? begin : 'auto',
                            endEnabled ? end : 'auto',
                        ]}
                        name={'Date Time'}
                        tickFormatter={formatDateTimeTicks}
                        type={'number'}
                    />
                    <YAxis dataKey={'value'} name={parameter} domain={['auto', 'auto']}/>
                    <Scatter
                        data={data}
                        line={{stroke: '#eee'}}
                        lineJointType={'monotoneX'}
                        lineType={'joint'}
                        name={parameter}
                    />
                </ScatterChart>
            </ResponsiveContainer>
        );
    };

    return (
        <Grid padded={true}>
            <Grid.Row>
                <Grid.Column>
                    <Form>
                        <Segment raised={true} loading={fetchingMetadata} color={fetchingError ? 'red' : undefined}>
                            <Label as={'div'} color={'blue'} ribbon={true}>Server</Label>
                            <Form.Dropdown
                                width={6}
                                name={'server'}
                                selection={true}
                                value={server || undefined}
                                onChange={handleChange(setServer)}
                                options={servers.map((s) => ({key: s.url, value: s.url, text: s.url}))}
                            />
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Segment raised={true} loading={fetchingMetadata} color={fetchingError ? 'red' : undefined}>
                        <Label as={'div'} color={'blue'} ribbon={true}>Metadata</Label>
                        <Form>
                            <Form.Group>
                                {sensorMetaData && <Form.Dropdown
                                    label={'Project'}
                                    name={'project'}
                                    selection={true}
                                    value={project || undefined}
                                    onChange={handleChange(setProject)}
                                    options={uniqBy(sensorMetaData, 'project').map((s, idx) => ({
                                        key: idx,
                                        value: s.project,
                                        text: s.project
                                    }))}
                                />}

                                <Form.Dropdown
                                    label={'Sensor'}
                                    name={'sensor'}
                                    selection={true}
                                    value={sensor || undefined}
                                    onChange={handleChange(setSensor)}
                                    options={sensorMetaData.filter((s) => s.project === project).map((s, idx) => ({
                                        key: idx,
                                        value: s.name,
                                        text: s.name
                                    }))}
                                    disabled={!project}
                                />

                                <Form.Dropdown
                                    label={'Parameter'}
                                    name={'parameter'}
                                    selection={true}
                                    value={parameter || undefined}
                                    onChange={handleChangeParameter}
                                    options={sensorMetaData.filter((s) => s.project === project)
                                        .filter((s) => s.name === sensor).length === 0 ? [] :
                                        sensorMetaData.filter((s) => s.project === project)
                                            .filter((s) => s.name === sensor)[0].properties.map((p, idx) => ({
                                            key: idx,
                                            value: p,
                                            text: p
                                        }))
                                    }
                                    disabled={!sensor}
                                />
                            </Form.Group>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid.Row>

            {server &&
            <Grid.Row>
                <Grid.Column width={8}>
                    <Segment raised={true} loading={fetchingMetadata}>
                        <Label as={'div'} color={'blue'} ribbon={true}>Time range</Label>
                        <Form>
                            <Form.Group>
                                <Form.Checkbox
                                    style={{marginTop: '30px'}}
                                    toggle={true}
                                    checked={beginEnabled}
                                    onChange={handleChange(setBeginEnabled)}
                                />
                                <Form.Input
                                    label={'Start'}
                                    type={'date'}
                                    value={moment.unix(lBegin).format('YYYY-MM-DD')}
                                    disabled={!beginEnabled}
                                    onChange={handleChange((d) => setLBegin(moment.utc(d).unix()))}
                                    onBlur={handleBlur(() => setBegin(lBegin))}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Checkbox
                                    style={{marginTop: '30px'}}
                                    toggle={true}
                                    checked={endEnabled}
                                    onChange={handleChange(setEndEnabled)}
                                />
                                <Form.Input
                                    label={'End'}
                                    type={'date'}
                                    value={moment.unix(lEnd).format('YYYY-MM-DD')}
                                    disabled={!endEnabled}
                                    onChange={handleChange((d) => setLEnd(moment.utc(d).unix()))}
                                    onBlur={handleBlur(() => setEnd(lEnd))}
                                />
                            </Form.Group>
                        </Form>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                    <Segment raised={true} loading={fetchingMetadata}>
                        <Label as={'div'} color={'blue'} ribbon={true}>Value range</Label>
                        <Form>
                            <Form.Group>
                                <Form.Checkbox
                                    style={{marginTop: '30px'}}
                                    toggle={true}
                                    checked={maxValueEnabled}
                                    onChange={handleChange(setMaxValueEnabled)}
                                />
                                <Form.Input
                                    label={'Upper limit'}
                                    type={'number'}
                                    value={maxValue}
                                    disabled={!maxValueEnabled}
                                    onChange={handleChange((v) => setMaxValue(v))}
                                    onBlur={handleChange((v) => setMaxValue(parseFloat(v)))}
                                />
                            </Form.Group>
                            <Form.Group>
                                <Form.Checkbox
                                    style={{marginTop: '30px'}}
                                    toggle={true}
                                    checked={minValueEnabled}
                                    onChange={handleChange(setMinValueEnabled)}
                                />
                                <Form.Input
                                    label={'Lower limit'}
                                    type={'number'}
                                    value={minValue}
                                    disabled={!minValueEnabled}
                                    onChange={handleChange((v) => setMinValue(v))}
                                    onBlur={handleChange((v) => setMinValue(parseFloat(v)))}
                                />
                            </Form.Group>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            }

            {server &&
            <Grid.Row>
                <Grid.Column>
                    <Segment loading={(fetchingData || fetchingMetadata)} raised={true}>
                        {!fetchingData && <Label as={'div'} color={'red'} ribbon={true}>Data</Label>}
                        {renderDiagram()}
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            }
        </Grid>
    );
};

export default onlineDataSource;