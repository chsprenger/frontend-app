import PropTypes from 'prop-types';
import React from 'react';

import {includes} from 'lodash';
import {withRouter} from 'react-router-dom';

import {AppContainer} from '../../shared';
import {Background, ChartT09D as Chart, InfoT09D as Info, Parameters, SettingsT09D as Settings} from '../components';
import {SliderParameter, ToolGrid, ToolMetaData} from '../../shared/simpleTools';
import {navigation} from './T09';

import SimpleToolsCommand from '../../shared/simpleTools/commands/SimpleToolsCommand';

import image from '../images/T09D.png';
import {defaults} from '../defaults/T09D';

import {fetchTool, sendCommand} from 'services/api';
import {buildPayload, deepMerge} from '../../shared/simpleTools/helpers';

class T09D extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tool: defaults(),
            isDirty: true,
            isLoading: false,
            error: false
        };
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.setState({isLoading: true});
            fetchTool(
                this.state.tool.tool,
                this.props.match.params.id,
                tool => this.setState({
                    tool: deepMerge(this.state.tool, tool),
                    isDirty: false,
                    isLoading: false
                }),
                error => this.setState({error, isLoading: false})
            );
        }
    }

    save = () => {
        const {id} = this.props.match.params;
        const {tool} = this.state;

        if (id) {
            sendCommand(
                SimpleToolsCommand.updateToolInstance(buildPayload(tool)),
                () => this.setState({isDirty: false}),
                () => this.setState({error: true})
            );
            return;
        }

        sendCommand(
            SimpleToolsCommand.createToolInstance(buildPayload(tool)),
            () => this.props.history.push(`${this.props.location.pathname}/${tool.id}`),
            () => this.setState({error: true})
        );
    };

    handleChangeParameters = (parameters) => {
        this.setState(prevState => {
            return {
                ...prevState,
                tool: {
                    ...prevState.tool,
                    data: {
                        ...prevState.tool.data,
                        parameters: parameters.map(p => p.toObject)
                    }
                },
                isDirty: true
            };
        });
    };

    handleChangeSettings = (settings) => {
        this.setState(prevState => {
            return {
                ...prevState,
                tool: {
                    ...prevState.tool,
                    data: {...prevState.tool.data, settings}
                },
                isDirty: true
            };
        });
    };

    handleReset = () => {
        this.setState(prevState => {
            return {
                tool: {...prevState.tool, data: defaults().data},
                isLoading: false,
                isDirty: true
            }
        });
    };

    update = (tool) => this.setState({tool});

    render() {
        if (this.state.isLoading) {
            return (
                <AppContainer navBarItems={navigation} loader/>
            );
        }

        const {isDirty, tool} = this.state;
        const {data, permissions} = tool;
        const {parameters, settings} = data;
        const readOnly = !includes(permissions, 'w');

        return (
            <AppContainer navbarItems={navigation}>
                <ToolMetaData
                    tool={tool}
                    readOnly={readOnly}
                    onChange={this.update}
                    onSave={this.save}
                    isDirty={isDirty}
                />
                <ToolGrid rows={2}>
                    <Background
                        image={image}
                        title={'T09D. Saltwater intrusion // Critical well discharge'}
                    />
                    <Chart parameters={parameters}/>
                    <div>
                        <Settings settings={settings} onChange={this.handleChangeSettings}/>
                        <Info parameters={parameters} settings={settings}/>
                    </div>
                    <Parameters
                        parameters={parameters.map(p => SliderParameter.fromObject(p))}
                        handleChange={this.handleChangeParameters}
                        handleReset={this.handleReset}
                    />
                </ToolGrid>
            </AppContainer>
        );
    }
}

T09D.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default withRouter(T09D);
