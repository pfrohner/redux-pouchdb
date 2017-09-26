import React from 'react';
import { connect } from 'react-redux';
import { LinearProgress } from 'material-ui/Progress';

/**
 * AppLoader
 *
 * @param {boolean} isLoading
 * @return {XML}
 * @constructor
 */
const AppLoader = ({ isLoading }) => {
	return (
		<LinearProgress
			mode={isLoading ? "indeterminate" : "determinate"}
			value={0}
		/>
	);
};

// Mapping global state into component properties

const mapStateToProps = ({ application }) => ({
	isLoading : application.isFetching
});

export default connect(mapStateToProps)(AppLoader);
