import React from 'react';
import PropTypes from 'prop-types';

import {includes} from 'lodash';
import {withRouter} from 'react-router-dom';

import {AppContainer} from '../../shared';
import {Background, ChartT13A as Chart, Parameters} from '../components';
import {SliderParameter, ToolGrid, ToolMetaData} from '../../shared/simpleTools';
import {navigation} from './T13';

import SimpleToolsCommand from '../../shared/simpleTools/commands/SimpleToolsCommand';

import image from '../images/T13A.png';
import {defaults} from '../defaults/T13A';

import {fetchTool, sendCommand} from 'services/api';
import {buildPayload, deepMerge} from '../../shared/simpleTools/helpers';

class T13A extends React.Component {
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
                this.state.tool.type,
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
        const {parameters} = data;
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
                        title='T13A. Travel time // Aquifer system with a no-flow boundary and fixed head boundary condition'
                    />
                    <Chart parameters={parameters}/>
                    <div/>
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

T13A.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default withRouter(T13A);