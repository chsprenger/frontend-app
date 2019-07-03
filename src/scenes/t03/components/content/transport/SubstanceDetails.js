import React from 'react';
import PropTypes from 'prop-types';
import {Button, Dropdown, Form, Grid, Icon, Label, Segment} from 'semantic-ui-react';
import {Substance} from '../../../../../core/model/modflow/transport';
import {BoundaryCollection, Stressperiods} from '../../../../../core/model/modflow';
import NoContent from '../../../../shared/complexTools/noContent';
import {SubstanceValuesDataTable} from './SubstanceValuesDataTable';

class SubstanceDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedBoundaryId: null,
            substance: props.substance && props.substance.toObject()
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedBoundaryId: nextProps.substance && nextProps.substance.boundaryConcentrations
                .filter(bc => bc.id === this.state.selectedBoundaryId).length === 1
                ? this.state.selectedBoundaryId : null,
            substance: nextProps.substance && nextProps.substance.toObject()
        });
    }

    handleSelectBoundary = (id) => () => {
        return this.setState({selectedBoundaryId: id})
    };

    addBoundary = (e, {value}) => {
        const substance = Substance.fromObject(this.state.substance);
        substance.addBoundaryId(value);
        substance.updateConcentrations(value, this.props.stressperiods.stressperiods.map(() => 0));
        return this.setState({
            selectedBoundaryId: value,
            substance: substance.toObject()
        }, this.props.onChange(substance));
    };

    removeBoundary = () => {
        const substance = Substance.fromObject(this.state.substance);
        substance.removeBoundaryId(this.state.selectedBoundaryId);
        return this.setState({
            selectedBoundaryId: null,
            substance: substance.toObject()
        }, this.props.onChange(substance));
    };

    handleChange = () => {
        return this.props.onChange(Substance.fromObject(this.state.substance))
    };

    handleChangeSubstance = (substance) => {
        return this.props.onChange(substance);
    };

    renderBoundary(boundaryId, key) {
        const boundary = this.props.boundaries.all.filter(b => b.id === boundaryId);

        if (boundary.length !== 1) {
            return;
        }

        return (
            <Label
                onClick={this.handleSelectBoundary(boundary[0].id)}
                color={this.state.selectedBoundaryId === boundary[0].id ? 'blue' : 'grey'}
                as='a'
                key={key}>
                {boundary[0].name}
            </Label>
        )
    }

    render() {
        const {boundaries, readOnly} = this.props;
        const {selectedBoundaryId} = this.state;

        if (!this.state.substance) {
            return <NoContent message={'No substances defined.'}/>;
        }

        const substance = Substance.fromObject(this.state.substance);
        const {boundaryConcentrations} = substance;

        const filteredBoundaries = boundaries.all.filter(b => boundaryConcentrations.filter(bc => bc.id === b.id).length === 0);

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Form>
                            <Form.Field>
                                <Form.Input
                                    disabled={readOnly}
                                    name='name'
                                    value={substance.name}
                                    label={'Substance name'}
                                    onBlur={this.handleChange}
                                    onChange={this.handleLocalChange}
                                    width={'8'}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Dropdown
                                    button
                                    disabled={filteredBoundaries.length === 0}
                                    className='icon'
                                    floating
                                    labeled
                                    icon='plus'
                                    options={filteredBoundaries.map((b, key) => ({
                                        key,
                                        value: b.id,
                                        text: b.name
                                    }))}
                                    onChange={this.addBoundary}
                                    text='Add Boundary'
                                />
                                {selectedBoundaryId &&
                                <Button
                                    disabled={readOnly}
                                    labelPosition="left"
                                    icon
                                    negative
                                    onClick={this.removeBoundary}
                                >
                                    <Icon name="trash"/> Remove Boundary
                                </Button>
                                }
                            </Form.Field>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Segment>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column>
                                        {boundaryConcentrations.map((bc, key) => this.renderBoundary(bc.id, key))}
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        {selectedBoundaryId &&
                                        <SubstanceValuesDataTable
                                            selectedBoundaryId={selectedBoundaryId}
                                            onChange={this.handleChangeSubstance}
                                            readOnly={readOnly}
                                            stressperiods={this.props.stressperiods}
                                            substance={this.props.substance}
                                        />
                                        }
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        )
    }
}

SubstanceDetails.propTypes = {
    boundaries: PropTypes.instanceOf(BoundaryCollection).isRequired,
    onChange: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
    substance: PropTypes.instanceOf(Substance),
    stressperiods: PropTypes.instanceOf(Stressperiods).isRequired
};

export default SubstanceDetails;
