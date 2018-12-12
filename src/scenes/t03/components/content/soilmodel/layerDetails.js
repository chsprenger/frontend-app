import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, Icon, Tab} from 'semantic-ui-react';
import {ModflowModel} from 'core/model/modflow';
import {SoilmodelLayer} from 'core/model/modflow/soilmodel';

import layerParameters from '../../../defaults/soilmodel';
import LayerParameter from './layerParameter';

class LayerDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            layer: props.layer.toObject()
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(() => ({
            layer: nextProps.layer.toObject()
        }));
    }

    handleChange = () => {
        this.props.onChange(SoilmodelLayer.fromObject(this.state.layer));
    };

    handleLocalChange = (e, {name, value}) => {
        const layer = this.state.layer;
        layer[name] = value;

        this.setState({
            layer: layer
        });
    };

    handleZonesChange = (layer) => {
        console.log('HANDLE ZONES CHANGE', layer);
        this.setState({
            layer: layer.toObject()
        });
    };

    handleSelect = (e, {name, value}) => {
        const layer = this.state.layer;
        layer[name] = value;

        this.props.onChange(SoilmodelLayer.fromObject(layer));
    };

    render() {
        const {model, readOnly} = this.props;
        const {layer} = this.state;
        if (!layer || !layer) {
            return null;
        }

        const panes = [{
            menuItem: 'Name and Type', render: () =>
                <Tab.Pane attached={false}>
                    <Form.Group widths={2}>
                        <Form.Input
                            disabled={readOnly}
                            name='name'
                            value={layer.name}
                            label={'Layer name'}
                            onBlur={this.handleChange}
                            onChange={this.handleLocalChange}
                        />
                        <Form.TextArea
                            disabled={readOnly}
                            name='description'
                            value={layer.description}
                            label={'Layer description'}
                            onBlur={this.handleChange}
                            onChange={this.handleLocalChange}
                        />
                    </Form.Group>
                    <Form.Group widths={3}>
                        <Form.Select
                            disabled={readOnly}
                            label={'Layer type'}
                            value={layer.laytyp}
                            name='laytyp'
                            onChange={this.handleSelect}
                            options={[
                                {
                                    value: 0,
                                    text: 'confined',
                                },
                                {
                                    value: 1,
                                    text: 'convertible',
                                },
                                {
                                    value: -1,
                                    text: 'convertible (unless THICKSTRT)',
                                }
                            ]}
                        />
                        <Form.Select
                            disabled={readOnly}
                            label={'Layer average calculation'}
                            value={layer.layavg}
                            name='layavg'
                            onChange={this.handleSelect}
                            options={[
                                {
                                    value: 0,
                                    text: 'harmonic mean'
                                },
                                {
                                    value: 1,
                                    text: 'logarithmic mean'
                                },
                                {
                                    value: 2,
                                    text: 'arithmetic mean (saturated thickness) and logarithmic mean (hydraulic conductivity)'
                                }
                            ]}
                        />
                        <Form.Select
                            disabled={readOnly}
                            label={'Rewetting capability'}
                            value={layer.laywet}
                            name='laywet'
                            onChange={this.handleSelect}
                            options={[
                                {
                                    value: 0,
                                    text: 'No'
                                },
                                {
                                    value: 1,
                                    text: 'Yes'
                                },
                            ]}
                        />
                    </Form.Group>
                    <Button floated='right' onClick={() => this.props.onRemove(layer.id)}>
                        <Icon name='trash'/> Delete Layer
                    </Button>
                </Tab.Pane>
        }];

        layerParameters.forEach(p => {
            panes.push({
                menuItem: p.name, render: () =>
                    <Tab.Pane attached={false}>
                        <LayerParameter
                            model={model}
                            onChange={this.handleZonesChange}
                            parameter={p}
                            readOnly={readOnly}
                            layer={SoilmodelLayer.fromObject(layer)}
                        />
                    </Tab.Pane>
            });
        });

        return (
            <Form>
                <Tab panes={panes}/>
            </Form>
        )
    }
}

LayerDetails.proptypes = {
    layer: PropTypes.instanceOf(SoilmodelLayer).isRequired,
    model: PropTypes.instanceOf(ModflowModel).isRequired,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    readOnly: PropTypes.bool
};

export default LayerDetails;
