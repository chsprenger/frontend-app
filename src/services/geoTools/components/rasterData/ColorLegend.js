import PropTypes from 'prop-types';
import React from 'react';

const styles = {
    horizontal: {
        height: '12px'
    },
    label: {
        height: '20px',
        display: 'flex',
        alignItems: 'center'
    },
    labels: {
        marginLeft: '0.5em'
    },
    legend: {
        margin: '5px',
        padding: 0,
        listStyle: 'none'
    },
    legendLi: {
        float: 'left',
        marginRight: '10px'
    },
    legendSpan: {
        float: 'left',
        width: '20px',
        height: '12px',
        margin: '2px'
    },
    stripe: {
        width: '20px',
        height: '80px',
        transform: 'translateY(10px)',
        opacity: '0.5'
    },
    vertical: {
        position: 'absolute',
        display: 'flex',
        zIndex: 1000,
        bottom: 0,
        left: 0,
        marginLeft: '0.5em'
    }
};

class ColorLegend extends React.Component {

    renderVerticalLabels = (unit) => {
        const legend = this.props.legend;

        return legend.map((l, index) => {
            return (
                <div style={styles.label} key={index}>{l.value} {unit}</div>
            );
        });
    };

    renderVerticalGradients = () => {
        const legend = this.props.legend;

        let gradient = 'linear-gradient(to bottom';
        legend.forEach((l, index) => {
            gradient += ', ' + l.color + ' ' + ((index + 1) / legend.length * 100) + '%';
        });

        gradient += ')';

        return gradient;
    };

    renderVerticalColorLegend = (unit) => {
        const gradient = this.renderVerticalGradients();
        const labels = this.renderVerticalLabels(unit);
        const legend = this.props.legend;

        return (
            <div>
                <div style={styles.vertical}>
                    <div style={{
                        ...styles.stripe,
                        backgroundImage: gradient,
                        height: (legend.length - 1) * 20
                    }}
                    />
                    <div style={styles.labels}>
                        {labels}
                    </div>
                </div>
            </div>
        );
    };

    renderHorizontalColorLegend = () => {
        const {legend, unit} = this.props;

        const reducedLegend = [];
        reducedLegend.push(legend[legend.length - 1]);
        reducedLegend.push(legend[Math.floor(legend.length / 2)]);
        reducedLegend.push(legend[0]);

        return (
            <div>
                <div style={styles.horizontal}>
                    <ul style={styles.legend}>
                        <li style={styles.legendLi}><span style={{
                            ...styles.legendSpan,
                            backgroundColor: reducedLegend[0].color
                        }}/> {reducedLegend[0].value} {unit}
                        </li>
                        <li style={styles.legendLi}><span style={{
                            ...styles.legendSpan,
                            backgroundColor: reducedLegend[1].color
                        }}/> {reducedLegend[1].value} {unit}
                        </li>
                        <li style={styles.legendLi}><span style={{
                            ...styles.legendSpan,
                            backgroundColor: reducedLegend[2].color
                        }}/> {reducedLegend[2].value} {unit}
                        </li>
                    </ul>
                </div>
            </div>
        );
    };

    render() {
        const {orientation, unit = 'm'} = this.props;

        if (!orientation || orientation === 'vertical') {
            return this.renderVerticalColorLegend(unit);
        }

        return this.renderHorizontalColorLegend();
    }
}

ColorLegend.propTypes = {
    legend: PropTypes.array,
    orientation: PropTypes.string,
    unit: PropTypes.string
};

export default ColorLegend;